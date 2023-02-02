# Campus-Access-Management-System <br>
This is a complete web application for a university management to keep record of their campus access system. <br>
# Modules <br>
Download all the node modules inside client and server directories <br>
The modules can be download using the command "npm i modulename". <br>
The server modules are mysql, cors, express,bcrypt, dotenv and jsonwebtoken. Download these modules inside the server directory. <br>
For client modules type "npm i react-scripts" inside the client directory. <br>
#.env file
Create .env file inside the server directory. This file will contain the sensitive information about the database which you do not want others to know. Add password, host, user and database inside it. <br>
# Database <br>
Create the database tables using "node createtables.js" command inside the server directory. <br>
Manually add admins record inside your user table. Keep the occupation to admin and hash the password using the bcrypt library. <br>
The adding.js file will add some random student, faculty members and staff employs to the database. <br>
# Run the application
Run the server using the command "node server.js" inside server directory. <br>
Run the client side using the command "npm start" inside client directory. You'll be redirected to the signup page. <br>
# Functionalities
The clients i.e., students,faculty or staff members can view their access status, can request visitor access, vehicle access etc.
Admin can block and allow the access of all other actors.
