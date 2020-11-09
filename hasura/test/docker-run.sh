#! /bin/bash

# see .env.example; the hasura env vars should be set there

docker run -d -p 8081:8080 --env-file ./.env \
       -e HASURA_GRAPHQL_DATABASE_URL \
       -e HASURA_GRAPHQL_ENABLE_CONSOLE=true \
       hasura/graphql-engine:v1.3.1
