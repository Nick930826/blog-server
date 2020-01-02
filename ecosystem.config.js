'use strict';

module.exports = {
  deploy: {
    production: {
      user: 'root',
      host: '47.99.134.126',
      ref: 'origin/master',
      repo: 'git@github.com:Nick930826/nick-blog-server.git',
      path: '/workspace/react-blog-server',
      'post-deploy': 'git pull && npm install && npm run start',
      env: {
        NODE_ENV: 'production',
      },
    },
  },
};
