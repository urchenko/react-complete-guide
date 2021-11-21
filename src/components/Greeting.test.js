import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  test('renders Hello World! as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders It's good to see you! as a text if btn was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const greetingElement = screen.getByText('good to see you', { exact: false });
    expect(greetingElement).toBeInTheDocument();
  });

  test('renders Changed! as a text after clicking button', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnElement = screen.getByRole('button');
    userEvent.click(btnElement);
    // btnElement.click();

    // Assert
    const changedElement = screen.getByText('Changed!');
    expect(changedElement).toBeInTheDocument();
  });

  test('Check if text "It\'s good to see you!" not visible after clicking btn', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnElement = screen.getByRole('button');
    userEvent.click(btnElement);
    // btnElement.click();

    // Assert
    const goodToSeeElement = screen.queryByText('good to see you', { exact: false });
    expect(goodToSeeElement).toBeNull();
  });
});
