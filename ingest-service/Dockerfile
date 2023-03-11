FROM node:16-alpine 
WORKDIR /home/node/app
COPY package.json ./
RUN yarn
COPY . . 
EXPOSE 5555
CMD ["node-ts","index.ts"]