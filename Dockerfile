FROM node:24.3

COPY . ~/app

WORKDIR ~/app

RUN npm install

CMD ["node", "main.js"]