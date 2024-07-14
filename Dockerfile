# Build stage
FROM node:20-alpine as build-stage

# Set working directory
WORKDIR /studentdirectory-react-js

# Copy all files to the working directory
COPY . .

# Install dependencies and build the project
RUN npm install && npm run build

# Production stage
FROM nginx:1.26.1-alpine as prod-stage

# Expose port 80
EXPOSE 80

# Copy the build output to the Nginx HTML directory
COPY --from=build-stage /studentdirectory-react-js/build /usr/share/nginx/html

