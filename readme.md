** This is the simplest express type script project **
It's basically like express generator but even simpler.

It contains these features that are configured
 - Typescript
 - Express
 - Jest
 - Lodash
 - prettier
 - eslint
 - ts-node-dev
 - config for deployment configuration

Just download or clone this project
run   npm install
npm run serve

Then go here and you can see the config working
http://localhost:8080/config

or npm run test

Notes
npm run serve uses ts-node-dev which watches for .ts file changes and only recompiles the specific file so it is very fast.

npm run serve:all  watches JSON files too but compiles slower than 'npm run serve'
