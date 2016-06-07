var path = require('path');
var request = require('request');
var cheerio = require('cheerio');

var link = "http://www.ign.com/";

module.exports = function(app) {
	
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});
	app.get('/read', function(req, res) {
		request(link, function(error, response, html) {
    		//console.log(html);
    		var $ = cheerio.load(html);
    		var result = [];
		    $('div.listElmnt  ').each(function(i, element) {
		        var title = $(this).text();
		        result.push({
		            title: title
		        })
		    })
		    res.send(result);
    	});
	});
	app.post('/enter', function(req, res) {
		
	});
}