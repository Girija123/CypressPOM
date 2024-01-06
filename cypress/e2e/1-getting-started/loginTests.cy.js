import LoginPage from "../../pageObjects/LoginPage";
import ProductPage from "../../pageObjects/ProductPage";

const loginPage = new LoginPage();
const productPage = new ProductPage();

describe('Login tests', () =>{

  beforeEach(()=>{
    cy.visit('https://www.saucedemo.com');

  })

it('Verify login with valid username and password', ()=>{

  cy.fixture('example').then((user)=>{

    loginPage.doLogin(user.validUsername, user.validPassword);
    productPage.verifyLoginSuccess("Products")
})
})

it('Veriy login with invalid username and password', ()=>{

  cy.fixture('example').then((user)=>{
  loginPage.doLogin(user.invalidUsername, user.invalidPassword);
  loginPage.verifyFailedLogin("Epic sadface: Username and password do not match any user in this service") 
 })
})

it('Verify login with no username and password', ()=>{
  cy.get('#login-button').click();
  cy.get('h3[data-test="error"]').should('have.text', 'Epic sadface: Username is required');

})


})
