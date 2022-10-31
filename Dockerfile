FROM node:19.0

RUN apt-get update

RUN apt-get install -y vim git default-jre

RUN mkdir src

COPY . /src

WORKDIR /src

RUN npm install

ENTRYPOINT [ "bash" ]
