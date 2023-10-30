echo 'The following "npm" command deliver the application'
set -x
pwd
cd apps/books-service/
npm run start:prod &
sleep 1
echo $! > .pidfile
set +x

echo 'Now...'
echo 'Visit http://localhost:3000'
