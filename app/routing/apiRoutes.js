var path = require("path");
var bodyParser = require("body-parser");
var friends = require("../data/friends");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newfriend = req.body;

        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newfriend.name = newfriend.name
        //.replace(/\s+/g, "").toLowerCase();
        newfriend.photo = newfriend.photo
        //.replace(/\s+/g, "").toLowerCase();
        newfriend.score = newfriend.score
        //.replace(/\s+/g, "");

        console.log(newfriend);
        friends.push(newfriend);
        res.json(newfriend);
        var totalresult = 0;

        for (var i = 0; i < friends.length - 1; i++) {
            var totaldif_i = 0;
            var newlow = 0;
            for (var x = 0; x < 11 - 1; x++) {
                var result = Math.abs(parseInt(newfriend.score[x]) - parseInt(friends[i].score[x]));

                totalresult = totalresult + parseInt(result);
            }

            console.log(" the total differnt " + i + " is: " + totalresult);

            if ((totalresult - newlow) >= 0) {
             newlow = totalresult;
                console.log(newlow);
            }
            
            var totalresult = 0;
        }

    });
}


