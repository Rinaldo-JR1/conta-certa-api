#!/bin/bash

if [ "$NODE_ENV" == "production" ] ; then
  npm run start:watch
else
  npm run start:dev
fi
