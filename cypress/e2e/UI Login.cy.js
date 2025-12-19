import LoginPage from 'C:/Users/Shraddha pisal/ExpandTesting/cypress/pages/LoginPage.js'

describe('UI', () => {
  it('EC-1: Valid Login', () => {
    LoginPage.visit();
    LoginPage.verifyPageLoaded();
    // Enter credentials
    LoginPage.enterUsername('practice');
    LoginPage.enterPassword('SuperSecretPassword!');
    // Click login
    LoginPage.clickLogin();
    // Verify secure page & success message
    LoginPage.verifySuccessLogin();
  });

  it('EC-2: Invalid Password', () => {
    // 1. Launch browser & navigate
    LoginPage.visit();
    // 2. Verify login page is displayed
    LoginPage.verifyPageLoaded();
    // 3. Enter username
    LoginPage.enterUsername('practice');
    // 4. Enter incorrect password
    LoginPage.enterPassword('WrongPassword');
    // 5. Click login
    LoginPage.clickLogin();
    // 6. Verify error message & still on login page
    LoginPage.verifyErrorMessage('Your password is invalid!');
  });
  it('EC-3: Empty Username and Password', () => {
    // 1. Launch browser & navigate
    LoginPage.visit();
    // 2. Verify login page is displayed
    LoginPage.verifyPageLoaded();
    // 3. Leave username and password empty
    // (no input actions)
    // 4. Click login
    LoginPage.clickLogin();
    // 5. Verify error message & still on login page
    LoginPage.verifyErrorMessage('Your username is invalid!');
  });
    it('EC-16: Invalid Username', () => {
    LoginPage.visit();
    LoginPage.verifyPageLoaded();
    // Enter credentials
    LoginPage.enterUsername('WrongUsername');
    LoginPage.enterPassword('SuperSecretPassword!');
    // Click login
    LoginPage.clickLogin();
    // Verify secure page & success message
    LoginPage.verifyErrorMessage('Your username is invalid!');
  });

});
