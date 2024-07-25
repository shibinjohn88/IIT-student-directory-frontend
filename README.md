
# Student Directory Frontend

Frontend for web application ABC School Student Directory. 

## Development

Application uses React framework and Bootstrap for css styling. 

## Continous Deployment

Application is deployed to AWS Elastic Beanstalk using github actions. Whenever there is a push to master branch application will be automatically deployed to Elastic Beanstalk.
.github/eb.yml is the github action workflow file used for continous deployment. 

## Container

Application uses docker container. The file docker-compose.yml is used to make a docker container using nginx image and nginx.conf configuration file. 

## Web Server

Application is served by nginx web server. React build folder is served by nginx server using port 80. 

## Backend 

Backend used for this application is Student Directory Backend.
https://github.com/shibinjohn88/IIT-student-directory-backend 

## Application URL

URL: http://samplereactapp.us-east-1.elasticbeanstalk.com/


