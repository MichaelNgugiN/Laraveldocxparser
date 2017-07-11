var parser = require('mammoth');
var cheerio = require('cheerio'),
cheerioTableparser = require('cheerio-tableparser');
var fs = require('fs');


var html = process.argv[2];
var data = [];
//
//
//  $ = cheerio.load(html);
//
//  $('table').each(function(i, elem) {
//
//      data[i] = $(this).find('tr p strong').text();
//
//  });
//
//  console.log(data);

var contents = fs.readFileSync(html, 'utf8');
$ = cheerio.load(contents);
//cheerioTableparser($);

//var data = $("table").parsetable(true, true, true);
 // $('table').find('tr td p strong').each(function(i, elem) {
 //     data[i] = $(this).text();
 // });
 var dt = [];
 var count = 0;
 $('table').each(function(i, elem) {
     data[i] = $(this).html();

if(i == 1){

     $('tbody').find('tr p strong').each(function(j, elem) {
     dt[j] = $(this).text();
      });
}
 });

 console.log(data[1]);
