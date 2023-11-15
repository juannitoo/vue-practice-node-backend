FROM public.ecr.aws/docker/library/node:slim

USER node

WORKDIR /home/nodejs/app

COPY package.json . 
RUN npm install --omit=dev
COPY . .

EXPOSE 3001

CMD ["node", "server.js"]
