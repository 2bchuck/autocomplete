# Autocomplete

Autocomplete project for the test.
Started from [angular-seed][https://github.com/angular/angular-seed]
  
## Run the Application
To get you started app need to run server as below.

```
npm start 
```

After server started browse to the app at [localhost:8000/][http://localhost:8000/]

## Directory Layout

```
    app/                    --> all of the source files for the application
        css/
            app.css             --> default stylesheet
        js/
            app.js                 --> main application module
            controllers.js      --> controller for app
            data.json            --> mock data json
            directives.js        --> all directives for the app
            services.js           --> api service for mock data
        partials/          --> templates for directives
            autocompleteSearch.html         --> template for autocompleteSearch directive
            restaurantSearch.html               --> template for restaurantSearch directive
            restaurantsList.html                   --> template for restaurantsList directive
    index.html         --> app layout file (the main html template file of the app)
```