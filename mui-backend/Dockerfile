# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install


# Copy the rest of the backend code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

RUN npm install axios

# Expose the backend port
EXPOSE 3000

# Run Prisma migrations (development only)
CMD ["sh", "-c", "node index.js"]