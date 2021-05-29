FROM nginx

ENV DOCKERIZE_VERSION v0.6.1

COPY dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz .

RUN tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY default.conf /etc/nginx/conf.d/