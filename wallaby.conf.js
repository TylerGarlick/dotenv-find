module.exports = function(wallaby) {
  
  return {
    autoDetect: true,
    files: [
      'src/**/*',
      'test/**/*',
      '!test/**/*.test.ts',
    ],
    
    tests: [
      'test/**/*.test.ts',
    ],
    
    env: {
      type: 'node',
    },
    // for node.js tests you need to set env property as well
    // https://wallabyjs.com/docs/integration/node.html
  }
}