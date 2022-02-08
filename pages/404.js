import React from 'react';
import * as Sentry from '@sentry/nextjs';

export default function Custom404() {

  Sentry.captureMessage('404');
  Sentry.captureException(new Error('404 hit'));


  return <h1>404 - Page Not Found</h1>
}
