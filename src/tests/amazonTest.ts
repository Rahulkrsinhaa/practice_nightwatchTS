import { NightwatchTests, NightwatchBrowser } from "nightwatch";
import { AmazonPage } from "../page-objects/amazonPage";

describe('amazon Test cases', () => {

    beforeEach((browser: NightwatchBrowser) => {
        browser.window.maximize()
        var googleSearchBar = browser.page.amazonPage()
        googleSearchBar
            .navigate()
            .enterAmazonWebsite()
            .clickAmazonSite()
    })

    it('Verify user should be able to see fresh button', () => {
        var freshButton = browser.page.amazonPage()
        freshButton
            .clickFreshButton()
            .isVisible('@freshButton')

    });

    it('Verify user should be able to enter pincode', () => {
        var enterCode = browser.page.amazonPage()
        enterCode
            .clickFreshButton()
            .enterPinCode()
            .isVisible('@applyOnFreshBitton')

    });

    it('Verify user should be able to see the amazon mini tv', () => {
        var miniTV = browser.page.amazonPage()
        miniTV
            .amazonMiniTv()
            .isVisible('@amazonMiniTvIcon')

    });



    it('Verify user should be able to see selling page', () => {
        var sellButton = browser.page.amazonPage()
        sellButton
            .inputAndSearch()

    });
    it('switch the tab', () => {
        var sellButton = browser.page.amazonPage()
        sellButton
            .inputAndSearch()
        browser
            .window.getAllHandles(function (result: any) {
                var newHandle = result.value[1];
                this.window.switch(newHandle);
            })
    });
    it('add to cart', () => {
        const sellButton = browser.page.amazonPage()
        sellButton
            .inputAndSearch()
        browser
            .window.getAllHandles(function (result: any) {
                var newHandle = result.value[1];
                this.window.switch(newHandle);
            });
        sellButton
            .addTocart()
    });
    it('add to cart and checkout ', () => {
        const sellButton = browser.page.amazonPage()
        sellButton
            .inputAndSearch()
        browser
            .window.getAllHandles(function (result: any) {
                var newHandle = result.value[1];
                this.window.switch(newHandle);
            });
        sellButton
            .addTocart()
            .checkout()
    });
    afterEach((browser: NightwatchBrowser) => {
        browser.end()
    });



})