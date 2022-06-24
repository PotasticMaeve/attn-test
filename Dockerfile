
# Preparing Stage
FROM node:alpine as base
LABEL author="Claudia"

# Builder Stage
FROM base as builder
WORKDIR /app

RUN apk update && apk add --update git curl
# RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
# RUN apt-get update && apt-get install -y nodejs

# RUN git clone --branch master --single-branch https://github.com/PotasticMaeve/media-app.git
# WORKDIR /app/media-app

WORKDIR /app/media-app
COPY . .


RUN npm i
RUN npm run build

# Runtime Stage
FROM base as runtime 
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/media-app/build .