import { PageObjectModel, EnhancedPageObject } from "nightwatch";
const amazonCommands = {

    enterAmazonWebsite(this: AmazonPage) {
        return this
            .waitForElementVisible('@googleSearchBar')
            .setValue('@googleSearchBar', ['amazon', this.api.Keys.ENTER])
    },

    clickAmazonSite(this: AmazonPage) {
        return this
            .waitForElementVisible('@clickAmazonsite')
            .click('@clickAmazonsite')
    },

    clickFreshButton(this: AmazonPage) {
        return this
            .waitForElementVisible('@freshButton')
            .click('@freshButton')
    },

    enterPinCode(this: AmazonPage) {
        return this
            .waitForElementVisible('@enterPinCode')
            .setValue('@enterPinCode', '204101')
    },

    amazonMiniTv(this: AmazonPage) {
        return this
            .waitForElementVisible('@amazonMiniTVButton')
            .click('@amazonMiniTVButton')
    },

    sellingPage(this: AmazonPage) {
        return this
            .pause()
            .waitForElementVisible('@firstProduct')
            .click('@firstProduct')
    },
    inputAndSearch(this: AmazonPage) {
        return this
            .waitForElementVisible('@inputFeald')
            .setValue('@inputFeald', ['hoody', this.api.Keys.ENTER])
            .click('@firstSerachResult')
    },
    addTocart(this: AmazonPage) {
        this
            .waitForElementVisible('@addToCartBUtton')
            .click('@addToCartBUtton')
    },
    checkout(this: AmazonPage) {
       this
       .waitForElementVisible('@proceedToCheckout')
       .click('@proceedToCheckout')
    }
}
const amazonPage: PageObjectModel = {
    url: 'https://www.google.com/',
    commands: [amazonCommands],
    elements: {
        googleSearchBar: 'textarea[id="APjFqb"]',
        clickAmazonsite: 'div[class="CCgQ5 vCa9Yd QfkTvb N8QANc MUxGbd v0nnCb"]',
        freshButton: 'a[data-csa-c-content-id="nav_cs_fresh"]',
        enterPinCode: 'input[class="GLUX_Full_Width a-declarative"]',
        applyOnFreshBitton: 'span[id="GLUXZipUpdate-announce"]',
        amazonMiniTVButton: 'a[data-csa-c-slot-id="nav_cs_1"]',
        amazonMiniTvIcon: 'img[data-testid="appnavbar_brandlogo"]',
        sellButton: 'a[data-csa-c-slot-id="nav_cs_2"]',
        sellingPage: 'a[data-ld-append="AZINSOA_retailMain_Cross_T3"]',
        firstProduct: 'a-spacing-none_fluid-quad-image-label-v2_style_fluidImageContainer__2SOMr',
        inputFeald: '#twotabsearchtextbox',
        firstSerachResult: '.a-section.aok-relative.s-image-tall-aspect',
        addToCartBUtton: '#add-to-cart-button',
        proceedToCheckout:'input[name="proceedToRetailCheckout"]'
    }
}

export default amazonPage;

export interface AmazonPage extends EnhancedPageObject<
    typeof amazonCommands,
    typeof amazonPage.elements> { }