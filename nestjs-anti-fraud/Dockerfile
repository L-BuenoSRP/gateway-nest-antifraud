# FROM node:20-alpine

# WORKDIR /app

# RUN npm install -g @nestjs/cli

# COPY . /app/

# # RUN npm install

# EXPOSE 3000

# # CMD [ "npm", "run", "start:dev" ]

# CMD [ "tail", "-f", "/dev/null" ]



FROM node:23.0.0-slim

RUN apt update && \
    apt install openssl procps -y && \
    npm install -g @nestjs/cli@11.0.6

USER node

WORKDIR /home/node/app

# EXPOSE 3000

CMD [ "tail", "-f", "/dev/null" ]