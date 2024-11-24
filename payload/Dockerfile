FROM node:23-alpine3.20

COPY package*.json .

RUN npm i --legacy-peer-deps

CMD ["npm", "run", "dev", "--turbo"]
