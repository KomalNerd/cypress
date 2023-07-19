Feature: All somke test cases for provided url
   
   Background:
       Given user navigates to the direct shift url

    Scenario: verify that all the labels and testboxes on the DirectShifts page are as per the specification
       When  direct shift job apply page loads
       Then  user should see all the appropriate labels
       And   user should see all the appropriate textboxes 

    Scenario: Verify that user is navigated to the sign in page on click on sign in button
       When  user click on the sign in button
       Then  user should be navigated to sign in page

    Scenario: Verify that an error is thrown in the Apply form when user tries to click Apply Now button without entering all the mandatory fields
       When  user clicks the apply now button
       Then  Error saying that please fill out this field shall be thrown

    Scenario: Verify that asterisk is present against all the mandatory fields
       Then asterisk shall be present against all the mandatoryField
   
    Scenario: Verify that asterisk is not present against the non mandatory fields
       Then asterisk shall not be present against all the non mandatoryField
  
    Scenario: Verify that user can use upload feature 
       Then user clicks on the upload button and uploads a pdf file
    
    #Failing this test case purposly as I am assuming that capta cannot be automated
    Scenario: Verify that user can fill all the details and apply for the Job
       When user Fills valid details in form
       And user clicks the apply now button 
       Then user should be navigated to the apply confirmation page