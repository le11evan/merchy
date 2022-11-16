# Merchy (E-Commerce Website) [Group EAT]

Merchy is a fully functional e-commerce react site, that allows a person to update products on commerce.js, and can commit payments using stripe. 

Group Members: 
Evan Le, le11evan@csu.fullerton.edu
Aren Lizardo, arenlaure@csu.fullerton.edu
Thomas Phan, tummeito@csu.fullerton.edu

Link to live site: https://merchygroupeat.netlify.app/

<h2> 1. Cloning and Running App :computer:</h2>

You can download this app to your local using `git clone https://github.com/le11evan/merchy.git` command on your bash. Then open your terminal in the folder that you cloned and open your command line, use `npm install` command. This command will install all the dependencies that we used in the app. Then you can use 'npm start' command to run the app on your localhost:3000.

<h2> 2. About App :warning: </h2>

The website currently uses test API keys, so no payments are actually being processed. You can enter a test credit card by just pressing 4 and 2 repeatedly for the credit card info. We didn't need to use any database to store any information about the products, payments, carts, etc. Commerce.js basically handles it, so we don't need to pull from any back-end code.

<h2> 3. Dependencies :open_file_folder:</h2>

In this app I've used **_Material UI_**, **_Commerce.js_**, **_Stripe.js_**, **_React-Router_** and **_React-Hooks_**.
There are the commands that you can use to install these dependencies. (I've used yarn, you can use `npm install` instead of `yarn add` if you're using npm).

- `npm install @material-ui/core @material-ui/icons`
- `npm install @chec/commerce.js`
- `npm install @stripe/react-stripe-js @stripe/stripe-js`
- `npm install react-router-dom`
- `npm install react-hook-form`
