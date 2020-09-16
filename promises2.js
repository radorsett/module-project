// fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
//   .then(res => res.json())
//   .then(json => console.log(json))



fetch('https://swapi.co/api/people/<number here>')
  .then(res => res.json())
  .then(json => console.log(json))