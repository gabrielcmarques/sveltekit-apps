FROM node:20-alpine
RUN apk add --no-cache python3 g++ make
WORKDIR /app
COPY . .
RUN pnpm install --production
CMD ["node", "/app/src/index.js"]