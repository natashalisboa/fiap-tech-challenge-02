FROM node:20-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

ARG DATABASE_HOST

RUN npm i -g pnpm

RUN pnpm build

EXPOSE 3000

CMD ["node", "build/app"]