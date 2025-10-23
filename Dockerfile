# Stage 1: Build React App
FROM node:20-alpine
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm install

# Copy source code and build
COPY . .

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
