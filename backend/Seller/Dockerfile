FROM node:16.15.1

WORKDIR /code

COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json

RUN npm install

COPY ./src /code/src

CMD npm start