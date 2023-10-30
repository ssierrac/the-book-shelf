echo 'The following "npm" command run test end to end tests for books service app'
set -x
pwd
cd apps/books-service/
npx prisma generate
npm run test:e2e