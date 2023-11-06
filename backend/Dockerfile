FROM node:16.0
MAINTAINER Shashank Sanket <shashank.sanket014@gmail.com>

WORKDIR /usr/src/yic

COPY ./package*.json ./
RUN npm ci

COPY ./config ./config
COPY ./test ./test
COPY ./public ./public


COPY ./docker-entry-point.sh .
COPY ./docker-bull-entry-point.sh .
COPY ./.sequelizerc .

COPY ./src ./src


EXPOSE 80
ENTRYPOINT ["./docker-entry-point.sh"]