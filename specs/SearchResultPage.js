var basePage=require('../pages/BasePage.js');
var testData=require('../resources/testData.json');
var resultPage=require('../pages/TravelHotelSearchPage.js');
var dates=require('../utils/calender.js');

describe('Hotel Search Tests execution on', function () {
   
   
    it('Open Vaccation Travel Site', function () {
        basePage.travelHomePage(testData.search.baseUrl);
       
    });

    it('Click On Hotel Button', function () {
        resultPage.clickOnHotelButton();
    });

    it('Enter Destination City', function () {
       resultPage.EnterDestinationCity(testData.keywords.city); 
    });

    it('Enter Check-In Date', function () {
        dates.selectCheckInDate(testData.keywords.startdate);
        
    });

    it('Enter Check-Out Date', function () {
        dates.selectCheckOutDate(testData.keywords.enddate);
        
    });

     it('Select number of adults from dropdown', function () {
        resultPage.selectAdults(testData.keywords.adultsCount);
    });

    it('Select number of childs from dropdown', function () {
        resultPage.selectChild(testData.keywords.childCount);
        
     });

   
    it('Click on + sign', function () {
        resultPage.clickOnMoreOptionSign();
        
    });

    it('Select Ratings', function () {
        resultPage.selectRatings(testData.keywords.raings);
        
    });
    
    it('Click on Search button', function () {
        resultPage.searchButton();
        
    });
    

});

