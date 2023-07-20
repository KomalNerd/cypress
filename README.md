# Cypress test automation framework  with cucumber for DirectShifts Assignment

This repository basically covers complete automation of the url : https://staging.directshifts.com/jobs/p/physicians-hospital-telehealth-openings-9057 

Below are the test cases that I have thought of 

| Sl No.       | Test Cases |
| ------------ | -----------|
| Test Case 1  | Verify that user can navigate to "DirectShifts" job application page by using the direct url |
| Test Case 2  | Verify that the url is loading within the permisibile load time specified by the bussiness |
| Test Case 3  | Verify that the url is loading across different browser like chrome, safari, edge and opera |
| Test Case 4  | Verify that url is loading in mobile and tablets browsers |
| Test Case 5  | Verify that appropriate error is thrown when the websites server is down |
| Test Case 6  | Verify that appropriate error is thrown when the websites fails to load after crossing the timeout limit |
| Test Case 7  | Verify that all the labels and testboxes on the DirectShifts page are as per the specification |
| Test Case 8  | Verify that appropriate error is thrown if the Api call fails on click of "Share" button |
| Test Case 9  | Verify that appropriate error is thrown if the Api call fails on click of "Sign-in" button |
| Test Case 10 | Verify that appropriate error is thrown if the Api call fails on click of "Apply Now" button |
| Test Case 11 | Verify that "Sign in" button shall be removed once the user successfully logs in |
| Test Case 12 | Verify that "Sign in" button shall not be removed when the user fails to log in |
| Test Case 13 | Verify that user is logged out once the session cookei is deleted from the browser |
| Test Case 14 | Verify that all the values of "Employer","Category","Shift Type","Salary/Week","Visa Sponsorship" are visible after clicking on the same |
| Test Case 15 | Verify that on click of "share button" a share pop-up opens up |
| Test Case 16 | Verify that user can copy the "share link" from that pop-up |
| Test Case 17 | Verify that user can share the job opening to any internal app via click of respective options on the share pop-up |
| Test Case 18 | Verify that user is navigated to the sign in page on click on sign in button |
| Test Case 19 | Verify that job speciality department shown below the job title is related to the actual job openings |
| Test Case 21 | Verify that an error is thrown in the "Apply form" when user tries to click "Apply Now" button without entering all the mandatory fields |
| Test Case 22 | Verify that no error is thrown in the "Apply form" when user tries to click "Apply Now" button with entering all the mandatory fields |
| Test Case 23 | Verify that an error is not thrown in the "Apply form" when user tries to click "Apply Now" button after entering all the mandatory fields and not entering any of the optional fields |
| Test Case 24 | Verify that an error is not thrown in the "Apply form" when user tries to click "Apply Now" button after entering all the mandatory fields as well as optional fields |
| Test Case 25 | Verify that asterisk is present against all the mandatory fields |
| Test Case 26 | Verify that asterisk is not present against the non mandatory fields |
| Test Case 27 | Verify that an error is thrown if the length of the characters entered in the first name fields is more than 50 |
| Test Case 28 | Verify that an error is not thrown if the length of the characters entered in the first name fields is 50 or less than 50 |
| Test Case 29 | Verify that an errror is thrown when user doesn't enters text characters inside the first name textbox |
| Test Case 30 | Verify that no errror is thrown when user enters text characters inside the first name textbox |
| Test Case 32 | Verify that an error is thrown if the length of the characters entered in the last name fields is more than 50 |
| Test Case 33 | Verify that an error is not thrown if the length of the characters entered in the last name fields is 50 or less than 50 |
| Test Case 34 | Verify that an errror is thrown when user doesn't enters text characters inside the last name textbox |
| Test Case 35 | Verify that no errror is thrown when user enters text characters inside the last name textbox |
| Test Case 36 | Verify that an error is thrown if the email id is invalid |
| Test Case 37 | Verify that no error is thrown if the email id is valid |
| Test Case 38 | Verify that user can use upload feature |
| Test Case 39 | Verify that user can enter First name by clicking on "First Name" textbox |
| Test Case 40 | Verify that user can enter Last name by clicking on "Last Name" textbox |
| Test Case 41 | Verify that user can enter email by clicking on "Email" textbox |
| Test Case 42 | Verify that user can enter phone by clicking on "Phone" textbox |
| Test Case 43 | Verify that User can fill all the details and apply for the Job |
| Test Case 44 | Verify that User cannot use numbers in start of name |
| Test Case 45 | Verify that User cannot use special characters in name field |
| Test Case 46 | Verify that no security sensitive content is displayed on the page |
| Test Case 47 | Verify that no security sensitive content is displayed on the page as part of any action or error|
| Test Case 48 | Verify that footer content is as per the requirement |
| Test Case 49 | Verify that click on directshift logo in the footer takes user to home page |
| Test Case 50 | Verify that click on email or phone links in the footer takes user to inbuilt apps of the system |
| Test Case 51 | Verify that all different type of files can be uploaded via file upload option |
| Test Case 52 | Verify that there is limit to the size of file that can be uploaded |
| Test Case 53 | Verify that all USA states are present in the state dropdown |
| Test Case 54 | Verify that all occupation types are shown in the occupation downdown |
| Test Case 55 | Verify that all specialities are shown under the specialties dropdown which is mapped to a specific occupation |
| Test Case 56 | Verify that click on terms and privacy links navigates user to respective pages |

## Please find the steps to use this repo

1.  Install node on your machine
2.  Git clone the repo on your local
3.  run "npm i " to install all the dependencies
4.  To run different commands use "Scripts" under package.json" ( format will be "npm run command" )
5. One test case with captha is intentionally failed
