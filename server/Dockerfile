# Use Node.js version 20 as the base image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Specify the command to run
CMD ["npm", "start"]

# Expose port 3000
EXPOSE 3000
