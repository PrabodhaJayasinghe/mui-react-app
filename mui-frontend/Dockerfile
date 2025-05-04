# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN pnpm install

# Install prop-types
RUN pnpm add prop-types

# Copy the rest of the frontend code
COPY . .

# Expose the development server port (default is 5173 for Vite)
EXPOSE 5173

# Start the development server
CMD ["pnpm", "run", "dev", "--host"]
