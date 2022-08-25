import SkipLink from '../../../compoments/skipLink';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

let container = null;

const linkBody = 'To view the skip link component tab to this example, or click inside this example and press tab.';
const linkText = 'Skip to main content';
const linkLocation = '#content';

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);

  act(() => {
    render(<SkipLink linkLocation='content'/>, container)
  });
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('SkipLink', () => {
  test('SkipLink body should be rendered', () => {
    expect(container.querySelector('.govuk-body').textContent).toBe(linkBody);
  })

  test('SkipLink text should be rendered', () => {
    expect(container.querySelector('.govuk-skip-link').textContent).toBe(linkText);
  })

  test('SkipLink location should be rendered', () => {
    expect(container.querySelector('.govuk-skip-link').getAttribute('href')).toBe(linkLocation);
  })

})
