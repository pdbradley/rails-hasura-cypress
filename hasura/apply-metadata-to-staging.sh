#
# This assumes that the local metadata is current.  If changes have been made to hasura,
# make sure you export the metadata with hasura metadata export first.

set -a
source .env.deployment_secrets

hasura metadata apply --endpoint $HASURA_STAGING_URL --admin-secret $HASURA_STAGING_SECRET
