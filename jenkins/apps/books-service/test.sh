#!/usr/bin/env sh


echo 'The following "npm" command run test tests for books service app'
set -x
pwd
cd app/books-service/
npm run test