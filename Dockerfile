FROM node:12.16.3

RUN mkdir -p /src/app

FROM node:12-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 5000

CMD [ "npm", "run", "sdc-prod" ]
