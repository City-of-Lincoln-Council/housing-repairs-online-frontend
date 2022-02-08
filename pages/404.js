import React from 'react';

// export default function Custom404() {
//
//   Sentry.captureMessage('404');
//   Sentry.captureException(new Error('404 hit'));
//
//
//   return <h1>404 - Page Not Found</h1>
// }

import Error from 'next/error'

export default function NotFound() {
  // Opinionated: do not record an exception in Sentry for 404
  return <Error statusCode={404} />
}
