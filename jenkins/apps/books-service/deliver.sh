echo 'The following "npm" command deliver the application'
set -x
pwd
cd apps/books-service/
npx prisma generate
ls