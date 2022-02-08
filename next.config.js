const path = require('path')
const withSass = require('@zeit/next-sass');
const nextSourceMaps = require('@zeit/next-source-maps');

const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports =  nextSourceMaps({
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

  sentry: {
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  },
});

module.exports = withSentryConfig(moduleExports);
