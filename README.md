# fullstackapplication
Prerequisite
Nodejs (10.16.3) and MySQL should be installed

To Run Backend - 
  1. Create a Database with name ```feedback``` in mysql
  2. Import the ```feedback.sql``` to MySQL
  3. Go to backend folder
  4. Run ```npm install```
  5. Update database connection details i.e. username, password here - ```backend/src/datasources/employee.datasource.json```
  5. Run ```npm start```
  6. In case of error related to database connection updated - ```backend/src/datasources/employee.datasource.json```
  7. Run ```npm start```
  8. Go to  http://localhost:4000 in browser and http://localhost:4000/explorer/ to try API's
  
To Run Frontend
 1. Go to frontend folder
 2. Run ```npm install```
 3. Run ```ng serve```
 4. Open Appication in browser : http://localhost:4200/
