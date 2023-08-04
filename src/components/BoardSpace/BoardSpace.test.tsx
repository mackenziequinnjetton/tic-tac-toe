import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BoardSpace from './BoardSpace';
import makeMove from '../Board/Board'
import switchToken from '../Board/Board'

test('renders BoardSpace with .', () => {
  render(
    <BoardSpace 
      spaceId={1} 
      spaceValue="." 
      makeMove={makeMove} 
      currentToken='X'
      switchToken={switchToken}
    />);
  const linkElement = screen.getByText(/\./i);
  expect(linkElement).toBeInTheDocument();
});

test('renders BoardSpace with X', () => {
  render(
    <BoardSpace 
      spaceId={1} 
      spaceValue="X" 
      makeMove={makeMove} 
      currentToken='O'
      switchToken={switchToken}
    />);
  const linkElement = screen.getByText(/X/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders BoardSpace with O', () => {
  render(
    <BoardSpace 
      spaceId={1} 
      spaceValue="O" 
      makeMove={makeMove} 
      currentToken='X'
      switchToken={switchToken}
    />);
  const linkElement = screen.getByText(/O/i);
  expect(linkElement).toBeInTheDocument();
});
