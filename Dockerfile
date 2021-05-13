FROM node:14

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

ENTRYPOINT [ "npm" , "run" ]

CMD [ "serve" ]