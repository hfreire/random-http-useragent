# Get a random and legit user-agent :shipit: for your HTTP clients
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/hfreire/random-useragent.svg?branch=master)](https://travis-ci.org/hfreire/random-useragent)
[![Coverage Status](https://coveralls.io/repos/github/hfreire/random-useragent/badge.svg?branch=master)](https://coveralls.io/github/hfreire/random-useragent?branch=master)
[![Dependency Status](https://img.shields.io/david/hfreire/random-useragent.svg?style=flat)](https://david-dm.org/hfreire/random-useragent)
[![](https://img.shields.io/github/release/hfreire/random-useragent.svg)](https://github.com/hfreire/random-useragent/releases)
[![](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/npm/v/random-useragent.svg)](https://www.npmjs.com/package/random-useragent)
[![Downloads](https://img.shields.io/npm/dt/random-useragent.svg)](https://www.npmjs.com/package/random-useragent) 

Stores and randomly accesses a HTTP user agent from an available list of user agents in disk.

### Features
* HTTP user agents are stored :floppy_disk: in a disk file to avoid filling up your app's memory space. :white_check_mark:  
* File disk reads are optimized :running: to only read as much as needed :white_check_mark:
* Supports [Bluebird](https://github.com/petkaantonov/bluebird) :bird: promises :white_check_mark:

### How to install
```
npm install random-useragent -g
```

### How to use

#### Use it in your terminal
```
random-useragent
```

#### Use it in your app
```javascript
const RandomUserAgent = require('random-useragent')

RandomUserAgent.get()
  .then((userAgent) => console.log(userAgent))
  .catch((error) => console.error(error.message))
```
