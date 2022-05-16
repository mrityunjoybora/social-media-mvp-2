FROM node:16-slim as build

WORKDIR /var/www/client

COPY client/package*.json .
RUN npm install 

COPY client .
RUN npm run build

FROM node:16-slim

WORKDIR /var/www

COPY package*.json .
RUN npm install 
COPY . .
RUN rm -rf client
COPY --from=build /var/www/client/build client/build

ENV NODE_ENV=production

CMD ["node", "server/server.js"]
