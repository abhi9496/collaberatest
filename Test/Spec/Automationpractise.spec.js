const Automationpage= require ('../pageObjects/Automationpractise.page');
const AutomationData= require ('../Data/AutomationPractice.json');
const util= require ('../../util');
const { waitForElement } = require('../../util');
describe("open Automation page and Register",()=>{
    it("open Automation website and Register",async()=>{
        await browser.url(AutomationData.url);
        await browser.maximizeWindow();
        await util.waitForElement(await Automationpage.cart,"cart");
        await Automationpage.register(AutomationData.Email);
        await Automationpage.personalInformation(AutomationData.personalDetails);
        await browser.pause(30000);
        var acctName=AutomationData.personalDetails.firstName+AutomationData.personalDetails.lastName
        await expect(await (await Automationpage.accName).getText()).to.equal(acctName);
        
    });

    it('Logout and Login Again',async()=>{
        await (await Automationpage.signout).click();
        await util.waitForElement(await Automationpage.cart,"cart");
        await Automationpage.logIn(AutomationData.logInData);
    });

    it('Add product to the cart', async()=>{
        await Automationpage.addProductToCart(AutomationData.productName);
    });

    it.skip("Proceed to checkout",async()=>{
        await Automationpage.prcdToChckout();
        await expect(await Automationpage.productText).to.equal(AutomationData.productName)
    });
})