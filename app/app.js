var app = new $.mvc.app();

app.controllersDir("app/controllers/"); //Set the directory to the controllers.
app.modelsDir("app/models/"); //Set the directory to the models;

app.loadControllers(["home"]); //You can pass in array or a string.  You do not need to reference the .js extension.
app.loadModels([]);

//Start up the app.
app.ready(function () {
    //Remove the footer navigation bar
    $.ui.removeFooterMenu();

    //Launch app framework
    $.ui.launch();

    //Route to default location
    $.mvc.route("/home");
});