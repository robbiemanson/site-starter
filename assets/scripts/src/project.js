$(document).ready(function(){

  // Replace hard-coded .no-js class on <html> with .js if JavaScript is enabled
  document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';


  // var $container = $('.wall');
  //
  // $container.imagesLoaded( function(){
  //   $container.isotope({
  //     itemSelector: '.brick'
  //   });
  // });

  // Add random class to <html> to trigger CSS transforms
  var transform_classes = [
    'u-transform-1',
    'u-transform-2',
    'u-transform-3',
    'u-transform-4',
    'u-transform-5',
    'u-transform-6'
  ];
  var randomtransform = Math.floor(Math.random()*transform_classes.length);

  $('html').addClass(transform_classes[randomtransform]);

  // init Masonry
  var $masonry = $('.l-Masonry').masonry({
    itemSelector: '.l-Masonry-item',
    columnWidth: '.l-Masonry-sizer',
    percentPosition: true
  });

  // layout Masonry after each image loads
  $masonry.imagesLoaded().progress( function() {
    $masonry.masonry('layout');
  });



  // Add random class to <html> to use certain text gradients
//  var text_gradient_classes = [
//    'u-gradient-2',
//    'u-gradient-2',
//    'u-gradient-2'
//  ];
//  var randomgradient = Math.floor(Math.random()*text_gradient_classes.length);

//  if (sessionStorage['randomClass']) {
//    var randomClass = JSON.parse(sessionStorage['randomClass']);
//    randomtransform = randomClass.transform;
//    randomgradient = randomClass.gradient;
//  } else {
//    // Set new classes, because nothing preexisted
//    sessionStorage['randomClass'] = JSON.stringify({
//      transform: randomtransform,
//      gradient: randomgradient
//    });
//  }

//  $('html').addClass(text_gradient_classes[randomgradient]);



  //var quotes = new Array(
  //  "abuses em dashes — no really.",
  //  "didn’t eat eggs until 2014.",
  //  "thinks Comic Sans is great.",
  //  "has no affilitation with Charles.",
  //  "just can’t get into Biffy Clyro.",
  //  "knows too many film quotes.",
  //  "named his cat Zappa, after Frank.",
  //  "never actually finished university.",
  //  "never got ‘The Big Bang Theory’.",
  //  "once (almost) cycled to Belfast.",
  //  "once crushed his heel.",
  //  "once fell asleep standing up.",
  //  "only likes two Yes albums.",
  //  "rides a yellow 1980s Colnago.",
  //  "somehow makes a living doing this.",
  //  "still doesn’t draw enough.",
  //  "still hasn’t watched The Wire."
  //),
  //    randno = quotes[Math.floor( Math.random() * quotes.length )];
  //    $('.BioQuote').text( randno );

});
