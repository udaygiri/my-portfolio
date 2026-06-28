FROM node:20-alpine

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5279

CMD [ "npm", "run", "dev"]