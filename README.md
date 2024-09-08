## Project setup

```bash
$ npm install
```

## Config environment 

```bash
$ # copy .env.template to .env
```

## Start database

```bash
$ docker compose up -d
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run SEED

```bash
$ http://localhost:3000/api/v2/seed
```

## Production build with Docker

1. Create `.env.prod` file.
2. Fill environment variables.
3. Execute commands.

```bash
# build
$ docker compose -f docker-compose.prod.yaml --env-file .env.prod up --build

# run
$ docker compose -f docker-compose.prod.yaml --env-file .env.prod up
```

## Run tests

```bash
# error
```
