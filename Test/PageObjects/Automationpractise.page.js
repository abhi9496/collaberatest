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
    get day(){return $("#days")}
    get month(){return $("#months")}
    get year(){return $("#years")}
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

    async register(email){
        await util.doClick(await this.signin,"createSignin")
        await util.doSetValue(await this.createEmail,email,"createEmail")
        await util.doClick(await this.btnCreate,"createAccountButton")
    }
    async personalInformation(personalData){
        await util.doClick(await this.mrTitle,"Mr")
        await util.doSetValue(await this.firstName,personalData.firstName,"FirstName")
        await util.doSetValue(await this.lastName,personalData.lastName,"LastName")
        await util.doSetValue(await this.passwd,personalData.password,"Password")
        await util.doSelectFromDropDown(await this.day,personalData.dob.day,"Date")
        await util.doSelectFromDropDown(await this.month,personalData.dob.month,"Month")
        await util.doSelectFromDropDown(await this.year,personalData.dob.year,"Year")
        await util.doSetValue(await this.firstN,personalData.firstN,"FirstN")
        await util.doSetValue(await this.lastN,personalData.lastN,"LastN")
        await util.doSetValue(await this.company,personalData.company,"Company")
        await util.doSetValue(await this.address,personalData.address,"Address")
        await util.doSetValue(await this.addressLine,personalData.addressLine,"AddressLine")
        await util.doSetValue(await this.city,personalData.city,"City")
        await util.doSelectFromDropDown(await this.state,personalData.state,"State")
        await util.doSetValue(await this.zipCode,personalData.zipCode,"ZipCode")
        await util.doSelectFromDropDown(await this.country,personalData.country,"Country")
        await util.doSetValue(await this.additionalInfo,personalData.additionalInfo,"AdditionalInfo")
        await util.doSetValue(await this.homePhone,personalData.homePhone,"HomePhone")
        await util.doSetValue(await this.mobilePhone,personalData.mobilePhone,"MobilePhone")
        await util.doSetValue(await this.alias,personalData.alias,"Alias")
        await util.doClick(await this.registerBtn,"RegisterBtn")
    
    }
}
module.exports = new Automationpage();