BIN=./node_modules/.bin

run: 
	npm run cli

test: jest

jest:
	NODE_ENV="development"
	BABEL_ENV=test ${BIN}/jest
