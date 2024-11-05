FROM node:20.14.0-bookworm

WORKDIR /app

COPY package*.json ./

RUN npm install


COPY . .

RUN npx prisma generate

EXPOSE 4052

CMD ["/app/run.sh"]
