const { execSync } = require('child_process');
const { argv } = require('yargs');

const scope = argv.scope ? (Array.isArray(argv.scope) ? argv.scope : [argv.scope]) : [];

process.env.SERVICETITAN_SCOPE = scope;

// TODO: apply scope for compilation
execSync('startup build', { stdio: 'inherit' });
execSync('run-p start:startup start:webpack', { stdio: 'inherit' });
