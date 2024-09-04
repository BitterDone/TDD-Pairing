FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /react-app
COPY ./package*.json /react-app
RUN npm install
COPY . .
EXPOSE 3000
RUN chown -R node /react-app
USER node
CMD ["npm", "start"]

# docker build -f Dockerfile -t tdd-pairing/tdd-frontend:0.0.1 .
# docker run -it --rm -p 3000:3000 tdd-pairing/tdd-frontend:0.0.1
# docker run -d --rm -p 3000:3000 tdd-pairing/tdd-frontend:0.0.1
