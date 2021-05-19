# GoYak
  GoYak is intended to help Tennessee kayaking lovers to find routes based on distance, amenities offered, or by route difficulty level. 

## Table of Contents
  * [Project Requirements and Features List](#project-requirements-and-features-list)
  * [Technologies Used](#technologies-used)
  * [Installing and Launching GoYak](#instructions-for-installing-GoYak)
  * [Appendix 1: Planning Documentation](#appendix-1-planning-documentation)
    * [Entity Relationship Diagrams](#entity-relationship-diagram)
  * [Appendix 2: Set Up Instructions](#appendix-2-set-up-instructions)

## Project Requirements and Features List
### Get Started
When a user  registers an account with GoYak, the app loads their home screen to display different route filters as well as display their favorite routes. They can view more details on a given route including pictures of the route as well as reviews left my any user sorted by post date. A user may leave reviews on a specific route to help give other kayakers more information. A user may edit, update or delete their own reviews.
![Get Started GIF](GoYak\GoYak\client\src\images\GoYakPreview.gif)

## Technologies Used
  ### Development Languages, Libraries and Tools
### Front-end

-   React
-   Firebase authentication
-   ReactStrap
-   BootStrap

### Back-end

-   .NET 5
-   ASP.NET Core
-   MS SQL Server

### Design and Development

-   Figma
-   DbDiagram.io


## Instructions for Installing GoYak
  To launch the GoYak app, you will need to have access to Git, Visual Studio (configured to run server-side ASP.NET Web API C# code), -   MS SQL Server (Express or higher).
. If you do not have access to any of these tools, you can find instructions for installing them in the [Appendix.](#appendix-2-set-up-instructions)

### Firebase

You will need to create a Firebase project to have working authentication and authorization.

-   Go to [Firebase](https://firebase.google.com/) and create a project with a name of your choice. Add authentication in the form of email/password to the project.
-   In the project settings, you will need your `Project Id` and `Web API Key`

### Clone the project

  Clone this repo on you personal machine using the following command
  ```sh
    git clone git@github.com:skgilmore/GoYak.git
  ```

### Back-end setup

-   In `GoYak/appsettings.json` change the `FirebaseProjectId` value to your Firebase `Project Id`
-   From `GoYak/SQL`, run the scripts `01_Db_Create.sql` and then `02_Seed_Data` to generate the database
-   Create a user account in your Firebase project's auth section with that email address (and any password) and replace the data in that user's `FirebaseUserId` column in the database with the id generated in your Firebase project
-   Load `GoYaj.sln` in Visual Studio and run the GoYak server.

### Front-end Setup

-   Create a file in `GoYak/client/` called `.env.local`
-   In this file, paste `REACT_APP_API_KEY=Web API Key`, replacing "Web API Key" with your unique key from your Firebase project's project settings
-   Run `npm install` in `GoYak/client` to install all dependencies
-   To start the development server on `localhost:3000`, run `npm start`
-   A browser window should open with the authentication page and you can enter  your email address with the password you added in Firebase

 ### Congratulations you are now experiencing GoYak!

  ## Appendix 1: Planning Documentation

  ### Entity Relationship Diagram
  <img src="GoYak\GoYak\client\src\images\GoYakERD.png" width="55%">



  ## Appendix 2: Set Up Instructions

  You will need to have command line tools installed for your computer to use terminal commands.

  Linux/ Windows users, please visit the [Git page](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and follow the instructions for set up

  Mac users follow the instructions below

  Open your terminal and type
  ```sh
    git --version
  ```

  You will now need to configure your git account. In the terminal window, type:
  ```sh
    git config -global user.name "Your Name"
    git config -global user.email "Your Email"
  ```

  If you do not have Node.js installed on your machine, visit the [Node.js Download Page](https://nodejs.org/en/download/) and  follow the instructions. To ensure that it is installed correctly, in your terminal window, type
  ```sh
    echo $PATH
  ```
  Ensure that the result has the following in the $PATH
  ```sh
    /usr/local/bin
    or
    /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
  ```

  Now you can follow the [installation instructions](#instructions-for-installing-GoYak) to get GoYakup and running on your machine.

  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

