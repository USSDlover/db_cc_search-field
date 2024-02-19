# Danske Bank Code Challenge

## Challenge Description

SearchField is a component in our design system,

### Sapphire:
As an example of something you will be working on if you join us, we have defined a technical
challenge inspired from a real-world task we have recently closed.

The task is about solving the following issues in SearchField:
- When clear button is pressed, the input loses the focus. The input should always be focused,
after the clear button is pressed.
- When ngModel is used to bind to the value, clearing input doesn't work as expected. It
should work as expected with or without ngModel

#### Reproduction steps:
1. Type "123" in the input field.
2. Press Enter. It will alert "123"
3. Press the clear button to clear the input.
4. Pressing Enter again in the input should alert "", but will alert "123"
   
#### Acceptance Criteria
- The issues are resolved.
- The fixes are covered by unit tests added in search-field.component.cy.ts.

You can find the code here:
      https://stackblitz.com/edit/stackblitz-starters-hh9bn3?file=src%2Fmain.ts
      You need to have the project locally in order to run Cypress tests. There is a little button you can use
      to download the project


## Start

- Make sure to have node version +18 is installed
- After cloning the repository, run the `npm install` inside the root directory of the cloned repository
- Run `npm start` and open [localhost:4200](http://localhost:4200) to the app running

### Test

Run `npm run cypress:run`
