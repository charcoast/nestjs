FROM node:14.15

RUN npm install -g @nestjs/cli@8.0.0

USER node

WORKDIR /home/node/app