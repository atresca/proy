$(document).ready(function () {
        alert("edasg");
        //event handler for submit button
        $("#btnSubmit").click(function () {
            //collect userName and password entered by users
            var username = $("#username").val();
            var password = $("#password").val();

            //call the authenticate function
            authenticate(username, password);
        });
 
 });

    //authenticate function to make ajax call
function authenticate(username, password) {
    
    
    
    $.ajax({
        type: "POST",
        //the url where you want to sent the userName and password to
        //url: "http://your-url.com/secure/authenticate.php",
        dataType: 'json',
        async: false,
        //json object to sent to the authentication url
        data: '{"username": "' + username + '", "password" : "' + password + '"}',
        success: function () {
            //do any process for successful authentication here
        }
    });
};
