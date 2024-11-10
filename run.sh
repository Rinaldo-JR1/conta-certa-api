#!/bin/bash

if [ "$NODE_ENV" == "production" ] ; then
  npm run prisma-build && npm run start:watch
else
  npm run prisma-build && npm run start:dev
fi
