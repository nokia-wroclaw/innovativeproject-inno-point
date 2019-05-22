FROM node:10.15.3

# set working directory
RUN mkdir -p /usr/src/server && chown -R node:node /usr/src/server
WORKDIR /usr/src/server

# add `/usr/src/server/node_modules/.bin` to $PATH
ENV PATH /usr/src/server/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 3030

# start app
CMD ["npm", "start"]