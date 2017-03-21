# Get a random and legit user-agent :shipit: for your HTTP client

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/hfreire/random-http-useragent.svg?branch=master)](https://travis-ci.org/hfreire/random-http-useragent)
[![Coverage Status](https://coveralls.io/repos/github/hfreire/random-http-useragent/badge.svg?branch=master)](https://coveralls.io/github/hfreire/random-http-useragent?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/hfreire/random-http-useragent.svg)](https://greenkeeper.io/)
[![](https://img.shields.io/github/release/hfreire/random-http-useragent.svg)](https://github.com/hfreire/random-http-useragent/releases)
[![](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/npm/v/random-http-useragent.svg)](https://www.npmjs.com/package/random-http-useragent)
[![Downloads](https://img.shields.io/npm/dt/random-http-useragent.svg)](https://www.npmjs.com/package/random-http-useragent) 

Stores and randomly accesses a HTTP user agent from an available list of user agents in disk.

### Features
* Randomly :zap: pick between 899 unique user agents :white_check_mark: 
* HTTP user agents are stored :floppy_disk: in a disk file to avoid filling up your app's memory space :white_check_mark:  
* File disk reads are optimized :running: to only read as much as needed :white_check_mark:
* Supports [Bluebird](https://github.com/petkaantonov/bluebird) :bird: promises :white_check_mark:

### How to install
```
npm install random-http-useragent -g
```

### How to use

#### Use it in your terminal
```
random-http-useragent
```

#### Use it in your app
```javascript
const RandomUserAgent = require('random-http-useragent')

RandomUserAgent.get()
  .then((userAgent) => console.log(userAgent))
  .catch((error) => console.error(error.message))
```

### Used by
* [browser-as-a-service](https://github.com/hfreire/browser-as-a-service) - A web browser :earth_americas: hosted as a service, to render your JavaScript web pages as HTML
* [make-porto-win-european-best-destination-2017](https://github.com/hfreire/make-porto-win-european-best-destination-2017) - Let's make :city_sunrise: Porto :trophy: win the :euro: European Best Destination :tada: 2017
