const path = require('path')

const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports =  {
  /* Add Your Scss File Folder Path Here */
  // cssModules: true,

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

  // sentry: {
  //   disableServerWebpackPlugin: true,
  //   disableClientWebpackPlugin: true,
  // },
};

module.exports = withSentryConfig(moduleExports, {
  org: 'housing-repairs-online',
  project: 'housing-repairs-online-frontend',
  authToken: process.env.SENTRY_AUTH_TOKEN || process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
  dryRun: false,
  include: './.next'
});
