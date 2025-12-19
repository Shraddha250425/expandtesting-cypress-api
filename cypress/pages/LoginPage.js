class LoginPage { 
    visit()   { 
            cy.visit('https://practice.expandtesting.com/login'); // Navigate to login page     
        }
    verifyPageLoaded() 
    { 
        cy.url().should('include', '/login'); 
        cy.get('#username').should('be.visible'); 
        cy.get('#password').should('be.visible'); 
        cy.get('button[type="submit"]').should('be.visible'); 
    }
    enterUsername(username) 
    { 
        cy.get('#username').clear().type(username); 
    }
    enterPassword(password) 
    { 
        cy.get('#password').clear().type(password); 
    } 

    clickLogin() 
    { 
        cy.get('button[type="submit"]').click(); 
    }
    verifySuccessLogin()    
    { 
        cy.url().should('include', '/secure'); 
        cy.contains('You logged into a secure area!').should('be.visible'); 
        cy.get('a[href="/logout"]').should('be.visible'); 
    }
    verifyErrorMessage(message) 
    { 
        cy.contains(message).should('be.visible'); 
        cy.url().should('include', '/login'); // ensure still on login page 
    }
 

















}
export default new LoginPage();
