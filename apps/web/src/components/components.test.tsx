import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Hints } from './Hints';
import { TestResults } from './TestResults';
import { XpBar } from './XpBar';

describe('XpBar', () => {
  it('shows the level and progress towards the next one', () => {
    render(<XpBar xp={175} />);
    expect(screen.getByText('Lv 2')).toBeInTheDocument();
    expect(screen.getByText('75/150 XP')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');
  });
});

describe('TestResults', () => {
  it('summarises passing and failing tests', () => {
    render(
      <TestResults
        result={{
          passed: false,
          durationMs: 3,
          logs: ['hello from console.log'],
          results: [
            { name: 'adds numbers', passed: true, durationMs: 1 },
            { name: 'handles negatives', passed: false, error: 'Expected -1 to be 1', durationMs: 1 },
          ],
        }}
      />,
    );
    expect(screen.getByText(/1\/2 tests passed/)).toBeInTheDocument();
    expect(screen.getByText('Expected -1 to be 1')).toBeInTheDocument();
    expect(screen.getByText('hello from console.log')).toBeInTheDocument();
  });

  it('shows compile errors', () => {
    render(<TestResults result={{ passed: false, durationMs: 0, logs: [], results: [], error: 'SyntaxError: oops' }} />);
    expect(screen.getByText(/could not run/)).toBeInTheDocument();
    expect(screen.getByText('SyntaxError: oops')).toBeInTheDocument();
  });
});

describe('Hints', () => {
  it('reveals hints one at a time', async () => {
    render(<Hints hints={['First hint', 'Second hint']} />);
    expect(screen.queryByText('First hint')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: /show a hint/i }));
    expect(screen.getByText('First hint')).toBeInTheDocument();
    expect(screen.queryByText('Second hint')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: /show another hint/i }));
    expect(screen.getByText('Second hint')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
