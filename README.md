# Image Gallery

This is an app that allows the user to post images with a description. It saves these images in the database and retrieves the images when requested.

This app is not deployed so it requires a few steps to set it up.

 -First: Clone this repo to your local dev environment.

 -Second: Run this line to install dependencies
```sh
npm install
```

 -Third: In the root of the repo.  Create a directory called db.
```sh
mkdir db
```

 -Fourth: Start a mongoDB server with the following line
```sh
mongod --dbpath=./db --smallfiles
```

 -Fifth: In a second terminal window start the server with this line
```sh
node server.js
```

 -Sixth: Navigate your browser to the following url.
  http://localhost:3000/

### TESTS

 -In a third terminal window run this line.
 ```sh
 mocha
 ```


