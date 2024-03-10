FROM node:20

WORKDIR /app

RUN npm install -g @nestjs/cli

COPY . .

RUN npm i

RUN npm run build

CMD [ "npm", "run", "start:dev" ]
