# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Vue.js application (you can adjust the build command as needed)
RUN npm run build

# Expose the port the application will run on
EXPOSE 8080

# Start the application
CMD ["npm", "run", "serve"]