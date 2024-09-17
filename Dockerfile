# Use the official Node.js image with Alpine
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Copy .env.example to .env
COPY .env.example .env

# Expose the application port
EXPOSE 8080

# Start the application
CMD ["/bin/sh", "-c", "./wait-for-it.sh db:${DB_PORT} -- yarn migrate:run && yarn start"]
