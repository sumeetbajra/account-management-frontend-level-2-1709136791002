# Interactive Quiz Game - Level 2

Welcome to the coding challenge! Your task is to implement an interactive quiz game that fulfills the requirements outlined in the Cypress test suite provided. This document will guide you through setting up the project and implementing the necessary features.

## Skills to be assessed

- Next.js
- React.js
- TypeScript
- Styled Components
- Unit testing
- Performance considerations
- Jest
- React Testing Library

## Project Setup

1. **Initialize a new Next.js project**: Use Create Next App to set up your project environment.

   ```bash
   npx create-next-app@latest interactive-quiz-game --typescript
   ```

2. **Install necessary packages**: Ensure you have Cypress, Styled Components, Jest, and React Testing Library installed.

   ```bash
   npm install cypress @testing-library/react jest styled-components
   ```

3. **Set up Styled Components**: Follow the [official documentation](https://styled-components.com/docs/basics#nextjs) to integrate Styled Components with Next.js.

4. **Configure Jest and React Testing Library**: Set up Jest and React Testing Library for unit testing. You can find setup instructions in the [Next.js documentation](https://nextjs.org/docs/testing).

5. **Set up Cypress**: Configure Cypress for end-to-end testing. Documentation can be found on the [Cypress website](https://www.cypress.io/).

## Implementation Instructions

### Overview

Your application will consist of a single-page interactive quiz game with the following features:

- Start a new game
- Answer questions (correctly or incorrectly)
- Navigate between questions
- Display the final score
- Retry the game

### Data Properties

The Cypress test cases reference several data-test properties. Here's what each of them represents:

- **start-game**: A button to start the quiz.
- **question**: The container displaying the current question.
- **option**: The selectable options for the current question. Each option should have a `data-correct` attribute indicating whether it is the correct answer.
- **next-question**: A button to proceed to the next question. Should be disabled if no option is selected.
- **finish-game**: A button to finish the quiz and display the final score.
- **retry-game**: A button to restart the quiz after finishing.
- **score**: A display element showing the player's final score.
- **alert**: An alert message displayed when the player attempts to proceed without selecting an answer.

### Step-by-Step Guide

1. **Create the Quiz Interface**:
   - Use React and Styled Components to create the layout for the quiz game.
   - Implement the start game button (`data-test="start-game"`).

2. **Question Display**:
   - Create a component to display the current question (`data-test="question"`) and options (`data-test="option"`).
   - Use state to track the current question and selected option.

3. **Handling Answers**:
   - Add click event handlers to options. When an option is selected, enable the "Next Question" button.
   - Store whether the selected option is correct using the `data-correct` attribute.

4. **Navigating Questions**:
   - Implement the logic to proceed to the next question or finish the game, based on the current question index.
   - If the player hasn't selected an answer, display an alert message (`data-test="alert"`).

5. **Scoring and Finishing**:
   - Calculate the player's score based on the number of correctly answered questions.
   - Display the final score in a designated element (`data-test="score"`).

6. **Retry Feature**:
   - Implement a retry button (`data-test="retry-game"`) that resets the game state and allows the player to start over.

7. **Unit Testing**:
   - Write unit tests for your components using Jest and React Testing Library. Ensure components render correctly and behave as expected.

8. **Performance Considerations**:
   - Optimize your application for performance. Consider lazy loading components and memorizing expensive calculations.

## Testing Your Application

After implementing the features, run your Cypress test suite to ensure your application meets all the requirements. Address any failures by correcting your implementation.

Good luck with your coding challenge!