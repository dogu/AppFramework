$.mvc.controller.create("home", {
    views: { "home_tpl": "app/views/home.html" }, //These are the views we will use with the controller

    init: function () {
        //Here we can run any initializing code for this controller/
    },

    default: function () {

        //Transition to the page
        $.ui.loadContent("home_page", false, false, "slide");
        
    }
});