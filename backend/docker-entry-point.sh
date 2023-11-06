#!/bin/sh
echo "Running Migrations"
./node_modules/.bin/runmigration
echo "Migrations done"
./node_modules/.bin/sequelize db:seed:all
echo "Seeding Done"
set NODE_ENV=NO_PROD
npm start
echo "YIC Backend Started"