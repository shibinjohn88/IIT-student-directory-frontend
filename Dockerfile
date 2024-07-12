# Build stage
FROM node:16-alpine as build-stage

# Set environment variables
ENV PORT=3000

# Set working directory
WORKDIR /studentdirectory-react-js

# Copy all files to the working directory
COPY . .

# Install dependencies and build the project
RUN npm install && npm run build

# Production stage
FROM nginx:1.22.1-alpine as prod-stage

# Copy the build output to the Nginx HTML directory
COPY --from=build-stage /studentdirectory-react-js/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
