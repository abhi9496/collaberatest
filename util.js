class util{
    async doClick(elem, label) {
        var message = '===> ' + label + ' is not displayed'
        await browser.waitUntil(async () => await elem.isClickable() === true,
            {
                timeout: 60000,
                timeoutMsg: message
            });
        await elem.click();
    }
    async doSetValue(elem, value, label) {
        var message = '===> ' + label + ' is not displayed'
        await browser.waitUntil(async () => await elem.isClickable() === true,
            {
                timeout: 120000,
                timeoutMsg: message
            });
        await elem.setValue(value);
    }
    async waitForElement(elem, label) {
        var message = '===> ' + label + ' is not displayed'
        await browser.waitUntil(async () => await elem.isDisplayed() === true,
            {
                timeout: 180000,
                timeoutMsg: message
            });
    }
    async doSelectFromDropDown(elem, valueToSelect, label) {
        console.log("In the drpdwon method")
        var message = '===> ' + label + ' is not displayed'
        if (label =="Date")
        var optionToSelect = $('.//option[@value="'+valueToSelect+'" and contains(text(),"'+valueToSelect+'")]');
        else 
        var optionToSelect = $('.//option[contains(text(),"'+valueToSelect+'")]');

        await browser.waitUntil(async () => await elem.isClickable() === true,
            {
                timeout: 60000,
                timeoutMsg: message
            });
        await elem.click();
        await (await optionToSelect).click();

    } 
}
module.exports = new util();