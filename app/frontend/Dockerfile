
FROM node:16.14-alpine


WORKDIR /app-frontend

COPY package*.json ./

RUN npm install
RUN npm install react-router-dom

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm" ]

CMD ["run", "dev"]