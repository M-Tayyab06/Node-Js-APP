# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .
      
# Expose the port and start the server
EXPOSE 3000

# Run the script or application
CMD ["node", "src/app.js"]
