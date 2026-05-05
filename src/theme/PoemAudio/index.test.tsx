import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import PoemAudio from './index';

describe('PoemAudio', () => {
  it('renders the default audio caption when no performer is given', () => {
    render(<PoemAudio src="/audio/test.mp3" />);
    expect(screen.getByText(/Audioversie\./)).toBeInTheDocument();
  });

  it("uses the performer's name in the spoken-word caption", () => {
    render(<PoemAudio src="/audio/test.mp3" performer={{ name: 'Janneke' }} />);
    expect(screen.getByText(/Voorgelezen door Janneke\./)).toBeInTheDocument();
  });

  it('switches to song wording when isSong is true', () => {
    render(<PoemAudio src="/audio/test.mp3" isSong />);
    expect(screen.getByText(/^Lied\./)).toBeInTheDocument();
  });

  it("uses the performer's name in the sung caption", () => {
    render(<PoemAudio src="/audio/test.mp3" isSong performer={{ name: 'Janneke' }} />);
    expect(screen.getByText(/Gezongen door Janneke\./)).toBeInTheDocument();
  });
});
