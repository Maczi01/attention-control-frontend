import { describe, expect, it } from 'vitest';

import { GameBoard } from '../components/GameBoard';

describe('GameBoard', () => {
  const board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const checkGivenNumber = jest.fn();

  it('renders a game board with numbers', () => {
    const { getByRole, getAllByRole } = render(<GameBoard board={board} checkGivenNumber={checkGivenNumber} />);
    const gameBoard = getByRole('grid');
    const numbers = getAllByRole('button');

    expect(gameBoard).toBeInTheDocument();
    expect(numbers).toHaveLength(board.length);

    numbers.forEach((number, index) => {
      expect(number).toHaveTextContent(board[index].toString());
    });
  });

  it('calls checkGivenNumber function when a number is clicked', () => {
    const { getByRole } = render(<GameBoard board={board} checkGivenNumber={checkGivenNumber} />);
    const number = getByRole('button', { name: '1' });
    userEvent.click(number);

    expect(checkGivenNumber).toHaveBeenCalledTimes(1);
    expect(checkGivenNumber).toHaveBeenCalledWith(1);
  });
});
