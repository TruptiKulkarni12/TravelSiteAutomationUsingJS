//const { browser, ExpectedConditions } = require("protractor");
var locator=require('../resources/testData.json');
var SelectWrapper=require('../utils/select-wrapper.js');
const { element, by, ExpectedConditions, browser,} = require('protractor');
const { protractor } = require('protractor/built/ptor');
const { expect, assert } = require('chai');
var _elementCheckInDate=element(by.xpath(locator.hotelSearchResultPage.checkInDate));
var _elementCheckOutDate=element(by.xpath(locator.hotelSearchResultPage.checkOutDate));
var _elementSecondDatePicker=element(by.xpath(locator.hotelSearchResultPage.seconddatepicker));

    var targetDay=0;
    var targetMonth=0;
    var targetYear=0;
    var currentDay=0;
    var currentMonth=0;
    var currentYear=0;
    var increment=false;
    var count=false;

        var today = new Date();
        var currentDay = today.getDate()+1;
       
        console.log("Current Date :"+currentDay);
        //console.log("Current Next Date :"+currentNextDay);
        
        var currentMonth = today.getMonth() + 1; //January is 0! 
        //console.log("Current Date :"+currentMonth); 
    
        var fullYear = today.getFullYear();
        
        var currentYear = fullYear.toString().substr(2, 2);
       // console.log("Year is:"+currentYear);
    
        if (currentMonth < 10) {
            currentMonth = '0' + currentMonth;
        }
        if (currentDay < 10) {
            currentDay = '0' + currentDay;
        }
        //console.log("After if month:"+currentMonth);
        var currentMonthDateYear = "" + currentMonth + "/" + currentDay + "/" + currentYear;
        console.log("Current MM/DD/YY :"+currentMonthDateYear);

    
/**
 * Get Target Month Date and Year of MM/DD/YY format
 * 
*/

var getTargetMonthDateAndYear =function() {
    
    this.selectCheckInDate=function (checkindate) {

    //Returns the first occurance of specificed charcter
    var firstindex=checkindate.indexOf("/");
    //Returns the last occurance of specificed charcter
    var lastindex=checkindate.lastIndexOf("/");

    //Return Target Month
    var targetMonth=checkindate.substring(0,firstindex);
    console.log("Target Checkin Month:"+targetMonth);
   
    //Return Target Day
    var targetDay=checkindate.substring(firstindex+1,lastindex);
    console.log("Target Checkin Day:"+targetDay);


    
    //Return Target Year
    var targetYear=checkindate.substring(lastindex+1,checkindate.length);
    console.log("Target Checkin Year:"+targetYear);
    
    if ((targetYear-currentYear)>0 && (targetMonth<currentMonth))
    {
        count=true; 
       // console.log("Target year is more than 1");
                    _elementCheckInDate.isPresent().then(function () {
                        _elementCheckInDate.click().then(function () {
                            _elementCheckInDate.sendKeys(checkindate);
                        });
                    });    
                    
                    return this;
                
    }
    else if ((targetYear-currentYear)==0 && (targetMonth-currentMonth)>0)
        {
            count=true;     
                    _elementCheckInDate.isPresent().then(function () {
                        _elementCheckInDate.click().then(function () {
                            _elementCheckInDate.sendKeys(checkindate);
                        });
                    });    
                    
                    return this;
        }
        else if ((targetYear-currentYear)==0 && (targetMonth-currentMonth)==0 && (targetDay>=currentDay))
        {
            count=true; 
                    _elementCheckInDate.isPresent().then(function () {
                        _elementCheckInDate.click().then(function () {
                            _elementCheckInDate.sendKeys(checkindate);
                        });
                      
                    });    
                    
                    return this;
        }

        assert.isTrue(count,'Please select correct checkin date');
        

};
       
    

    this.selectCheckOutDate=function (checkout) {

        //Returns the first occurance of specificed charcter
        var firstindex=checkout.indexOf("/");
        //Returns the last occurance of specificed charcter
        var lastindex=checkout.lastIndexOf("/");
    
        //Return Target Month
        var checkouttargetMonth=checkout.substring(0,firstindex);
        console.log("Target Checkout Month:"+checkouttargetMonth);
       
        //Return Target Day
        var checkouttargetDay=checkout.substring(firstindex+1,lastindex);
        console.log("Target Checkout Day:"+checkouttargetDay);
        
        //Return Target Year
        var checkouttargetYear=checkout.substring(lastindex+1,checkout.length);
        console.log("Target Checkout Year:"+checkouttargetYear);
    
       
        // return this.targetMonth + "/" + this.targetDay + "/" +this.targetYear;
    
        
        
        if ((checkouttargetYear-currentYear)>0 && (checkouttargetMonth<currentMonth))
        {
            increment=true; 
           // console.log("Target year is more than 1");
                    _elementCheckOutDate.isPresent().then(function () {
                        _elementCheckOutDate.click().then(function () {
                            _elementCheckOutDate.sendKeys(checkout).then(function () {
                                _elementSecondDatePicker.click();
                            })
                            });
                        });    
                        
                        return this;
                    
        }
        else if ((checkouttargetYear-currentYear)==0 && (checkouttargetMonth-currentMonth)>0)
            {
                increment=true;     
                    _elementCheckOutDate.isPresent().then(function () {
                        _elementCheckOutDate.click().then(function () {
                            _elementCheckOutDate.sendKeys(checkout).then(function () {
                                _elementSecondDatePicker.click();
                            })
                            });
                        });    
                        
                        return this;
            }
            else if ((checkouttargetYear-currentYear)==0 && (checkouttargetMonth-currentMonth)==0 && (checkouttargetDay>currentDay))
            {
                
                increment=true; 
                        _elementCheckOutDate.isPresent().then(function () {
                            _elementCheckOutDate.click().then(function () {
                                _elementCheckOutDate.sendKeys(checkout).then(function () {
                                    _elementSecondDatePicker.click();
                                })
                            });
                          
                        });    
                        
                        return this;
            }
    
            assert.isTrue(increment,'Please select correct checkout date');
        };
            
    
    
    }    
    

module.exports=new getTargetMonthDateAndYear();
