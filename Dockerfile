FROM node:20-alpine

ENV HOST=0.0.0.0

RUN npm install -g firebase-tools@12.1.0

COPY ./web /web
WORKDIR /web
RUN npm install

EXPOSE 3000
EXPOSE 24678
