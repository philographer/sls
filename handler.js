'use strict';

function hello() {
  const name = 'World';
  return { payload: `Hello, ${name}!`, body: `hello` };
}

exports.hello = hello;
