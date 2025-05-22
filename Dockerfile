# Dockerfile

# Stage 1: Build the NestJS application
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if you use npm) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy the rest of the application source code
COPY . .

# Generate Prisma Client (if prebuild script doesn't handle it in `npm ci`)
# It's good to have it here explicitly if 'npm ci' doesn't run 'prebuild'
RUN npx prisma generate

# Build the NestJS application
RUN npm run build


# Stage 2: Run the production application
FROM node:18-alpine AS production

# Set the working directory inside the container
WORKDIR /app

# Copy only necessary files from the build stage
# Copy node_modules (production dependencies only)
COPY --from=build /app/node_modules ./node_modules
# Copy the compiled application
COPY --from=build /app/dist ./dist
# Copy prisma schema for runtime access (important for Prisma client)
COPY --from=build /app/prisma ./prisma
# Copy package.json (needed for 'start' script)
COPY package.json ./
# Copy .env file if it's used in production (be careful with sensitive data)
# If .env is only for local dev, ensure env vars are set in Railway
# COPY --from=build /app/.env ./.env

# Expose the port (replace with your application's port, e.g., 3000)
EXPOSE 3000

# Start the application in production mode
CMD [ "npm", "run", "start:prod" ]