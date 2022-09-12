FROM node:14.17.0-alpine
EXPOSE 5000
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY .env /app/.env
RUN yarn install
CMD ["yarn", "start"]