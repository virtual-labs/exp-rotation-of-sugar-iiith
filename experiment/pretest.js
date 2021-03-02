/////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1. How does polarized light differ from the ordinary light? ", ///// Write the question inside double quotes
            answers: {
                a: "Polarized light have vibrations in single plane where as ordinary light have vibrations in more than one plane .", ///// Write the option 1 inside double quotes
                b: "Polarized light have vibrations in more than one plane where as ordinary light have vibrations in single plane ", ///// Write the option 2 inside double quotes
		c: "Polarized light and ordinary light wave have opposite vibrations in the space. ", ///// Write the option 2 inside double quotes
		d: "Polarized light have vibrations at 90o to the ordinary light wave vibrations. ", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
     },

	    question: "2. What do you understand by polarized light and the plane of polarization? ", ///// Write the question inside double quotes
            answers: {
                a: "Polarized light wave vibrations confined to single plane and plane of polarization is the plane in which the vector along which the light wave vibrates lies.", ///// Write the option 1 inside double quotes
                b: "Polarized light wave vibrations confined to more than one plane and plane of polarization is the plane in which the vector along which the light wave vibrates lies. ", ///// Write the option 2 inside double quotes
		c: "Polarized light wave vibrations confined to more than one plane and plane of polarization is the plane at right angle to the vector along which the light wave vibrates lies. ", ///// Write the option 2 inside double quotes
		d: "Polarized light wave vibrations confined to single plane and plane of polarization is the plane at right angle to the vector along which the light wave vibrates lies ", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
			 },


	   question: "3. What are the factors on which the optical activity of a substance depends?  ", ///// Write the question inside double quotes
            answers: {
                a: "Temperature, wavelength of light used, concentration of the substance.", ///// Write the option 1 inside double quotes
                b: "Temperature, wavelength of light used, concentration of substance and length of polarimeter tube. ", ///// Write the option 2 inside double quotes
		c: "Wavelength of light used and concentration of substance.", ///// Write the option 2 inside double quotes
		d: "Temperature, wavelength of light used, and length of polarimeter tube. ", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },


          question: "4. How does the optical activity depend on the state of the substance? ", ///// Write the question inside double quotes
            answers: {
                a: "If the compound is present in (+) form, it rotates plane polarized light in anticlockwise direction and if it is present in (-) form, it rotates plane polarized light in clockwise direction with equal magnitude.", ///// Write the option 1 inside double quotes
                b: "If the compound is present in (+) form it rotates plane polarized light in clockwise direction and if it is present in (-) form, it rotates plane polarized light in anticlockwise direction with different magnitude. ", ///// Write the option 2 inside double quotes
		c: "If the compound is present in (+) form it rotates plane polarized light in clockwise direction and if it is present in (-) form, it rotates plane polarized light in anticlockwise direction with same magnitude. ", ///// Write the option 2 inside double quotes
		d: "Both rotates the plane polarized light in same direction with equal magnitude. ", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

         question: "5. Given that (R)-2-bromobutane has a specific rotation of -23.1o ,what is the specific rotation of (S)-2-bromobutane?  ", ///// Write the question inside double quotes
            answers: {
                a: "+20.1o.", ///// Write the option 1 inside double quotes
                b: "+26.1o. ", ///// Write the option 2 inside double quotes
		c: "+23.1o. ", ///// Write the option 2 inside double quotes
		d: "+29.1o. ", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },  

        question: "6.  Which isomer is dominant in a mixture of (R)- and (S)-2-bromobutane whose specific rotation was found to be -9.2o ? ", ///// Write the question inside double quotes
            answers: {
                a: "Both R and S enantiomers are found in equal proportions.", ///// Write the option 1 inside double quotes
                b: "The negative sign indicates that the R enantiomer is the dominant one. ", ///// Write the option 2 inside double quotes
		c: "The negative sign indicates that the S enantiomer is the dominant one. ", ///// Write the option 2 inside double quotes
		d: "None of the above options are correct. ", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },


     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
