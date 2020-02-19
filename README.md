[![Build](https://travis-ci.org/eustatos/webpack-karma-starter.svg?branch=master)](https://travis-ci.org/eustatos/webpack-karma-starter)
[![codecov](https://codecov.io/gh/eustatos/webpack-karma-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/eustatos/webpack-karma-starter)

# Karma Jasmine Coverage TDD ES6 Webpack

This is a basic Hello-Wolrd application.

## Requirements

- A browser.
- Internet access.
- Node installed.
- Git installed.


### Prepare

Clone this repository.

```bash
git clone https://github.com/federicozacayan/webpack-karma-starter.git .
```


### Run

Execute the following command in the root folder.
```bash
npm update
```

```bash
npm coverage
```

### Stop

To stop the server press `CTRL+C`.


## Tutorial

You can find a tutorial of this project in the following site.

[https://federicozacayan.github.io/webpack-karma-starter/](https://federicozacayan.github.io/webpack-karma-starter/)

## Usage

Any file ending `.spec.js` in the `src` folder will be consider a test. Check karma.conf.js in the root folder.

```json
files: [
      'src/**/*.spec.js'
],
```

After running, open [coverage/lcov-report/index.html](coverage/lcov-report/index.html) to view the coverage in the browser.
