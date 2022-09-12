FROM node:14.17.0-alpine
EXPOSE 3000
RUN mkdir -p /app
WORKDIR /app
COPY .env /app/.env
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn install
CMD ["yarn", "start"]