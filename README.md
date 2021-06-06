# RANDOSTORE Simple React JS E-Commerce Project 

## What is the use of this Repo

This Project is a Simple ReactJS Project which demonstrates the following
1. Creating a Component in React
2. Making HTTP calls
3. Communicating between parent and child component
4. Using Bootstrap along with React
5. Using Basic Routing in React

The project Template can be used to build bigger projects

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local

Clone the project into local

## Install npm dependencies for node server
Install all the npm packages. Go into the root of the project folder and type the following command to install all npm packages

```bash
npm install
```
## Install npm dependencies for react frontend
Install all the npm packages. Go into the client folder and inside type the following command to install all npm packages

```bash
npm install
```
# Run node server
In order to run the node server Type the following command from the root of the project

```bash
npm start
```
# Run react app
In order to run the react app Type the following command from the root of the client directory

```bash
npm start
```
# Node server
The Application Runs on **localhost:5000**

# React App
The Application Runs on **localhost:3000**

## React Application design

#### Components

1. **HomePage** Component : This Component renders child component ProductList. This Component gets the data from node server.

2. **ProductList** Component : This Component Displays list products coming from backend. This Component is the Child Component of *HomePage* Component

3. **Header** Component: This Component contains all the Navigation tabs which redirects to the related pages.

4. **Footer** Component: This Component contains footer of the application.

5. **AddProduct** Component: This Component lets the user to Add an item/product for sale.

6. **Checkout** Component: This Component contains all the items/products user added to his/her shopping cart(stores in browser localstorage).

7. **SearchItems** Component: This Component finds items that is being searched by the user and displays them if found otherwise shows unmatched message.

#### HTTP client

**axios** library is used to make HTTP Calls

#### URL

The application has just the following urls:
i. / --> **HomePage** which renders list of available products.
ii. /sale-items --> **AddProduct** which renders a form of 2 input fields for name and price of the product.
iii. /checkout --> **Checkout** which renders cart items.
iv. /search-items --> **SearchItems** which renders search items.

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap

REST API
--------
The Items JSON REST API is exposed at `http://localhost:3000/items`

On server start, item data is read into memory from init_data.json. All subsequent actions are done against this memory store. Stopping and starting the server will re-initialize data from `init_data.json`.

API Endpoints:
```
/items/
- HTTP GET: returns array of all items
- HTTP POST: creates a new item, returns the created item data
/items/:id
- HTTP GET: returns the item with given id (numeric, auto-incrementing). HTTP 404 if item not found
- HTTP DELETE: removes the items with given id, returns nothing (HTTP 204)
```
Here is an example of results returned from HTTP GET on /items:
```
[{"id":1,"name":"King Size Bed","price":"300","img":"./img/bed.jpg"},
{"id":2,"name":"Comfy Slippers","price":"15","img":"./img/slippers.jpg"},
{"id":3,"name":"CD Rack","price":"100","img":"./img/rack.jpg"},
{"id":4,"name":"Glow Stick Bundle","price":"10","img":"./img/sticks.jpg"},
{"id":5,"name":"Cookie Jar","price":"25","img":"./img/cookies.jpg"}]
```
