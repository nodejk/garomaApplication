# garoma-App
Full Stack engineering task: Backend + Frontend
Contact: krishna.work97@gmail.com

webApp: contains all the files for the front end Angular application.
server: contains the files for the backend NodeJS application.

About Unit testing the backend application:
1. The NodeJS application first downloads the data from the api: http://mock-shirt-backend.getsandbox.com/shirts and stores it in a JSON file.
2. The application tests whether it returns response 200 to the call http://localhost:5000/products.
3. The application also tests whethere it returns the data in the correct format required.

Features of the Frontend Application:
1. The shopping cart state persists page reloads.
2. A shopping cart modal pop up to change the quantity of items or remove them and check the total price of the cart.
3. Cart Icon in the header to display the total number of items in the cart.

Process to get the application running:
a. Get the server running:
  1. clone the repo in your local computer.
  2. run: cd server.
  3. run: npm install
  4. run: npm run start (this will start the server at port 5000).
  5. Optional: To test the backend server, run the command "npm run test".

b. Get the frontend application running:
  1. go to the root directory of the project.
  2. run: cd webApp
  3. run: npm install
  4. run: ng server (this will start the angular web application at http://localhost:4200/)
 
 Screenshot of the Frontend Application:
 
 ![image](https://user-images.githubusercontent.com/94879785/160862133-1ea0dea2-7569-4051-8dea-17dac019fc5f.png)
 
 
 ![image](https://user-images.githubusercontent.com/94879785/160862241-14d3c62b-2bc1-4594-8d2c-18f973e5c530.png)

