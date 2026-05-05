import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Banner from './Banner';

describe('Banner', () => {
  it('renders the children verbatim', () => {
    render(<Banner>Hello, world</Banner>);
    expect(screen.getByText('Hello, world')).toBeInTheDocument();
  });

  it('renders complex JSX children, not just strings', () => {
    render(
      <Banner>
        <span data-testid="inner">child</span>
      </Banner>,
    );
    expect(screen.getByTestId('inner')).toHaveTextContent('child');
  });
});
