const Automationpage= require ('../pageObjects/Automationpractise.page');
const AutomationData= require ('../Data/AutomationPractice.json');
const util= require ('../../util');
const { accName } = require('../pageObjects/Automationpractise.page');
describe("open Automation page and Register",()=>{
    it("open Automation website and Register",async()=>{
        await browser.url(AutomationData.url);
        await util.waitForElement(Automationpage.cart,"cart");
        await Automationpage.register(AutomationData.Email);
        await Automationpage.personalInformation(AutomationData.personalDetails);
        var acctName=AutomationData.personalDetails.firstName+AutomationData.personalDetails.lastName
        await expect(await (await Automationpage.accName).getText()).to.equal(acctName)
    })
})