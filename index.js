var fact = [
  "Kitsunes, japanese foxes,  can have up to nine tails, depending on its age, wisdom and power.",
  "Raven, in Native American Mythology, is known as the trickster god.",
  "Amamertsu is the Japanese sun goddess, twin to a butt.",
  "There are three filipino goddesses of the star, moon and sky.",
  "reeses",
  "swedish fish"
];

var b = $('button')
var p = $('p')

b.on("click", doSomething)

function doSomething() {
  var random = Math.random() * fact.length;
  var round = Math.floor(random);
  var factdisplay = fact[round];
  p.html(factdisplay)
}
