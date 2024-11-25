FROM node:23-alpine3.20

USER node

WORKDIR /home/node/app

COPY --chown=node:node package*.json .

RUN npm i

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
