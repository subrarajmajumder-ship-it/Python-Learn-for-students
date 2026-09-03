// ===============================
// PYTHONLEARN - SCRIPT.JS
// ===============================


// ===============================
// PROGRESS SYSTEM
// ===============================

let completedLessons = 0;
let completed = [];

function updateProgress() {

    const progressText =
        document.querySelector("#progressText");

    const progressFill =
        document.querySelector("#progressFill");

    const completionMessage =
        document.querySelector("#completionMessage");

    if (progressText) {
        progressText.textContent =
            completedLessons + " / 6 Lessons Completed";
    }

    if (progressFill) {

        const percentage =
            (completedLessons / 6) * 100;

        progressFill.style.width =
            percentage + "%";
    }

    if (completionMessage) {

        if (completedLessons === 6) {

            completionMessage.textContent =
                "🎉 Course Completed!";

        } else {

            completionMessage.textContent = "";
        }
    }
}


function completeLesson(number) {

    if (!completed.includes(number)) {

        completed.push(number);

        completedLessons++;

        updateProgress();
    }
}


// ===============================
// START BUTTON
// ===============================

const startButton =
    document.querySelector("#startButton");

const message =
    document.querySelector("#message");

if (startButton && message) {

    startButton.addEventListener("click", function() {

        message.textContent =
            "Welcome to Python Learning! 🐍";

    });
}


// ===============================
// LESSON 1
// ===============================

function openLesson1() {

    document.querySelector(".lessons").style.display =
        "none";

    document.querySelector("#lesson1").style.display =
        "block";

    document.querySelector("#quizResult").textContent =
        "";
}


function closeLesson1() {

    completeLesson(1);

    document.querySelector("#lesson1").style.display =
        "none";

    document.querySelector(".lessons").style.display =
        "block";
}


function checkAnswer(answer) {

    const result =
        document.querySelector("#quizResult");

    if (answer === "A") {

        result.textContent =
            "✅ Correct! Python is a programming language. 🎉";

    } else {

        result.textContent =
            "❌ Wrong answer! Try again. 🐍";
    }
}


// ===============================
// LESSON 2
// ===============================

function openLesson2() {

    document.querySelector(".lessons").style.display =
        "none";

    document.querySelector("#lesson2").style.display =
        "block";

    document.querySelector("#variableQuizResult").textContent =
        "";
}


function closeLesson2() {

    completeLesson(2);

    document.querySelector("#lesson2").style.display =
        "none";

    document.querySelector(".lessons").style.display =
        "block";
}


function checkVariableAnswer(answer) {

    const result =
        document.querySelector("#variableQuizResult");

    if (answer === "A") {

        result.textContent =
            "✅ Correct! The = symbol assigns a value to a variable. 🎉";

    } else {

        result.textContent =
            "❌ Wrong answer! Try again. 🐍";
    }
}


// ===============================
// LESSON 3
// ===============================

function openLesson3() {

    document.querySelector(".lessons").style.display =
        "none";

    document.querySelector("#lesson3").style.display =
        "block";

    document.querySelector("#nameInput").value =
        "";

    document.querySelector("#nameOutput").textContent =
        "";

    document.querySelector("#inputQuizResult").textContent =
        "";
}


function closeLesson3() {

    completeLesson(3);

    document.querySelector("#lesson3").style.display =
        "none";

    document.querySelector(".lessons").style.display =
        "block";
}


function showName() {

    const name =
        document.querySelector("#nameInput").value;

    const output =
        document.querySelector("#nameOutput");

    if (name.trim() === "") {

        output.textContent =
            "⚠️ Please enter your name!";

    } else {

        output.textContent =
            "Hello " + name + "! 🐍";
    }
}


function checkInputAnswer(answer) {

    const result =
        document.querySelector("#inputQuizResult");

    if (answer === "B") {

        result.textContent =
            "✅ Correct! input() takes information from the user. 🎉";

    } else {

        result.textContent =
            "❌ Wrong answer! Try again. 🐍";
    }
}


// ===============================
// LESSON 4
// ===============================

function openLesson4() {

    document.querySelector(".lessons").style.display =
        "none";

    document.querySelector("#lesson4").style.display =
        "block";

    document.querySelector("#ageInput").value =
        "";

    document.querySelector("#ageOutput").textContent =
        "";

    document.querySelector("#ifQuizResult").textContent =
        "";
}


function closeLesson4() {

    completeLesson(4);

    document.querySelector("#lesson4").style.display =
        "none";

    document.querySelector(".lessons").style.display =
        "block";
}


function checkAge() {

    const age =
        Number(document.querySelector("#ageInput").value);

    const output =
        document.querySelector("#ageOutput");

    if (age >= 18) {

        output.textContent =
            "✅ You can vote.";

    } else if (age >= 0) {

        output.textContent =
            "❌ You cannot vote yet.";

    } else {

        output.textContent =
            "⚠️ Please enter a valid age.";
    }
}


function checkIfAnswer(answer) {

    const result =
        document.querySelector("#ifQuizResult");

    if (answer === "B") {

        result.textContent =
            "✅ Correct! 'else' runs when the condition is false. 🎉";

    } else {

        result.textContent =
            "❌ Wrong answer! Try again. 🐍";
    }
}


// ===============================
// LESSON 5
// ===============================

function openLesson5() {

    document.querySelector(".lessons").style.display =
        "none";

    document.querySelector("#lesson5").style.display =
        "block";

    document.querySelector("#loopInput").value =
        "";

    document.querySelector("#loopOutput").textContent =
        "";

    document.querySelector("#loopQuizResult").textContent =
        "";
}


function closeLesson5() {

    completeLesson(5);

    document.querySelector("#lesson5").style.display =
        "none";

    document.querySelector(".lessons").style.display =
        "block";
}


function runLoop() {

    const number =
        Number(document.querySelector("#loopInput").value);

    const output =
        document.querySelector("#loopOutput");

    if (number < 1 || number > 20) {

        output.textContent =
            "⚠️ Enter a number from 1 to 20.";

        return;
    }

    let result = "";

    for (let i = 1; i <= number; i++) {

        result +=
            "Hello Python! " + i + "\n";
    }

    output.textContent =
        result;
}


function checkLoopAnswer(answer) {

    const result =
        document.querySelector("#loopQuizResult");

    if (answer === "B") {

        result.textContent =
            "✅ Correct! 'for' is used to create a for loop. 🎉";

    } else {

        result.textContent =
            "❌ Wrong answer! Try again. 🐍";
    }
}


// ===============================
// LESSON 6 - LISTS
// ===============================

function openLesson6() {

    document.querySelector(".lessons").style.display =
        "none";

    document.querySelector("#lesson6").style.display =
        "block";

    document.querySelector("#fruitInput").value =
        "";

    document.querySelector("#fruitOutput").textContent =
        "";

    document.querySelector("#listQuizResult").textContent =
        "";
}


function closeLesson6() {

    completeLesson(6);

    document.querySelector("#lesson6").style.display =
        "none";

    document.querySelector(".lessons").style.display =
        "block";
}


function addFruit() {

    const fruit =
        document.querySelector("#fruitInput").value;

    const output =
        document.querySelector("#fruitOutput");

    if (fruit.trim() === "") {

        output.textContent =
            "⚠️ Please enter a fruit!";

    } else {

        output.textContent =
            "✅ " + fruit + " added to your list! 🍎";
    }
}


function checkListAnswer(answer) {

    const result =
        document.querySelector("#listQuizResult");

    if (answer === "B") {

        result.textContent =
            "✅ Correct! append() adds an item to a list. 🎉";

    } else {

        result.textContent =
            "❌ Wrong answer! Try again. 🐍";
    }
}


// ===============================
// INITIALIZE PROGRESS
// ===============================

updateProgress();
