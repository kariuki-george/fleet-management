# Build Stage 1
# This build created a staging docker image
#
FROM node:16-alpine AS appbuild
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install
COPY . . 
RUN yarn build
# Build Stage 2
# This build takes the production build from staging build
#
FROM node:16-alpine
WORKDIR /usr/src/app
COPY package.json ./

RUN yarn install --prod
COPY --from=appbuild /usr/src/app/ ./
EXPOSE 5555
CMD node index.js