FROM node:12.14.1
WORKDIR /usr/src/app
ENV APP_HOME /usr/src/app

# install OS packages here. for example, to install postgres client:
# RUN apt-get update && apt-get install -y postgresql-client

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

RUN mkdir -p $APP_HOME

# bake packages into the docker image & avoid volume sharing node_modules/ dir
WORKDIR /usr/src
COPY package.json .
COPY yarn.lock .
RUN yarn install
ENV PATH /usr/src/node_modules/.bin:$PATH

WORKDIR $APP_HOME
COPY . .

CMD ["node", "app.js"]
