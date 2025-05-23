# --------- Stage 1: Build the NestJS application ---------
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

RUN npm install -g @nestjs/cli

COPY . .

RUN npm run build


# --------- Stage 2: Run the compiled application ---------
FROM node:18-alpine AS production

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY package.json ./

EXPOSE 3000

CMD ["node", "dist/src/main.js"]
