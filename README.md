# Dev Jobs

## Repository

In this repository you will find the application code for a Dev Job Search application. The purpose of the application is for Developers to search for dev jobs based on a form that prompts the user for input to query the Dev Jobs database using Sequelize. This is a full stack application that is structured using MVC. Structuring the files this way helps breakdown roles when working in a group and helps keeps the code organized and easy to maintain and update. This application uses sessions and has the feature to sign up and make an account. Users who have made an account and are logged in will have access to the form to search the database and retrieve results. The API returns the following results:

- Company Name
- Location
- Job Type (Full-Time or Part-Time)
- Salary Range
- URL Link to apply 

One of the biggest challenges that were encountered while building this app was getting the database results to render on the page once the user submitted the form. We solved the issue by changing the table names inside the jobRoutes to match the Jobs Model. We also had to change the jobs.js file for the front end javascript that handles the form submission. The issue was in the document.location.replace(), We had to use a template literal and use query strings to properly render the results on the page through the jobs handlebar file.

## Table of Contents

- [Contribute](#contribute)
- [Appearance](#appearance)
- [Changes](#changes)
- [Features](#features)
- [Credits](#credits)
- [License](#license)

## Contribute

To view the repository of this weather app and contribute to this application click the following link:  [Dev Jobs](https://github.com/lildano50/project-2)

If you need help on how to clone a GitHub repository into your local repository, visit the following GitHub link: [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) 

## Appearance

Deployed Screenshot:
    ![Dev Jobs](/DevJobs/public/assets/images/screenshot.png)

To view the deployed webpage click the following link: [Deployed Webpage](https://shielded-hollows-32035-7796c32f6e6c.herokuapp.com/)

## Changes

We would like to implement the following changes to this application:

- Add the ability to to search jobs based on if they're remote or not
- Use more information from the API to display in the browser


## Features

Some of the features in this application include:

- Use of API data
- Use of Sessions
- Handlebars as a template engine to render html
- Sequelize as the ORM to query the MySql database
- Bcrypt to hash passwords

## Credits

Daniel Park
Luis Mansilla
Adriana Cantú
Tim Lafuente

## License

Link to [The MIT License (MIT)](/LICENSE.txt)