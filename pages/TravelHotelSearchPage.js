var locator=require('../resources/testData.json');
var SelectWrapper=require('../utils/select-wrapper.js');
const { element, by, ExpectedConditions, browser,} = require('protractor');
const { protractor } = require('protractor/built/ptor');
const { expect, assert } = require('chai');

var _elementHotelButton=element(by.xpath(locator.hotelSearchResultPage.hotelbutton));
var _elementDestinationCity= element(by.xpath(locator.hotelSearchResultPage.destination));
var _elementAutoCity=element.all(by.xpath(locator.hotelSearchResultPage.autpopulatedcity));

var _elementAdult=element(by.id(locator.hotelSearchResultPage.numberofadults));
var _elementChild=element(by.id(locator.hotelSearchResultPage.numberofchildren));
var _elementMoreOption=element(by.xpath(locator.hotelSearchResultPage.moreOption));
var _elementRatings=element(by.id(locator.hotelSearchResultPage.hotelratings));
var _elementSearchButton=element(by.xpath(locator.hotelSearchResultPage.searchbutton));
var _elementSearchResultPage=element(by.xpath(locator.hotelSearchResultPage.searchresultpage));

var _elementAgeOfFirstChild=element(by.id("child0HotelAge"));
var _elementAgeOfSecondChild=element(by.id("child1HotelAge"));
var _elementAgeOfThirdChild=element(by.id("child2HotelAge"));
var _elementAgeOfFourthChild=element(by.id("child3HotelAge"));
var _elementAgeOfFifthChild=element(by.id("child4HotelAge"));
var _elementAgeOfSixthChild=element(by.id("child5HotelAge"));

var _wrapperNumberOfAdults = new SelectWrapper(by.id("selectHotelNumberAdults"));
var _wrapperNumberOfChildern=new SelectWrapper(by.id("selectHotelNumberChildren"));
var _wrapperRatings=new SelectWrapper(by.id("selectStarRating"));
var _wrapperAgeOfFirstChild=new SelectWrapper(by.id("child0HotelAge"));
var _wrapperAgeOfSecondChild=new SelectWrapper(by.id("child1HotelAge"));
var _wrapperAgeOfThirdChild=new SelectWrapper(by.id("child2HotelAge"));
var _wrapperAgeOfFourthChild=new SelectWrapper(by.id("child3HotelAge"));
var _wrapperAgeOfFifthChild=new SelectWrapper(by.id("child4HotelAge"));
var _wrapperAgeOfSixthChild=new SelectWrapper(by.id("child5HotelAge"));

var ageOfFirstChild=locator.keywords.ageOfFirstChild;
var ageOfSecondChild=locator.keywords.ageOfSecondChild;
var ageOfThirdChild=locator.keywords.ageOfThirdChild;
var ageOfFourthChild=locator.keywords.ageOfFourthChild;
var ageOfFifthChild=locator.keywords.ageOfFifthChild;
var ageOfSixthChild=locator.keywords.ageOfSixthChild;



var TravelHotelSearchPage = function () {

    this.clickOnHotelButton= function () {
        _elementHotelButton.isDisplayed().then(function () {
        _elementHotelButton.click();
        })
        return this;
        
    }

        
    this.clickOnMoreOptionSign= function () {
        _elementMoreOption.isDisplayed().then(function () {
            _elementMoreOption.click();
                      
        })
        return this;    
    }
    

    this.EnterDestinationCity= function (inputCity) {
        _elementDestinationCity.click().then(function () {
                    {
                        _elementDestinationCity.sendKeys(inputCity).then(function (done){
                            browser.sleep(3000);
                            _elementAutoCity.getText().then(function (citynames){
                              
                                for (var index = 0; index < citynames.length; index++) {
                                  expect(citynames[index]).equal(inputCity);
                                  break;
                                    
                                }
                                console.log("index location:"+ index + " CityName:"+citynames[index]);
                                var atuaIndexCount=index+1;
                               // console.log("index vaule is:"+atuaIndexCount)
                                element(by.xpath('//*[@id="ui-id-1"]/li['+atuaIndexCount+']')).click();
                                            
                            });
                           
                        })
                       
            }
    })
    
        return this;
        
    }
    
    
    this.selectChild=function (childcount) {
        _elementChild.isPresent().then(function (){   
           var flag=false;
            
            switch (childcount) {
                case "0":
                    console.log("No child is present with their Parents,So keeping default value as 0");
                    break;

                case "1":
                    _wrapperNumberOfChildern.selectByText(childcount);
                    _elementAgeOfFirstChild.isEnabled().then(function () {
                     if (ageOfFirstChild <18 && ageOfFirstChild >1) {
                         flag=true;
                         console.log("Age of First child is:"+ageOfFirstChild);
                         _wrapperAgeOfFirstChild.selectByText(ageOfFirstChild);
                         return this;
                     }   
                     else{
                        
                        console.log("Age " +ageOfFirstChild + " is not in range 2 to 17 So considering age of child is Under 2");
                        _wrapperAgeOfFirstChild.selectByValue(1);
                     }
                     
                    })
                    break;
                    case "2":
                        _wrapperNumberOfChildern.selectByText(childcount);
                        _elementAgeOfFirstChild.isEnabled().then(function () {
                            if (ageOfFirstChild <18 && ageOfFirstChild >1) {
                                flag=true;
                                console.log("Age of First child is:"+ageOfFirstChild);
                                _wrapperAgeOfFirstChild.selectByText(ageOfFirstChild);
                               
                               
                                _elementAgeOfSecondChild.isEnabled().then(function () {
                                    if (ageOfSecondChild <18 && ageOfSecondChild >1) {
                                        flag=true;
                                        console.log("Age of Second child is:"+ageOfSecondChild);
                                        _wrapperAgeOfSecondChild.selectByText(ageOfSecondChild);
                                        return this;
                                    }
                                    else{
                                        console.log("Age " +ageOfSecondChild + " is not in range 2 to 17 So considering age of child is Under 2");
                                        _wrapperAgeOfSecondChild.selectByValue(1);
                                    }
                                })
                                    
                            
                        }   
                            else{
                                console.log("Age " +ageOfFirstChild + " is not in range 2 to 17 So considering age of child is Under 2");
                                _wrapperAgeOfFirstChild.selectByValue(1);
                                _elementAgeOfSecondChild.isEnabled().then(function () {
                                    if (ageOfSecondChild <18 && ageOfSecondChild >1) {
                                        flag=true;
                                        console.log("Age of Second child is:"+ageOfSecondChild);
                                        _wrapperAgeOfSecondChild.selectByText(ageOfSecondChild);
                                        return this;
                                    }
                                    else{
                                        console.log("Age " +ageOfSecondChild + " is not in range 2 to 17 So considering age of child is Under 2");
                                        _wrapperAgeOfSecondChild.selectByValue(1);
                                    }
                                })
                            }
                        })
                        break;

                case "3":
                        _wrapperNumberOfChildern.selectByText(childcount);
                        _elementAgeOfFirstChild.isEnabled().then(function () {
                            if (ageOfFirstChild <18 && ageOfFirstChild >1) {
                                flag=true;
                                console.log("Age of First child is:"+ageOfFirstChild);
                                _wrapperAgeOfFirstChild.selectByText(ageOfFirstChild);
                               
                               
                                _elementAgeOfSecondChild.isEnabled().then(function () {
                                    if (ageOfSecondChild <18 && ageOfSecondChild >1) {
                                        flag=true;
                                        console.log("Age of Second child is:"+ageOfSecondChild);
                                        _wrapperAgeOfSecondChild.selectByText(ageOfSecondChild);
                                 _elementAgeOfThirdChild.isEnabled().then(function () {
                                    if (ageOfThirdChild <18 && ageOfThirdChild >1) {
                                        flag=true;
                                        console.log("Age of Third child is:"+ageOfThirdChild);
                                        _wrapperAgeOfThirdChild.selectByText(ageOfThirdChild);
                                        return this;
                                    }
                                    else{
                                        console.log("Age " +ageOfThirdChild + " is not in range 2 to 17 So considering age of child is Under 2");
                                        _wrapperAgeOfThirdChild.selectByValue(1);
                                    }
                                    
                                })
                                        
                                    }
                                    else{
                                        console.log("Age " +ageOfSecondChild + " is not in range 2 to 17 So considering age of child is Under 2");
                                        _wrapperAgeOfSecondChild.selectByValue(1);
                                    
                                    _elementAgeOfThirdChild.isEnabled().then(function () {
                                        if (ageOfThirdChild <18 && ageOfThirdChild >1) {
                                            flag=true;
                                            console.log("Age of Third child is:"+ageOfThirdChild);
                                            _wrapperAgeOfThirdChild.selectByText(ageOfThirdChild);
                                            return this;
                                        }
                                    })
                                    }
                                })
                                    
                            
                        }   
                            else{
                                console.log("Age of First Child " +ageOfFirstChild + " is not in range 2 to 17 So considering age of child is Under 2");
                                _wrapperAgeOfFirstChild.selectByValue(1);

                                _elementAgeOfSecondChild.isEnabled().then(function () {
                                    if (ageOfSecondChild <18 && ageOfSecondChild >1) {
                                        flag=true;
                                        console.log("Age of Second child is:"+ageOfSecondChild);
                                        _wrapperAgeOfSecondChild.selectByText(ageOfSecondChild);
                                       // return this;

                                        _elementAgeOfThirdChild.isEnabled().then(function () {
                                            if (ageOfThirdChild <18 && ageOfThirdChild >1) {
                                                flag=true;
                                                console.log("Age of Third child is:"+ageOfThirdChild);
                                                _wrapperAgeOfThirdChild.selectByText(ageOfThirdChild);
                                                return this;
                                            }
                                            else{
                                                console.log("Age of Third Child " +ageOfThirdChild + " is not in range 2 to 17 So considering age of child is Under 2");
                                                _wrapperAgeOfThirdChild.selectByValue(1);
                                            }
                                        })
                                        
                                    }

                                    else{
                                        console.log("Age of Second Age " +ageOfSecondChild + " is not in range 2 to 17 So considering age of child is Under 2");
                                        _wrapperAgeOfSecondChild.selectByValue(1);

                                        _elementAgeOfThirdChild.isEnabled().then(function () {
                                            if (ageOfThirdChild <18 && ageOfThirdChild >1) {
                                                console.log("Age of Third child is:"+ageOfThirdChild);
                                                _wrapperAgeOfThirdChild.selectByText(ageOfThirdChild);
                                                //return this;
                                            }
                                            else{
                                                console.log("Age of Third Child Age " +ageOfThirdChild + " is not in range 2 to 17 So considering age of child is Under 2");
                                                _wrapperAgeOfThirdChild.selectByValue(1);
                                            }
                                        })
                                        
                                    }
                                
                            
                                })
                            }
                        })
                        break;
                    
                                    
                default:
                    console.log("Expected value is not matching with actual, So keeping default value as 0");
                    break;
            }
            
        });
        return this;
    }
                
    this.selectAdults=function (adultno) {
        _elementAdult.isPresent().then(function (){   
            validateCustomerRecords(_elementAdult,_wrapperNumberOfAdults,adultno);
        });
        return this;
    }
    

    this.selectRatings=function (rating) {
        _elementRatings.isPresent().then(function (){   
            validateCustomerRecords(_elementRatings,_wrapperRatings,rating);
        });
        return this;
    }
   
    this.searchButton=function () {
        _elementSearchButton.isPresent().then(function (){   
        _elementSearchButton.click().then(function () {
            _elementSearchResultPage.isDisplayed();
            
        })
        });
        return this;
    }
   
     
    function validateCustomerRecords(webelement,selectWraps,drpvalue){
            webelement.isDisplayed().then(function () {
            selectWraps.getOptions().getText().then(function (options) {
            var flag=false;
            options.forEach(element => {                   
                if (element==drpvalue) {   
                    flag=true; 
                    selectWraps.selectByText(drpvalue);
                            
                       }
                       
                 })
            assert.isTrue(flag,'Please select correct value from dropdown');    
              
                 });
               
                })
                 
              };
        
        
}

module.exports=new TravelHotelSearchPage();