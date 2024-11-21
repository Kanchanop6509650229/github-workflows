# Use Node.js LTS (Long Term Support) as base image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    git \
    && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./

# Install project dependencies
RUN npm install -g jest && \
    npm install

# Copy project files
COPY . .

# Run tests as default command
CMD ["npm", "test"]
