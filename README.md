# Name: Sail-and-Share
![logo](./img/icon.png)

### Slogan: Your Journey is our priority


### Platform: Web

### Short description of the project:
The idea was to implement a website where boat owners could rent their boats, skippers could be contacted by clients and clients could find boats and skippers that matches their needs. 

### The code architecture:
The HTML code for each feature of the website is written in a separate file. The css folder contain the css files needed, a bootstrap file to support responsivity for different layout sizes, datepicker file used to display properly an agenda when the user is asked to pick a date, and leaflet to show maps correctly in the details sections. The js folder contain javascript files and the img folder contain the images used.
No PHP used in this version of the code. For data storage we used Session Storage. 


### The platform navigation:

The index page of our website is the page where the user first land. This page provides a form to the user to find a boat. The user should give the location, the price range, the size, the capacity and the date that suits him. Once the user fill all the form and click the “search boat” button, a list with the boats that matches the search criterias will be displayed. At this version of our website the search will be based on the price range. Every element of this list is clickable to show more details about this item. The navigation between the website features is easily done using the “top navigation bar”. The navigation item that indicates in which page the user navigates is hovered in the top bar. When the user click the “profile” navigation element, two cases are possible: If he already created a profile, his profile will be displayed using the information provided earlier and stored in the session storage. The second case is that the user did not have a profile, the user will be asked to choose the account that he wants to create (a skipper account, a boat owner account or looking for a boat)  and then he will be asked to give a name, email, phone number, whether he have a boat licence or not and a profile image. All the user data will be stored in the session storage. A user must be connected to book a boat or hire a skipper. When a user chooses to book a boat or contact the website owners, an email is sent to someone of the group with the needed information.

### Implementation:

Our website is responsive to screen size (we can test it when we minimize the window, the navigation bar become a list) and interoperable between different devices and browsers (we tested it on Chrome, Edge, Opera and a mobile phone browser). The interactivity with the user is through javascript (session storage). The data of the list of available boats and skippers are fake and are not provided by real users, the images of boats and skippers are free internet pictures. At this stage the only real data is the data of the profile as it is given by the user of the website. In our website we used the majority of the HTML5 tags seen during the lecture. We used also javascript interactivity and local storage to store the user profile data. The file storage and Drag’n Drop feature are used to upload and store and display the user profile image.  

All the code and the files are provided with this report. All the HTML and CSS code has been validated using https://validator.w3.org/nu/ with no errors or warnings in order to respects W3C recommendation for HTML5.</br>
An internet connection is required in order to make the code work properly in localhost. We tried also to host our web page in the following link:  https://sail-and-share-6b83c.firebaseapp.com/

### Authors:

- [BOUAOUN Radhwen](https://www.linkedin.com/in/radhwen-bouaoun/)
- TRONCY Pauline
- MIRABET HERRANZ Nélida 
