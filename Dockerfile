FROM node:18-alpine3.15

RUN mkdir -p /var/www/pokedex
WORKDIR /var/www/pokedex

COPY . .
COPY package.json tsconfig.json tsconfig.build.json .
RUN npm install
RUN npm run build

RUN adduser --disabled-password pokeuser
RUN chown -R pokeuser:pokeuser .
USER pokeuser

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
