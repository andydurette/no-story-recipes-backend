#!/bin/sh

echo "Resetting and seeding the database..."
npx prisma migrate reset --force --skip-generate
npx prisma db seed

echo "Starting the app..."
npm run start
