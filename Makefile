BIN=./node_modules/.bin

run: 
	node -r ts-node/register index.ts

test: jest

jest:
	NODE_ENV="development"
	BABEL_ENV=test ${BIN}/jest