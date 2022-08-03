FROM node:16.15.1 AS builder

WORKDIR /code

COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
COPY webpack.config.base.js /code/webpack.config.base.js
COPY webpack.config.dev.js /code/webpack.config.dev.js
COPY webpack.config.prod.js /code/webpack.config.prod.js
COPY .babelrc /code/.babelrc

RUN npm install

COPY ./src/ /code/src/

RUN npm run build

# stage 2
FROM nginx

COPY ./nginx/ /etc/nginx/templates/
COPY --from=builder /code/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]