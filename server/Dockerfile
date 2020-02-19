FROM node:10
WORKDIR /Users/lisouiw/42/DressMe/server
EXPOSE 8000
COPY package*.json /Users/lisouiw/42/DressMe/server/
RUN npm install
COPY . /Users/lisouiw/42/DressMe/server/
# CMD ["npm", "run", "init"]
CMD ["npm", "run", "start"]