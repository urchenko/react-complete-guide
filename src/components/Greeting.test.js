import { screen, render } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });
});
