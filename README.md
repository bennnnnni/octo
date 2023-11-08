## Getting started

First you'll need to install your dependencies. We've used yarn, if you have another preference feel free to remove the lock file and use what you are comfortable with:

```sh
cd client && yarn
```

## Start the app

```sh
yarn dev
```

This will do two things:

- Start a Next.js app running in development on <http://localhost:3000>
- Start a graphQL stub server running on <http://localhost:3001/graphql>
- in addition this will run graphql-codegen which will create type definitions and helper functions based on our graphql schema inside the /__generated__ directory

## Run test
```sh
yarn test
```
