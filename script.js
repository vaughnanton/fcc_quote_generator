$(document).ready(function(){
  getQuote;

  var randomQuote;
  var randomNum;

  function getQuote(){

  var quotes =
  ['\"Rule #1: Never lose money. Rule #2: Never forget rule number one.\" -Warren Buffet',
    '\"You have power over your mind, not outside events. Realize this, and you will find strength.\" -Marcus Aurelius',
    '\"The best time to plant a tree was 20 years ago, the second best time is now.\" -Chinese Proverb',
  '\"Things may come to those who wait, but only the things left by those who hustle.\" -Abraham Lincoln',
  '\"Stay hungry. Stay Foolish.\" -Steve Jobs',
  '\"Whosoever is delighted in solitude is either a wilde beast or a god.\" -Aristotle'];

  randomNum = Math.floor((Math.random()*quotes.length));
  randomQuote = quotes[randomNum];

  $(".quote").text(randomQuote);
                  }

  $("#newQuote").on("click", function(){
    getQuote();
   });

  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text="+randomQuote);
  });
  });
