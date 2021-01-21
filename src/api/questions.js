 export function fetchQuestions(){
       return fetch('https://opentdb.com/api.php?amount=10',{
         method: 'get' 
        })
        .then((response) => {
          return response.json()
        })    
}

