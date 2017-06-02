# is-in-range [![Build Status](https://travis-ci.org/rahatarmanahmed/is-in-range.svg?branch=master)](https://travis-ci.org/rahatarmanahmed/is-in-range)

[![Greenkeeper badge](https://badges.greenkeeper.io/rahatarmanahmed/is-in-range.svg)](https://greenkeeper.io/)

Checks if a number is within a string range in the format "1-10" or "3,5-7,9"

A range can be like the following:

 - `1-10`
 - `10-1`
 - `23`
 - `23,1-10`
 - `23, 1-10`
 - `1.5-3.7`

Only positive numbers are allowed.

## Installing

`npm install is-in-range`

## Example usage

```js
var inRange = require('is-in-range');

inRange('1-10', 5) // True
inRange('1-10', 11) // False
```
