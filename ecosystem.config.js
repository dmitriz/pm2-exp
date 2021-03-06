module.exports = {
  apps : [{
    // name: 's',
    script: 's.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    // args: 'one two',
    // instances: 1,
    autorestart: true,
    // watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_dev: {
      NODE_ENV: 'dev'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'e',
      host : 'l',
      ref  : 'origin/master',
      repo : 'git@github.com:dmitriz/pm2-exp.git',
      path : '/home/e/prod2',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'e',
      host : 'l',
      ref  : 'origin/master',
      repo : 'git@github.com:dmitriz/pm2-exp.git',
      path : '/home/e/dev',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
