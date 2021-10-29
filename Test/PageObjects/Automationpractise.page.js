const { doSetValue } = require('../../util')
const util = require('../../util')
class Automationpage{
    get tablogin(){return $('//a[@class="login"]')}
    get tabemail(){return $("#email")}
    get tabpasswd(){return $("#passwd")}
    get cart(){return $("//div[@class='shopping_cart']")}
    get signin(){return $(".header_user_info")}
    get createEmail(){return $("#email_create")}
    get btnCreate(){return $("//i[@class='icon-user left']")}
    get mrTitle(){return $("#id_gender1")}
    get firstName(){return $("#customer_firstname")}
    get lastName(){return $("#customer_lastname")}
    get passwd(){return $("#passwd")}
    get day(){return $(".//select[@id='days']")}
    get month(){return $(".//select[@id='months']")}
    get year(){return $(".//select[@id='years']")}
    get firstN(){return $("#firstname")}
    get lastN(){return $("#lastname")}
    get company(){return $("#company")}
    get address(){return $("#address1")}
    get addressLine(){return $("#address2")}
    get city(){return $("#city")}
    get state(){return $("#id_state")}
    get zipCode(){return $("#postcode")}
    get country(){return $("#id_country")}
    get additionalInfo(){return $("#other")}
    get homePhone(){return $("#phone")}
    get mobilePhone(){return $("#phone_mobile")}
    get alias(){return $("#alias")}
    get registerBtn(){return $("#submitAccount")}
    get accName(){return $("//a[@class='account']/span")}
    get myOrders(){return $('//i[@class="icon-building"]/span')}
    get signout(){ return $("//a[@class='logout']")}
    get btnSignIn(){ return $('#SubmitLogin')}
    get searchBar(){return $("#search_query_top")}
    get searchButton(){return $(".btn.btn-default.button-search")}
    get addToCart(){return $("//p[@id='add_to_cart']/button/span")}
    get inStock(){return $("//span[@class='available-now']")}
    get proceedToCheckout(){return $("//a[@title='Proceed to checkout']")}
    get checkBox(){return $("#cgv")}
    get productText(){return $("//p[@class='product-name']/a")}
    get productImage(){return $("//a[@class='product_img_link']")}

    async register(email){
        await util.doClick(await this.signin,"createSignin")
        await util.doSetValue(await this.createEmail,email,"createEmail")
        await util.doClick(await this.btnCreate,"createAccountButton")
    }
    async optionToSelect(label,value){
        if(label == 'day'){
        await (await $('.//option[@value="'+value+'" and contains(text(),"'+value+'")]')).click();
        }
        else{
           await (await $('.//option[contains(text(),"'+value+'")]')).click();
        }
    }

    async personalInformation(personalData){
        await util.doClick(await this.mrTitle,"Mr")
        await util.doSetValue(await this.firstName,personalData.firstName,"FirstName")
        await util.doSetValue(await this.lastName,personalData.lastName,"LastName")
        await util.doSetValue(await this.passwd,personalData.password,"Password")
        await (await this.day).click();
        await this.optionToSelect('day',personalData.dob.day)
        await browser.pause(2000);
        await (await this.month).click();
        await this.optionToSelect('month',personalData.dob.month)
        await browser.pause(2000);
        await (await this.year).click();
        await this.optionToSelect('year',personalData.dob.year)
        await util.doSetValue(await this.firstN,personalData.firstN,"FirstN")
        await util.doSetValue(await this.lastN,personalData.lastN,"LastN")
        await util.doSetValue(await this.company,personalData.company,"Company")
        await util.doSetValue(await this.address,personalData.address,"Address")
        await util.doSetValue(await this.addressLine,personalData.addressLine,"AddressLine")
        await util.doSetValue(await this.city,personalData.city,"City")
        await (await this.state).click();
        await this.optionToSelect('state',personalData.state)
        await util.doSetValue(await this.zipCode,personalData.zipCode,"ZipCode")
        await (await this.country).click();
        await this.optionToSelect('country',personalData.country)
        await util.doSetValue(await this.additionalInfo,personalData.additionalInfo,"AdditionalInfo")
        await util.doSetValue(await this.homePhone,personalData.homePhone,"HomePhone")
        await util.doSetValue(await this.mobilePhone,personalData.mobilePhone,"MobilePhone")
        await util.doSetValue(await this.alias,personalData.alias,"Alias")
        await util.doClick(await this.registerBtn,"RegisterBtn")
        await util.waitForElement(await this.myOrders,'My orders')
    }
    async logIn(loginData){
        await util.doSetValue(await this.tabemail,loginData.email,'email')
        await util.doSetValue(await this.tabpasswd,loginData.passwrd,'Password')
        await util.doClick(await this.btnSignIn,'sign in')
    }
    async addProductToCart(productName){
        await util.doClick(await this.searchBar,'searchBar')
        await util.doSetValue(await this.searchBar,productName,'searchBar')
        await (await this.searchButton).click();
        await (await this.productImage).click();
        await util.waitForElement(await this.addToCart,'label');
        await (await this.addToCart).click();
        await util.waitForElement(await this.proceedToCheckout,'pcheckout');
    }
    async prcdToChckout(){
        await (this.proceedToCheckout).scrollIntoView();
        await util.waitForElement(await this.proceedToCheckout,'pcheckout');
        await (await this.proceedToCheckout).click()
        await (this.proceedToCheckout).scrollIntoView();
        await util.waitForElement(await this.proceedToCheckout,'pcheckout');
        await (await this.proceedToCheckout).click();
        await (this.proceedToCheckout).scrollIntoView();
        await util.waitForElement(await this.proceedToCheckout,'pcheckout');
        await (await this.checkBox).click();
        await (await this.proceedToCheckout).click()
    }
}
module.exports = new Automationpage();