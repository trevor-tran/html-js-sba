## Job Application Tracker

### Descriptions
This website allows job seekers to keep track of their job applications. Users enter the company, valid job link, and current status of the application. Later, users can update the status of the applications when they're moving on with the application process.

### Techincal Specifications
* Utilized bootstrap's grid system to lay out elements on the pages and style elements
* Leveraged JQuery to get and insert elemnts with shorter syntax
* Employed CSS for proper styling e.g spacing, alignments.
* Maintained code readibility by factoring some JavaScript and CSS into separate files.
### Functionality Specifications
#### Home Page
* Users utilize inputs to enter values, and select an application status from the dropdown. Users' inputs are validated as following:
  * *Company* can't be empty
  * *Job link* can't be empty and it must be a valid url link e.g. https://google.com
* Users add the applications by clicking on "Add" button, and the application would be added to the table below for tracking progress
#### Sign Up Page
* Mocking up sign up form, which allows users to sign up an account to save their applications.
* All fields required and email address must be valid
* During the signing up procress, users can cancel anytime and go back to home page via `Cancel` button or website header.
##### Sign In Page
* Mocking up sign in form, which allows users to sign in and view their applications.
* All fields required and email address must be valid
* During the signing in procress, users can cancel anytime and go back to home page via `Cancel` button or website header.