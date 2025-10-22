# Use the official Node.js image
FROM node:20

# Create and set app directory inside container
WORKDIR /usr/src/app

# Install git to fix build errors with missing git
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire app source code
COPY . .

# Build the app
# RUN npm run build

# Expose the port your Nest app uses
EXPOSE 4000

# Run the app
CMD ["npm", "run", "start"]
