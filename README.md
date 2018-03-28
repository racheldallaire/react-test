# :pizza: react-test

## Getting Started:

1. Create the .env by using .env.example as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Run migrations: `knex migrate:latest`
5. Run seed: `knex seed:run`
6. Start the server: `npm start`
7. Visit http://localhost:8080/
8. Voila!

## Current Progress

![Screenshot of UI](https://github.com/racheldallaire/react-test/blob/master/docs/ui.gif)

Currently, this is the functionality I have implemented:
* Login and registration forms, which will post to the appropriate APIs (NB: see below for more about login functionality)
* Upon registration, you will be redirected to the Admin dashboard, where users have been rendered in a list 
* To view the Regular dashboard, where I have rendered the tickets, visit http://localhost:8080/Temp
* Tickets will display red icon if closed, and green otherwise
* Close button is only displayed if ticket is open

I am still working on:
* Adding user sessions so that I can implement the logic for displaying the correct dashboard
* Adding users to pg database on registration/Authenticating users so that the login actually works (since I am not adding users to the database yet, I have nothing to validate them against)
* Removing tickets (the button posts to correct API, but does not delete element yet)
* Creating ticket form

I also want to add more validations beyond requiring that input fields not be blank, and of course work on the styling of the dashboard.

## Notes

* The API that I am posting to to get the tickets is rendering tickets whose status is always 'closed.' There are no open tickets for me to test (I know this won't be a problem once I create the form and add my own tickets, but for now it is)
* I am sorry that this isn't fully completed yet!
