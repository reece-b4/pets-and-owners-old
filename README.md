# Pets and Owners

[Express.js](http://expressjs.com/) is a web application framework for Node.js. It is designed for building web applications and APIs.

[nodemon](https://www.npmjs.com/package/nodemon) is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

Remember to `npm init` before installing these two packages, and to setup your `.gitignore` file so that you don't commit your `node_modules`!

### Tools

1. [Insomnia](https://insomnia.rest/download/) to preview your requests

### Objectives

1. Learn how to get a simple web server up and running using express
2. Learn handling simple GET requests on your server
3. Learn to read queries from the request your sever receives
4. Learn to use the body of POST/PATCH requests

## Intro

This sprint will help you get used to express as well as recap over the use of the file system module. A common architectural pattern is known as MVC where we split each type of job into three sections:

- _Model_: represents the different data in used by your application and handles the interactions with the database (in this case, we are using files to represent a database).
- _View_: is in charge of what to render/show to the user and using the data it is passed to create everything needed on the screen. For now, we are unconcerned with this.
- _Controller_: is like the manager. The controller function is a function that is designed to handle a specific task. It works with the model to handle any of the necessary changes to the data and will then collect up everything needed and will respond using the relevant view or data.

Here's a nice article to help with your understanding of this pattern:
[MVC Bar analogy](https://medium.freecodecamp.org/model-view-controller-mvc-explained-through-ordering-drinks-at-the-bar-efcba6255053)

## Tasks

Now you will need to create a new express server that will implement the following:

In this sprint, we are going to create a fully functioning server that can handle the following requests: 
- GET
- POST
- PATCH
- DELETE

All of these routes should start with `/api/` as we are creating an API. Make them restful!

Remember to use `nodemon` so that you do not have to keep manually restarting your express server!

### Day 1 - GET endpoints to implement:

1. GET: an owner using their id `/owners/:id`
2. GET: all owners `/owners` (_hint: you will need to use [fs.readdir](https://www.geeksforgeeks.org/node-js-fs-readdir-method/) to read all of the files in the owners folder_)
3. GET: all pets belonging to an owner `/owners/:id/pets`
4. GET: all pets `/pets` (this endpoint should accept a query of `is_grumpy` so that users can filter pets by temperament)
5. GET: a pet using their id `/pet/:id`

### Day 2 - PATCH, POST & DELETE endpoints to implement:

_don't forget to use `express.json()` to access the request body! & think about what the endpoint for each of the below should be_

6. PATCH: update an owners name and age

7. POST: add an owner
   - Must be the same format as the existing data (contain the same information), you should check the other owner files for this.
   - Use a timestamp for the id ([Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) might be useful), affixed with the relevant letter, "o" to avoid overwriting an existing file

8. POST: add a pet to an owner (owner must exist) - /owners/:id/pets
   - Must be the same format as the existing data (contain the same information), you should check the other owner files for this.
   - Use a timestamp for the id ([Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) might be useful), affixed with the relevant letter, "o" to avoid overwriting an existing file

9. DELETE: remove a pet from the data

10. DELETE: remove an owner (and therefore, also remove any of their pets)

## Advanced Tasks

Read about [Error Handling](http://expressjs.com/en/guide/error-handling.html).

11. Update error handing in routes to use express error handling.

12. Read about [Application level middleware](http://expressjs.com/en/guide/using-middleware.html#middleware.application).

13. Create log.txt file in the root directory and a logger middleware function that writes the following to the bottom of the log file:
   - request method
   - requested url
   - time of the request

## Super Advanced Tasks

14. Update the all pets endpoint (task 4) and allow it to accept the following queries
   - `sort_by` - user can choose to order the pets by:
     - `id` - should default to this when no query is given.
     - `age`
     - `name`
   - `order` - can accept `asc` or `desc` (defaults to `asc` when the query isn't given.)
   - `max_age` - user can choose to only bring pets younger than passed query
   - `min_age` - user can choose to only bring pets older than passed query
   - `search` - user can pass a searchTerm that will filter pets to only include those who have the searchTerm in *any* of their properties
