FROM node:14-alpine3.13

COPY . .

ENV DOCKERIZE_VERSION v0.6.1
RUN tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

WORKDIR /home/node/app

COPY . .

RUN npm install

ENTRYPOINT [ "node", "index.js" ]