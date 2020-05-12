export default function generateCard(data) {
  let id = 0;
  const cards = [];

  pickRandomFromArray(data, 5).forEach((element) => {
    /* Create too cards, one with name and and image , another one with various information */
    cards.push({
      id: id++,
      page: 1,
      name: element.name,
      img: element.img,
    });
    cards.push({
      id: id++,
      page: 2,
      name: element.name,
      region: element.region,
      funFact: element.funFact,
      group: element.group,
      img: element.img,
    });
  });
  return shuffle(cards);
}

/* For picking n number of card randomly cards from an card array*/
function pickRandomFromArray(arr, n){
  /* source: https://stackoverflow.com/questions/19269545/how-to-get-n-no-elements-randomly-from-an-array */
  var shuffled = shuffle(arr);
  return shuffled.slice(0,n);
}

/* Shuffle the card so they are position in random order */
function shuffle(array) {
  let currentIndex = array.length
  let  tempValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
