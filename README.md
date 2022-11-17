# Merchy (E-Commerce Website) [Group EAT]

<p align="center">
<img src="https://github.com/le11evan/merchy/blob/master/src/assets/logo.png" width="250" height="250" />
 </p>

Merchy is a fully functional e-commerce react site, that allows a person to update products on commerce.js, and can commit payments using stripe. 

Our main goal with Merchy was to create a site, where artists can have their own stores to sell merchandise. 

Group Members: 
Evan Le, le11evan@csu.fullerton.edu
Aren Lizardo, arenlaure@csu.fullerton.edu
Thomas Phan, tummeito@csu.fullerton.edu

Link to live site: https://merchygroupeat.netlify.app/

<h2> 0. Shortcomings :face_with_head_bandage: </h2>

There's a few things we didn't have enough time to finish or add to your site. Here's a list:

Login Feature
- Login feature connected to a back-end database. We didn't get to fully finish our login feature and make it functional for now it is hard-coded in, and can login using email: admin@email.com and password: admin

Quiz Feature
- We wanted to requrie a quiz before entering the store page. This can maybe prevent bots and resellers.

Multiple Artist Stores.
- We also wanted to have a page, right have you login, where people can choose from various artists, and enter different individual artist's stores. 

<h2> 1. Cloning and Running App :computer: </h2>

You can download this app to your local using `git clone https://github.com/le11evan/merchy.git` command on your bash. Then open your terminal in the folder that you cloned and open your command line, use `npm install` command. This command will install all the dependencies that we used in the app. Then you can use `npm start` command to run the app on your localhost:3000.

<h2> 2. Commerce.js & Stripe :warning: </h2>

The website currently uses test API keys, so no payments are actually being processed by stripe. You can enter a test credit card by just pressing 4 and 2 repeatedly for the credit card info. We didn't need to use any database to store any information about the products, payments, carts, etc. Commerce.js basically handles it, so we don't need to pull from any back-end code.

<h2> 3. Dependencies :open_file_folder:</h2>

We used **_Material UI_**, **_Commerce.js_**, **_Stripe.js_**, **_React-Router_** and **_React-Hooks_**.
These are the commands that you can use to install these dependencies. (you can use `npm install` too.)

- `npm install @material-ui/core @material-ui/icons`
- `npm install @chec/commerce.js`
- `npm install @stripe/react-stripe-js @stripe/stripe-js`
- `npm install react-router-dom`
- `npm install react-hook-form`
