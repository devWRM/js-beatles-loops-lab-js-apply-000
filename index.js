// add solution here
// FIRST challenge function theBeatlesPlay

var musicians = [
	"John",
	"Paul",
	"Ringo",
	"George"
];

var instruments = [
	"drums",
	"sax",
	"harp",
	"guitar"
];

function theBeatlesPlay(musicians, instruments) {
  var blurb = [];
  for (var i = 0; i < musicians.length; i++) {
    blurb[i] = musicians[i] + " plays " + instruments[i];
  }
  return blurb;
}

var blurb = theBeatlesPlay(musicians, instruments);


// SECOND challenge function johnLennonFacts



