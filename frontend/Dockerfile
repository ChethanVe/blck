FROM nginx
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_12.x  | bash -
RUN apt-get -y install nodejs
COPY  ./nginx.conf /etc/nginx/nginx.conf
COPY  ./blck-app /blck/app
WORKDIR /blck/app
RUN npm install
RUN npm run build
CMD ["nginx", "-g", "daemon off;"]