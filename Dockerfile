FROM public.ecr.aws/bitnami/node:14.15.1-debian-10-r8

ENV PORT=5000
EXPOSE 5000

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm install -g jest rollup sirv-cli tailwindcss
COPY . .
RUN npm run build

CMD [ "npm", "start" ]
