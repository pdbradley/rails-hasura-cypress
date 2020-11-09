For local development:


FOLDER EXPLANATIONS
====================
/hasura
This folder /hasura has .env vars and a config file related to 
working in development.
Run hasura via the docker-run.sh script in this folder;
Docker hasura container will run on localhost:8080

/test
The folder /test has its own .env vars and config
The docker-run script in this server will run a hasura server on part 8081
This will be used by cypress in test runs

/test/development_reference
This odd folder exists for one reason: so we can export the current metadata
from the development hasura into the test hasura.  By entering development_reference
and running hasura metadata

rk
Set hasura db vars in .env (see .env.example for what you need)

To kill the docker container do "docker ps" to see the container id then "docker kill <id>"

Use Hasura CLI tools to export hasura metadata into version control so they can
be imported by other developers.

This would look like this:

1. Get hasura running
2. Create relationships / permissions etc (not migrations! use rails for that)
3. To export that state to version control run % hasura metadata export (from the hasura folder)
4. If you want to bring your hasura container up to date, run % hasura metadata apply (from the hasura folder) to apply the metadata


## To bring your local hasura up to date with the current metadata:

% hasura metadata apply


## To export your local hasura's metadata (configuration) into version control:

% hasura metadata export

## To export hasura metadata to staging or production (necessary for deployment)

% hasura metadata apply --endpoint "https://staging_url" --admin-secret "<admin secret>"


## A convenient script to apply hasura metadata to staging:

% apply-metadata-to-staging.sh

But it depends on your setting up .env.deployment_secrets  (see example)

