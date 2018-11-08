function bar(y) {
  console.log('bar', y)
}

// do something that prevents tree-shaking
bar()

export default bar
