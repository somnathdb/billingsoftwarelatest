FROM node:latest
WORKDIR /bin
COPY . .
RUN npm install
EXPOSE 5003
CMD [ "npm","start" ]