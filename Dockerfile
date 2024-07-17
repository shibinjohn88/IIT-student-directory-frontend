# Build stage
FROM node:20-alpine as build-stage

# Set working directory
WORKDIR /studentdirectory-react-js

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application code to the working directory
COPY . .

# build the project
RUN npm run build

# Production stage
FROM nginx:1.26.1-alpine as prod-stage

# Expose port 80
EXPOSE 80

# Copy the build output to the Nginx HTML directory
COPY --from=build-stage /studentdirectory-react-js/build /usr/share/nginx/html

