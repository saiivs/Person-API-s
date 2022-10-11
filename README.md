# Person-API

step 1: I hope you guys have already installed node.js & express.js

step 2: Run the command --npm init -> which will install all the dependancies on which our project is depended on.

step 3: A folder named node modules will be added in your root folder, which contains all the files related to your dependancies.

step 4: Run the command --npm run dev -> which will run the app.js file inside your root folder. Now your application will be running over the port 3000 in your browser.

step 5: As the code doesnt consist of any ui, we have to use the post man to find out the responses of the api that will be used.

step 6: This project is using two api's
         * localhost:3000/post/person ->api used for creating the user data in the database.
         * localhost:3000/get/person ->api used for fetching the all user data from the database.
         
step 7: We are dealing here with NoSql database called mongodb & i have used mongoose client for the connection and creating a schema, So that the data will be entered           to the database according to the schema. The schema is specified inside the root folder -> Technisanct/model/schema.js.

Iam using my mongodb atlas cluster, You can replace the url field with your local database.
        
