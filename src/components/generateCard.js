
export default function generateCard(data){
    let id = 0
    const cards = []
    data.forEach(element => {
        cards.push({
            id :  id++, 
            Name : element.Name, 
            img:''
        })
        cards.push({
            id : id++, 
            Name: element.Name, 
            Region :  element.Region,
            FunFact: element.FunFact,
            Group:element.Group
        })
    })
    return shuffle(cards)
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
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