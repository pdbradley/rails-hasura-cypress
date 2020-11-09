#! /bin/bash

cd hasura/test
./sync_test_metadata_with_dev

rake cypress:run
