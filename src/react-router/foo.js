function foo(x) {
  console.log('foo', x)
}

// do something that prevents tree-shaking
foo()

export default foo
