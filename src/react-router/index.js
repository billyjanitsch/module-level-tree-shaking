function foo(x) {
  console.log('foo', x)
}

// do something that prevents tree-shaking
foo()

function bar(y) {
  console.log('bar', y)
}

// do something that prevents tree-shaking
bar()

export {foo, bar}
