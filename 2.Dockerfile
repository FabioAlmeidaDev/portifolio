# pull official base image
FROM node:13.12.0-alpine

# Add metadata
LABEL author="Fabio Almeida"

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# set working directory
WORKDIR /app

# add the volumes
# VOLUME ["/app"]

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

# add app
COPY . ./

# Run the commands in the container
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm rebuild node-sass
# The port to run on 
EXPOSE 3000

# start app
CMD ["npm", "start"]
# can use ENTRYPOINT instead of CMD
