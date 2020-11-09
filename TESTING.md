Note that we have to set CYPRESS_RAILS_TRANSACTIONAL_SERVER to false in
order for hasura to see any fixtures that are set in the test session.
This value is set in .env.test

To open interactive cypress in dev mode:

`rake cypress:open`

To open interactive cypress in test mode:

`RAILS_ENV=test rake cypress:open`

To run headless tests in cypress

`./cyp_test_runner.sh`

This will sync up the test hasura's metadata
with whatever is in the dev hasura's metadata
then run the cypress tests
