FROM node:24.3

COPY . ~/app

WORKDIR ~/app

CMD ["node", "main.js"]