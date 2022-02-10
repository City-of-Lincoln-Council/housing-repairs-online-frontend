const path = require('path')
const withSass = require('@zeit/next-sass');
const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSass({
  /* bydefault config  option Read For More Optios
  here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
  cssModules: true
})
module.exports = withSentryConfig({
  /* Add Your Scss File Folder Path Here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/report-repair',
        destination: '/report-repair/priority-list',
        permanent: true,
      },
    ]
  },

  images: {
    loader: 'default'
  },
},
{
  org: 'housing-repairs-online',
  project: 'housing-repairs-online-frontend',
  authToken: process.env.SENTRY_AUTH_TOKEN,
  // dryRun: !['dev', 'stg', 'prod'].includes(process.env.ENVIRONMENT),
  dryRun: false,
})
