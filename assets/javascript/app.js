var apiKey =  "855c119719604ba88c9af03e9c6e75f5";
var searchTerms = "trump" // change to grab user input
// Dates need to be in the format of YEARMMDD
var beginDate = "20160101" // more user input
var endDate = "20180101" //woooooooo


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': `${apiKey}`,
  'q': `${searchTerms}`,
  'begin_date': `${beginDate}`,
  'end_date': `${endDate}`,
  'page': '0'
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});