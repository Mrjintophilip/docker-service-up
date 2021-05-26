FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install 
RUN npm install express
COPY hello-world.js ./
