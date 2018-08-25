// Edit to suit your needs.
var ADAPT_CONFIG = {
  // Where is your CSS?
  path: '/css/',

  // false = Only run once, when page first loads.
  // true = Change on window resize and page tilt.
  dynamic: true,

  // Optional callback... myCallback(i, width)
  //callback: myCallback,

  // First range entry is the minimum.
  // Last range entry is the maximum.
  // Separate ranges by "to" keyword.
  range: [
    '0px    to 768px  = mobile.css',
    '768px  to 980px  = 720.css',
    '980px   = 960.css',
  ]
};
