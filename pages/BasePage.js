var BasePage=function () {
    'use strict';
    this.travelHomePage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };
    this.getPageTitle = function(){

        return browser.getTitle();
 
    }
 

};
module.exports=new BasePage();