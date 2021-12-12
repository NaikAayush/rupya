# Build
FROM node:14 as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run config:prod

RUN npm run build


# Serve
FROM nginx:latest

COPY --from=build /usr/local/app/dist/faucet-webapp /usr/share/nginx/html

EXPOSE 80