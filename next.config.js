const path = require('path')
const withSass = require('@zeit/next-sass');

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

  sentry: {
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore
  authToken: process.env.SENTRY_TOKEN,
  ignore: ['node_modules'],
  project: 'housing-repairs-online-frontend',

  silent: false, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// module.exports = withSentryConfig(moduleExports);
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
