const shell = require('shelljs');
const path = require('path');

const server = shell.exec('yarn start', {async: true, silent: true});
const cucumberName = process.platform.includes('win') ? 'cucumber-js' : 'cucumberjs';
const cucumber = path.join(__dirname, '..', 'node_modules', '.bin', cucumberName);

server.stdout.on('data', data => {
  console.log('data: ', data)
  if (data.match(/Local:/)) {
    const spawn = require('cross-spawn')
    const opts = process.argv.slice(2)
    const runner = spawn(cucumber, opts, { stdio: 'inherit' })

    runner.on('exit', function (code) {
      server.kill()
      process.exit(code)
    })

    runner.on('error', function (err) {
      server.kill()
      throw err
    })
  }
})

