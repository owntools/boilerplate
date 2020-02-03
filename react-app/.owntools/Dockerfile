FROM node:12.14.1
WORKDIR /usr/src/app
ENV APP_HOME /usr/src/app

# cypress dependencies
RUN apt-get update && \
  apt-get install -y \
  libgtk2.0-0 \
  libgtk-3-0 \
  libnotify-dev \
  libgconf-2-4 \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .

CMD ["yarn", "test"]
