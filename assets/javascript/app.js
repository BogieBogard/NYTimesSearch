var apiKey =  "855c119719604ba88c9af03e9c6e75f5";
var searchTerms = "trump" // change to grab user input
var beginDate = "2016" // more user input
var endDate = "2018" //woooooooo


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': `${apiKey}`,
  'q': `${searchTerms}`,
  'begin_date': `${beignDate}`,
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