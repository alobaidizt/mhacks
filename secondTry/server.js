var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var webshot = require('webshot');

app.get('/scrape', function(req, res){
    
    url = 'https://www.fbo.gov/';

    request(url, function(error, response, html){
        if(!error){
        console.log("1")
            var $ = cheerio.load(html);
        console.log("2")

            var title, release, postedDate;
            var json = { title : "", release : "", postedDate : ""};
        console.log("3")

            $('#qs-posted').val('365');
            //$('#qs-posted').filter(function(){
                    //console.log("4")
                    //debugger
                    //var data = $(this).val();
                    //postedDate = data;

                    //json.postedDate = postedDate;
                //})
            }
            else { 
              console.log('fail!');
            }
            webshot('google.com', 'rs1.png', function(err) {});

            //console.log(json);

            // To write to the system we will use the built in 'fs' library.
            // In this example we will pass 3 parameters to the writeFile function
            // Parameter 1 :  output.json - this is what the created filename will be called
            // Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
            // Parameter 3 :  callback function - a callback function to let us know the status of our function

            fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

                console.log('File successfully written! - Check your project directory for the output.json file');

            })

            // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
            res.send('Check your console!')
    })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;
