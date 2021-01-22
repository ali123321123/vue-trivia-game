import { generateId } from "../utils/idGenerator";

export function fetchQuestions() {
  return fetch("https://opentdb.com/api.php?amount=10", {
    method: "get"
  })
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json.results;
    })
    .then(questions => {
      return questions.map(question => ({
        ...question,
        id: generateId()
      }));
    });
}
