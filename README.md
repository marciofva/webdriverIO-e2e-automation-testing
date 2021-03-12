# WebdriverIO
---

E2E testing project with WebdriverIO


### Test suites

- Registration flow
    - Should create a new user account

- Login flow
    - Should login successfully


### Install all dependencies

```
npm install
```


### Manage environments

The environment is defined in `urls.js` file. Passing environment by command line, such as:

- __qa__: ```ENV=qa npm run test```  _(This is the default environment when not passed)_

- __prod__: ```ENV=prod npm run test```


### Running the tests

- Run all tests:
```
npm run test
```
