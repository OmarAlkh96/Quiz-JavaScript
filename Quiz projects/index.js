//now we select the form that contains the questions and add event listener to capture the answers of the questions chosen 
const form = document.querySelector(".quiz-form")
const result = document.querySelector(".result")
const questions = document.querySelectorAll(".question"); 
console.log(questions);
console.log(result);
form.addEventListener('submit', event => {

event.preventDefault()
const correctAnswers = ["A","B","C","D","A"];


const userAnswers =[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
let score = 0; 
userAnswers.forEach((answer,index) => {
if ( answer === correctAnswers[index])
{ score = score + 1;
    
    questions[index].classList.add("correct")
} else {
    questions[index].classList.add("wrong")
}
})

console.log(score);
result.classList.remove('hide');
scrollTo(0, 0); // scrolls the screen to the top to look at the result
result.children[0].innerText = "Your score is "+ score +" out of 5" //you could also choose the p tag by result.querySelector('p').textContent = `Your score is ${score}/5`
}

);
//the dash line consoled will be shown briefly and then disappears to solve this you have to prevent the default settings 

// now go back into that event and console log the answers submitted in the form instead of the gibberish "----"
// after hitting submit you need to show the result, 
// so as of right now the result is hidden as per the HTML file, on hitting submit that hide functionality needs to be removed in order for the rsult to show and that means selecting the result class
// note how the class can be selected without typing "hide" in the query selector
// -------now that the score updates we also need to add green or red background color after submitting 
