echo 'The following "npm" command build the application'
set -x
pwd
cd apps/books-service/
npx prisma generate
npm run build