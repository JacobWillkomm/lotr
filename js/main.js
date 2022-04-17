const fuzzysort = require('fuzzysort')
console.log(fuzzysort)

document.querySelector('button').addEventListener('click', searchCharacters)

let characterData = []

const headers = {
  'Accept': 'application/json',
  'Authorization': "Bearer "+ config.LOTR_API_KEY
}

function searchCharacters(){
  const choice = document.querySelector('input').value
  readTextFile("json/characters.json", function(text){
    const results = fuzzysort.go(choice, JSON.parse(text), {key:'name'})
    console.log(...results.slice(0,10))
    getFetch(results[0].target)

  })
}

function getFetch(input){
  //const choice = document.querySelector('input').value
  const url = "https://the-one-api.dev/v2/character?name="+input

  fetch(url, {headers: headers})
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('a').href = data.docs[0].wikiUrl
        document.querySelector('a').innerText = data.docs[0].name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

readTextFile("json/characters.json", function(text){
  var data = JSON.parse(text);
  characterData.push(data)
  console.log(data, characterData);
});

console.log(characterData)

