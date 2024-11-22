FROM node:23-alpine3.19

COPY package.json .

COPY pnpm-lock.yaml .

RUN npm i -g pnpm

RUN pnpm i

CMD ["pnpm", "dev"]
