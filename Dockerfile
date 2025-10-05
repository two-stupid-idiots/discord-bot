# Node.js as base image
FROM node:22.13.0

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Start the app
CMD ["npm", "start"]
