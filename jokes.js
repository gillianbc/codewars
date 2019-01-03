
function sayJoke(apiUrl, jokeId) {
    //FETCH THE JOKES
        return fetch(apiUrl)
    .then(response =>
    //CONVERT TO JSON
        response.json()
    )
    .then(json => {
        //FIND THE REQUIRED JOKE
        for (let joke of json.jokes) {
            if (joke.id === jokeId) {
                //RETURN AN OBJECT WITH TWO FUNCTIONS OF THE JOKE
                return 
                //What is this underscore malarkey?
                {saySetup: _ => joke.setup, 
                sayPunchLine: _ => joke.punchLine
                };
            }
        }
        throw new Error(`No jokes found id: ${jokeId}`);
    }).catch(error => {
        throw (error instanceof TypeError)? new Error(`No jokes at url: ${apiUrl}`) : error
    });
}

// ALTERNATIVE
async function sayJoke2(apiUrl, jokeId) {    
    const response = await fetch(apiUrl)
    const jsonResponse = await response.json()
    
    if (!jsonResponse.hasOwnProperty('jokes')) {
      throw new Error(`No jokes at url: ${apiUrl}`)
    }
    
    const joke = jsonResponse.jokes.find(function(joke) {
      return joke.id === jokeId
    })
    
    if (!joke) {
      throw new Error(`No jokes found id: ${jokeId}`)
    }
    
    return {
      saySetup: () => joke.setup,
      sayPunchLine: () => joke.punchLine,
    }
  }