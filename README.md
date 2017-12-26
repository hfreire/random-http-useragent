# Get a random and legit user-agent :shipit: for your HTTP client

[![Build Status](https://travis-ci.org/hfreire/random-http-useragent.svg?branch=master)](https://travis-ci.org/hfreire/random-http-useragent)
[![Coverage Status](https://coveralls.io/repos/github/hfreire/random-http-useragent/badge.svg?branch=master)](https://coveralls.io/github/hfreire/random-http-useragent?branch=master)
[![](https://img.shields.io/github/release/hfreire/random-http-useragent.svg)](https://github.com/hfreire/random-http-useragent/releases)
[![Version](https://img.shields.io/npm/v/random-http-useragent.svg)](https://www.npmjs.com/package/random-http-useragent)
[![Downloads](https://img.shields.io/npm/dt/random-http-useragent.svg)](https://www.npmjs.com/package/random-http-useragent) 

> Stores and randomly accesses a HTTP user agent from an available list of user agents in disk.

### Features
* Randomly :zap: pick between 899 unique user agents :white_check_mark: 
* HTTP user agents are stored :floppy_disk: in a disk file to avoid filling up your app's memory space :white_check_mark:  
* File disk reads are optimized :running: to only read as much as needed :white_check_mark:
* Cache results using [memoizee](https://github.com/medikoo/memoizee) :white_check_mark:
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
Get a random user agent
```javascript
const RandomHttpUserAgent = require('random-http-useragent')

RandomHttpUserAgent.get()
  .then((userAgent) => console.log(userAgent))
  .catch((error) => console.error(error.message))
```

Cache returned user agents for 2 minutes
```javascript
const RandomHttpUserAgent = require('random-http-useragent')

RandomHttpUserAgent.configure({ memoizee: { maxAge: 120000 } })

RandomHttpUserAgent.get()
  .then((userAgent) => console.log(userAgent))
  .catch((error) => console.error(error.message))
```

### How to contribute
You can contribute either with code (e.g., new features, bug fixes and documentation) or by [donating 5 EUR](https://paypal.me/hfreire/5). You can read the [contributing guidelines](CONTRIBUTING.md) for instructions on how to contribute with code. 

All donation proceedings will go to the [Sverige för UNHCR](https://sverigeforunhcr.se), a swedish partner of the [UNHCR - The UN Refugee Agency](http://www.unhcr.org), a global organisation dedicated to saving lives, protecting rights and building a better future for refugees, forcibly displaced communities and stateless people.

### Used by
* [request-on-steroids](https://github.com/hfreire/request-on-steroids) - An HTTP client :sparkles: with retry, circuit-breaker and tor support :package: out-of-the-box
* [facebook-login-for-robots](https://github.com/hfreire/facebook-login-for-robots) - Facebook Login for 🤖 robots
* [browser-as-a-service](https://github.com/hfreire/browser-as-a-service) - A web browser :earth_americas: hosted as a service, to render your JavaScript web pages as HTML
* [pollmommy](https://github.com/hfreire/pollmommy) - ⭐️ Hack your 🙈 vote out of 📈 Polldaddy surveys - used by 💰 BBC, Microsoft, Forbes, Pfizer, IBM

### License
Read the [license](./LICENSE.md) for permissions and limitations.
