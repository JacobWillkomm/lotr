//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


const headers = {
  'Accept': 'application/json',
  'Authorization': "Bearer "+ config.LOTR_API_KEY
}

function getFetch(){
  const choice = document.querySelector('input').value
  const url = "https://the-one-api.dev/v2/character?name="+choice

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

