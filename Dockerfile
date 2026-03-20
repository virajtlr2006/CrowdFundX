FROM node:lts-alpine3.22

RUN npm install -g concurrently

WORKDIR /app

COPY Backend ./Backend
COPY Frontend ./Frontend

EXPOSE 3000
EXPOSE 5000

CMD ["concurrently", "cd Backend && node app.js", "cd Frontend && npm run dev -- -H 0.0.0.0"]