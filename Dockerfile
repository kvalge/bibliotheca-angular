FROM node:19-alpine as build
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/bibliotheca-angular /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
