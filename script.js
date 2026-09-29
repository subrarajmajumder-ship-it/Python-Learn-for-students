/* =====================================================
   PythonLearn 3.3
   COMPLETE SCRIPT.JS
   ===================================================== */


/* =====================================================
   LESSON DATA
   ===================================================== */

const lessons = [

  {
    title: "Python Basics",
    desc: "Learn Python and write your first program.",

    content: `
      <h3>🐍 What is Python?</h3>

      <p>
        Python is a beginner-friendly programming language.
        You can use it to create websites, apps, automation,
        games and many other projects.
      </p>

      <h3>Your First Python Program</h3>

      <pre><code>print("Hello, Python!")</code></pre>

      <p>
        The <b>print()</b> function displays something on the screen.
      </p>

      <ul>
        <li>Python is easy to read.</li>
        <li>Python uses indentation.</li>
        <li>Text is written inside quotes.</li>
      </ul>
    `
  },


  {
    title: "Variables & Data Types",
    desc: "Learn how Python stores different types of data.",

    content: `
      <h3>📦 Variables</h3>

      <p>
        A variable is a name used to store data.
      </p>

      <pre><code>name = "Alex"
age = 16
height = 5.6
is_student = True</code></pre>

      <h3>Common Data Types</h3>

      <ul>
        <li><b>str</b> → Text</li>
        <li><b>int</b> → Whole number</li>
        <li><b>float</b> → Decimal number</li>
        <li><b>bool</b> → True or False</li>
      </ul>
    `
  },


  {
    title: "Input & Type Conversion",
    desc: "Take input from the user and convert values.",

    content: `
      <h3>⌨️ Taking Input</h3>

      <pre><code>name = input("Enter your name: ")

print("Hello", name)</code></pre>

      <h3>Type Conversion</h3>

      <pre><code>age = int(input("Enter your age: "))

print(age)</code></pre>

      <p>
        <b>input()</b> normally gives you text.
        Use <b>int()</b> or <b>float()</b> when you need numbers.
      </p>
    `
  },


  {
    title: "If / Else",
    desc: "Make decisions in your Python programs.",

    content: `
      <h3>🤔 Conditions</h3>

      <pre><code>age = 16

if age >= 18:
    print("Adult")
else:
    print("Under 18")</code></pre>

      <p>
        Python uses indentation to define the code inside
        an if or else block.
      </p>

      <h3>Comparison Operators</h3>

      <ul>
        <li>&gt; Greater than</li>
        <li>&lt; Less than</li>
        <li>== Equal to</li>
        <li>!= Not equal</li>
        <li>&gt;= Greater than or equal</li>
        <li>&lt;= Less than or equal</li>
      </ul>
    `
  },


  {
    title: "Loops",
    desc: "Repeat code using for and while loops.",

    content: `
      <h3>🔁 For Loop</h3>

      <pre><code>for i in range(5):
    print(i)</code></pre>

      <p>
        This prints numbers from 0 to 4.
      </p>

      <h3>While Loop</h3>

      <pre><code>x = 0

while x < 3:
    print(x)
    x += 1</code></pre>
    `
  },


  {
    title: "Lists",
    desc: "Store multiple values inside one collection.",

    content: `
      <h3>📋 Python Lists</h3>

      <pre><code>fruits = [
    "apple",
    "banana",
    "mango"
]

print(fruits[0])</code></pre>

      <h3>Add an Item</h3>

      <pre><code>fruits.append("orange")

print(fruits)</code></pre>

      <p>
        Python list indexes start from <b>0</b>.
      </p>
    `
  },


  {
    title: "Strings",
    desc: "Work with text using useful string methods.",

    content: `
      <h3>🔤 Strings</h3>

      <pre><code>name = "python"

print(name.upper())
print(name.lower())
print(name.capitalize())</code></pre>

      <h3>String Length</h3>

      <pre><code>word = "Python"

print(len(word))</code></pre>

      <p>
        <b>len()</b> tells you how many characters are in a string.
      </p>
    `
  },


  {
    title: "Functions",
    desc: "Create reusable blocks of Python code.",

    content: `
      <h3>⚙️ Functions</h3>

      <pre><code>def greet(name):
    print("Hello", name)

greet("Alex")</code></pre>

      <p>
        Functions help you reuse code instead of writing
        the same code again and again.
      </p>

      <h3>Return</h3>

      <pre><code>def add(a, b):
    return a + b

result = add(5, 3)

print(result)</code></pre>
    `
  },


  {
    title: "Dictionaries & Sets",
    desc: "Learn two useful Python collections.",

    content: `
      <h3>📖 Dictionary</h3>

      <pre><code>student = {
    "name": "Alex",
    "age": 16
}

print(student["name"])</code></pre>

      <h3>Set</h3>

      <pre><code>numbers = {1, 2, 3, 3}

print(numbers)</code></pre>

      <p>
        Sets automatically remove duplicate values.
      </p>
    `
  },


  {
    title: "Mini Project",
    desc: "Combine your Python skills into a small project.",

    content: `
      <h3>🎓 Student Result Project</h3>

      <pre><code>name = input("Enter name: ")

marks = int(
    input("Enter marks: ")
)

if marks >= 40:
    print(name, "passed!")
else:
    print(name, "needs more practice.")</code></pre>

      <p>
        Try changing this project by adding more subjects,
        grades and different conditions.
      </p>
    `
  }

];


/* =====================================================
   QUIZ DATA
   ===================================================== */

const quizzes = [

  {
    q: "Which function displays text in Python?",

    options: [
      "input()",
      "print()",
      "show()",
      "write()"
    ],

    answer: 1
  },


  {
    q: "Which type stores whole numbers?",

    options: [
      "str",
      "float",
      "int",
      "bool"
    ],

    answer: 2
  },


  {
    q: "Which symbol starts a Python comment?",

    options: [
      "//",
      "#",
      "<!--",
      "**"
    ],

    answer: 1
  },


  {
    q: "What does len() return?",

    options: [
      "The length",
      "A random number",
      "The data type",
      "Nothing"
    ],

    answer: 0
  },


  {
    q: "Which collection uses square brackets?",

    options: [
      "Tuple",
      "Set",
      "List",
      "Dictionary"
    ],

    answer: 2
  }

];


/* =====================================================
   PROJECT DATA
   ===================================================== */

const projects = [

  {
    title: "🧮 Simple Calculator",

    description:
      "Create a calculator using input(), numbers and operators.",

    code:
`a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print("Sum:", a + b)
print("Difference:", a - b)
print("Product:", a * b)`
  },


  {
    title: "🎓 Student Result",

    description:
      "Enter marks and check whether a student passed.",

    code:
`name = input("Enter your name: ")
marks = int(input("Enter marks: "))

if marks >= 40:
    print(name, "Passed!")
else:
    print(name, "Needs more practice.")`
  },


  {
    title: "📝 To-Do List",

    description:
      "Create a simple list of tasks.",

    code:
`tasks = []

tasks.append("Study Python")
tasks.append("Practice coding")
tasks.append("Build project")

print(tasks)`
  },


  {
    title: "🔐 Password Checker",

    description:
      "Practice strings and if/else conditions.",

    code:
`password = input("Enter password: ")

if password == "python123":
    print("Correct password")
else:
    print("Wrong password")`
  },


  {
    title: "📊 Number Analyzer",

    description:
      "Use numbers and calculations to analyze values.",

    code:
`numbers = [10, 20, 30, 40, 50]

total = sum(numbers)

print("Total:", total)
print("Average:", total / len(numbers))`
  }

];


/* =====================================================
   APP STATE
   ===================================================== */

let completedLessons = [];

let xp = 0;

let currentLesson = 0;

let quizIndex = 0;

let quizScore = 0;


/* =====================================================
   SAFE ELEMENT HELPER
   ===================================================== */

function getElement(id) {
  return document.getElementById(id);
}


/* =====================================================
   LOAD SAVED DATA
   ===================================================== */

function loadSavedData() {

  try {

    const savedLessons =
      localStorage.getItem("pythonlearn_completed");

    if (savedLessons) {

      completedLessons =
        JSON.parse(savedLessons);

      if (!Array.isArray(completedLessons)) {
        completedLessons = [];
      }

    }

  } catch (error) {

    completedLessons = [];

  }


  const savedXP =
    localStorage.getItem("pythonlearn_xp");

  if (savedXP !== null) {

    xp = Number(savedXP);

    if (isNaN(xp)) {
      xp = 0;
    }

  }


  const savedTheme =
    localStorage.getItem("pythonlearn_theme");

  if (savedTheme === "dark") {

    document.body.classList.add("dark");

  }

}


/* =====================================================
   SAVE DATA
   ===================================================== */

function saveData() {

  localStorage.setItem(
    "pythonlearn_completed",
    JSON.stringify(completedLessons)
  );

  localStorage.setItem(
    "pythonlearn_xp",
    String(xp)
  );

}


/* =====================================================
   PAGE NAVIGATION
   ===================================================== */

function showPage(pageId) {

  const pages =
    document.querySelectorAll(".page");

  pages.forEach(function(page) {

    page.classList.remove("active");

  });


  const selectedPage =
    getElement(pageId);

  if (!selectedPage) {
    return;
  }


  selectedPage.classList.add("active");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =====================================================
   HOME
   ===================================================== */

function showHome() {

  showPage("homePage");

}


/* =====================================================
   DASHBOARD
   ===================================================== */

function showDashboard() {

  updateDashboard();

  renderLessons(lessons);

  const search =
    getElement("searchInput");

  if (search) {
    search.value = "";
  }

  showPage("dashboardPage");

}


/* =====================================================
   UPDATE DASHBOARD
   ===================================================== */

function updateDashboard() {

  const lessonCount =
    getElement("lessonCount");

  const xpCount =
    getElement("xpCount");

  const levelCount =
    getElement("levelCount");

  const progressText =
    getElement("progressText");

  const progressFill =
    getElement("progressFill");


  const total =
    lessons.length;

  const completed =
    completedLessons.length;


  if (lessonCount) {

    lessonCount.textContent =
      completed + " / " + total;

  }


  if (xpCount) {

    xpCount.textContent =
      xp + " XP";

  }


  const level =
    Math.max(
      1,
      Math.floor(xp / 100) + 1
    );


  if (levelCount) {

    levelCount.textContent =
      "Level " + level;

  }


  if (progressText) {

    progressText.textContent =
      completed +
      " / " +
      total +
      " Lessons Completed";

  }


  if (progressFill) {

    const percent =
      total === 0
        ? 0
        : (completed / total) * 100;

    progressFill.style.width =
      percent + "%";

  }

}


/* =====================================================
   RENDER LESSONS
   ===================================================== */

function renderLessons(list) {

  const container =
    getElement("lessonList");

  if (!container) {
    return;
  }


  if (!list || list.length === 0) {

    container.innerHTML = "";

    return;

  }


  let html = "";


  list.forEach(function(lesson) {

    const index =
      lessons.indexOf(lesson);

    const completed =
      completedLessons.includes(index);


    html += `

      <article class="lesson-card">

        <span class="tag">

          LESSON ${index + 1}

          ${completed ? " ✓ COMPLETED" : ""}

        </span>


        <h3>
          ${lesson.title}
        </h3>


        <p>
          ${lesson.desc}
        </p>


        <button
          class="primary-btn"
          onclick="openLesson(${index})">

          ${completed
            ? "Review Lesson"
            : "Learn Lesson"}

        </button>

      </article>

    `;

  });


  container.innerHTML = html;

}


/* =====================================================
   SEARCH LESSONS
   ===================================================== */

function searchLessons() {

  const input =
    getElement("searchInput");

  if (!input) {
    return;
  }


  const query =
    input.value
      .toLowerCase()
      .trim();


  if (query === "") {

    renderLessons(lessons);

    return;

  }


  const filtered =
    lessons.filter(function(lesson) {

      return (
        lesson.title
          .toLowerCase()
          .includes(query)

        ||

        lesson.desc
          .toLowerCase()
          .includes(query)
      );

    });


  renderLessons(filtered);

}


/* =====================================================
   OPEN LESSON
   ===================================================== */

function openLesson(index) {

  if (
    index < 0 ||
    index >= lessons.length
  ) {

    return;

  }


  currentLesson = index;


  const lesson =
    lessons[index];


  const number =
    getElement("detailNumber");

  const title =
    getElement("detailTitle");

  const description =
    getElement("detailDescription");

  const content =
    getElement("detailContent");

  const completeButton =
    getElement("completeBtn");


  if (number) {

    number.textContent =
      "LESSON " + (index + 1);

  }


  if (title) {

    title.textContent =
      lesson.title;

  }


  if (description) {

    description.textContent =
      lesson.desc;

  }


  if (content) {

    content.innerHTML =
      lesson.content;

  }


  if (completeButton) {

    if (
      completedLessons.includes(index)
    ) {

      completeButton.textContent =
        "Completed ✓";

    } else {

      completeButton.textContent =
        "Complete Lesson ✓";

    }

  }


  showPage("lessonPage");

}


/* =====================================================
   COMPLETE LESSON
   ===================================================== */

function completeCurrentLesson() {

  if (
    completedLessons.includes(
      currentLesson
    )
  ) {

    return;

  }


  completedLessons.push(
    currentLesson
  );


  completedLessons.sort(
    function(a, b) {
      return a - b;
    }
  );


  xp += 20;


  saveData();


  const button =
    getElement("completeBtn");

  if (button) {

    button.textContent =
      "Completed ✓";

  }


  updateDashboard();


  setTimeout(function() {

    alert(
      "🎉 Lesson Completed!\n\n+20 XP"
    );

  }, 50);

}


/* =====================================================
   NEXT LESSON
   ===================================================== */

function nextLesson() {

  if (
    currentLesson <
    lessons.length - 1
  ) {

    openLesson(
      currentLesson + 1
    );

  } else {

    showDashboard();

  }

}


/* =====================================================
   PREVIOUS LESSON
   ===================================================== */

function previousLesson() {

  if (currentLesson > 0) {

    openLesson(
      currentLesson - 1
    );

  } else {

    showDashboard();

  }

}


/* =====================================================
   RESET PROGRESS
   ===================================================== */

function resetProgress() {

  const confirmed =
    confirm(
      "Are you sure you want to reset all lesson progress and XP?"
    );


  if (!confirmed) {
    return;
  }


  completedLessons = [];

  xp = 0;


  saveData();


  updateDashboard();

  renderLessons(lessons);


  alert(
    "🔄 Progress has been reset."
  );

}


/* =====================================================
   THEME
   ===================================================== */

function toggleTheme() {

  document.body.classList.toggle("dark");


  const dark =
    document.body.classList.contains(
      "dark"
    );


  localStorage.setItem(
    "pythonlearn_theme",
    dark ? "dark" : "light"
  );


  const button =
    getElement("themeBtn");


  if (button) {

    button.textContent =
      dark ? "☀️" : "🌙";

  }

}


/* =====================================================
   UPDATE THEME BUTTON
   ===================================================== */

function updateThemeButton() {

  const button =
    getElement("themeBtn");

  if (!button) {
    return;
  }


  button.textContent =
    document.body.classList.contains(
      "dark"
    )
      ? "☀️"
      : "🌙";

}


/* =====================================================
   QUIZ
   ===================================================== */

function showQuiz() {

  startQuiz();

  showPage("quizPage");

}


/* =====================================================
   START QUIZ
   ===================================================== */

function startQuiz() {

  quizIndex = 0;

  quizScore = 0;

  renderQuiz();

}


/* =====================================================
   RENDER QUIZ
   ===================================================== */

function renderQuiz() {

  const progress =
    getElement("quizProgress");

  const content =
    getElement("quizContent");


  if (!progress || !content) {
    return;
  }


  if (
    quizIndex >= quizzes.length
  ) {

    showQuizResult();

    return;

  }


  const quiz =
    quizzes[quizIndex];


  progress.textContent =
    "Question " +
    (quizIndex + 1) +
    " / " +
    quizzes.length +
    " • Score " +
    quizScore;


  let html = `

    <h3>
      ${quiz.q}
    </h3>

  `;


  quiz.options.forEach(
    function(option, index) {

      html += `

        <button
          class="quiz-option"
          onclick="answerQuiz(${index})">

          ${String.fromCharCode(65 + index)}.
          ${option}

        </button>

      `;

    }
  );


  content.innerHTML = html;

}


/* =====================================================
   ANSWER QUIZ
   ===================================================== */

function answerQuiz(selected) {

  const quiz =
    quizzes[quizIndex];


  const buttons =
    document.querySelectorAll(
      ".quiz-option"
    );


  buttons.forEach(
    function(button) {

      button.disabled = true;

    }
  );


  if (
    selected === quiz.answer
  ) {

    quizScore++;

    if (buttons[selected]) {

      buttons[selected]
        .classList.add("correct");

    }

  } else {

    if (buttons[selected]) {

      buttons[selected]
        .classList.add("wrong");

    }


    if (buttons[quiz.answer]) {

      buttons[quiz.answer]
        .classList.add("correct");

    }

  }


  setTimeout(function() {

    quizIndex++;

    renderQuiz();

  }, 700);

}


/* =====================================================
   QUIZ RESULT
   ===================================================== */

function showQuizResult() {

  const progress =
    getElement("quizProgress");

  const content =
    getElement("quizContent");


  const earnedXP =
    quizScore * 10;


  xp += earnedXP;


  saveData();


  if (progress) {

    progress.textContent =
      "Quiz Completed • " +
      quizScore +
      " / " +
      quizzes.length;

  }


  if (content) {

    content.innerHTML = `

      <div class="tip-box">

        <h3>
          🎉 Quiz Completed!
        </h3>

        <p>
          Your score:
          <b>
            ${quizScore} / ${quizzes.length}
          </b>
        </p>

        <p>
          You earned
          <b>+${earnedXP} XP</b>
        </p>

        <br>

        <button
          class="primary-btn"
          onclick="startQuiz()">

          🔄 Try Again

        </button>

      </div>

    `;

  }

}


/* =====================================================
   PLAYGROUND
   ===================================================== */

function showPlayground() {

  showPage("playgroundPage");

}


/* =====================================================
   PLAYGROUND EXAMPLES
   ===================================================== */

const playgroundExamples = {

  hello:
`print("Hello, Python!")`,


  variables:
`name = "Alex"
age = 16

print("Name:", name)
print("Age:", age)`,


  math:
`a = 10
b = 5

print("Sum:", a + b)
print("Difference:", a - b)
print("Product:", a * b)
print("Division:", a / b)`,


  loop:
`for i in range(1, 6):
    print(i)`,


  list:
`fruits = ["apple", "banana", "mango"]

for fruit in fruits:
    print(fruit)`

};


/* =====================================================
   LOAD PLAYGROUND EXAMPLE
   ===================================================== */

function loadExample(name) {

  const editor =
    getElement("codeEditor");

  const output =
    getElement("codeOutput");


  if (!editor) {
    return;
  }


  if (
    playgroundExamples[name]
  ) {

    editor.value =
      playgroundExamples[name];

  }


  if (output) {

    output.textContent =
      "Example loaded. Press Run Code ▶";

  }

}


/* =====================================================
   CLEAR PLAYGROUND
   ===================================================== */

function clearCode() {

  const editor =
    getElement("codeEditor");

  const output =
    getElement("codeOutput");


  if (editor) {

    editor.value = "";

  }


  if (output) {

    output.textContent =
      "Output cleared.";

  }

}


/* =====================================================
   PYTHON VALUE PARSER
   ===================================================== */

function parsePythonValue(
  value,
  variables
) {

  value =
    value.trim();


  /* String */

  if (
    (
      value.startsWith('"') &&
      value.endsWith('"')
    )

    ||

    (
      value.startsWith("'") &&
      value.endsWith("'")
    )
  ) {

    return value.slice(
      1,
      -1
    );

  }


  /* Boolean */

  if (value === "True") {

    return true;

  }


  if (value === "False") {

    return false;

  }


  /* Number */

  if (
    value !== "" &&
    !isNaN(Number(value))
  ) {

    return Number(value);

  }


  /* Variable */

  if (
    Object.prototype.hasOwnProperty.call(
      variables,
      value
    )
  ) {

    return variables[value];

  }


  /* List */

  if (
    value.startsWith("[") &&
    value.endsWith("]")
  ) {

    return value;

  }


  return value;

}


/* =====================================================
   SPLIT PRINT ARGUMENTS
   ===================================================== */

function splitPrintArguments(text) {

  const parts = [];

  let current = "";

  let quote = null;


  for (
    let i = 0;
    i < text.length;
    i++
  ) {

    const char =
      text[i];


    if (
      (
        char === '"' ||
        char === "'"
      )
      &&
      (
        quote === null ||
        quote === char
      )
    ) {

      if (quote === null) {

        quote = char;

      } else {

        quote = null;

      }

      current += char;

      continue;

    }


    if (
      char === "," &&
      quote === null
    ) {

      parts.push(
        current.trim()
      );

      current = "";

    } else {

      current += char;

    }

  }


  if (current.trim() !== "") {

    parts.push(
      current.trim()
    );

  }


  return parts;

}


/* =====================================================
   EVALUATE SIMPLE EXPRESSION
   ===================================================== */

function evaluateExpression(
  expression,
  variables
) {

  expression =
    expression.trim();


  const parts =
    splitPrintArguments(
      expression
    );


  if (parts.length > 1) {

    return parts
      .map(function(part) {

        return evaluateExpression(
          part,
          variables
        );

      })
      .join(" ");

  }


  if (
    expression.includes("+") ||
    expression.includes("-") ||
    expression.includes("*") ||
    expression.includes("/")
  ) {

    const safeExpression =
      expression.replace(
        /[a-zA-Z_][a-zA-Z0-9_]*/g,
        function(name) {

          if (
            Object.prototype.hasOwnProperty.call(
              variables,
              name
            )
          ) {

            const value =
              variables[name];

            if (
              typeof value === "number"
            ) {

              return String(value);

            }

          }

          return name;

        }
      );


    if (
      /^[0-9+\-*/().\s]+$/.test(
        safeExpression
      )
    ) {

      try {

        return Function(
          '"use strict"; return (' +
          safeExpression +
          ')'
        )();

      } catch (error) {

        /* Continue */

      }

    }

  }


  return parsePythonValue(
    expression,
    variables
  );

}


/* =====================================================
   SIMULATE PRINT
   ===================================================== */

function simulatePrint(
  expression,
  variables
) {

  const values =
    splitPrintArguments(
      expression
    );


  return values
    .map(function(value) {

      return evaluateExpression(
        value,
        variables
      );

    })
    .join(" ");

}


/* =====================================================
   RUN CODE
   ===================================================== */

function runCode() {

  const editor =
    getElement("codeEditor");

  const output =
    getElement("codeOutput");


  if (!editor || !output) {
    return;
  }


  const code =
    editor.value.trim();


  if (code === "") {

    output.textContent =
      "⚠️ Write some Python code first.";

    return;

  }


  const lines =
    code.split("\n");


  const variables = {};

  const result = [];


  try {

    for (
      let i = 0;
      i < lines.length;
      i++
    ) {

      let line =
        lines[i].trim();


      /* Empty line */

      if (line === "") {
        continue;
      }


      /* Comment */

      if (
        line.startsWith("#")
      ) {

        continue;

      }


      /* Variable assignment */

      const assignment =
        line.match(
          /^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)$/
        );


      if (
        assignment &&
        !line.includes("==")
      ) {

        const variableName =
          assignment[1];

        const variableValue =
          assignment[2];


        variables[
          variableName
        ] =
          evaluateExpression(
            variableValue,
            variables
          );


        continue;

      }


      /* Print */

      const printMatch =
        line.match(
          /^print\s*\((.*)\)\s*$/
        );


      if (printMatch) {

        result.push(
          simulatePrint(
            printMatch[1],
            variables
          )
        );

        continue;

      }


      /* For loop */

      const rangeMatch =
        line.match(
          /^for\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+in\s+range\((\d+)(?:\s*,\s*(\d+))?\):$/
        );


      if (rangeMatch) {

        const variable =
          rangeMatch[1];

        const first =
          rangeMatch[3]
            ? Number(rangeMatch[2])
            : 0;

        const last =
          rangeMatch[3]
            ? Number(rangeMatch[3])
            : Number(rangeMatch[2]);


        let loopOutput = [];


        for (
          let n = first;
          n < last;
          n++
        ) {

          loopOutput.push(
            String(n)
          );

        }


        /*
          Look for the next indented
          print statement.
        */

        if (
          i + 1 < lines.length
        ) {

          const nextLine =
            lines[i + 1];


          const loopPrint =
            nextLine.trim().match(
              /^print\s*\((.*)\)$/
            );


          if (loopPrint) {

            const expression =
              loopPrint[1].trim();


            if (
              expression === variable
            ) {

              result.push(
                loopOutput.join("\n")
              );

              i++;

              continue;

            }

          }

        }


        result.push(
          "Loop detected. Try printing the loop variable."
        );

        continue;

      }


      /* If statement */

      if (
        line.startsWith("if ")
      ) {

        result.push(
          "✓ If condition detected."
        );

        continue;

      }


      /* Else */

      if (
        line === "else:"
      ) {

        result.push(
          "✓ Else block detected."
        );

        continue;

      }


      /* Unsupported */

      result.push(
        "✓ Code recognized: " +
        line
      );

    }


    if (result.length === 0) {

      output.textContent =
        "No output.";

    } else {

      output.textContent =
        result.join("\n");

    }

  } catch (error) {

    output.textContent =
      "⚠️ Could not simulate this code.\n\n" +
      "Try one of the Quick Examples.";

  }

}


/* =====================================================
   PROJECTS
   ===================================================== */

function showProjects() {

  renderProjects();

  showPage("projectsPage");

}


/* =====================================================
   RENDER PROJECTS
   ===================================================== */

function renderProjects() {

  const container =
    getElement("projectList");


  if (!container) {
    return;
  }


  let html = "";


  projects.forEach(
    function(project, index) {

      html += `

        <article class="project-item">

          <h3>
            ${project.title}
          </h3>

          <p>
            ${project.description}
          </p>

          <button
            class="primary-btn"
            onclick="startProject(${index})">

            ▶ Start Project

          </button>

        </article>

      `;

    }
  );


  container.innerHTML =
    html;

}


/* =====================================================
   START PROJECT
   ===================================================== */

function startProject(index) {

  if (
    index < 0 ||
    index >= projects.length
  ) {

    return;

  }


  const project =
    projects[index];


  const editor =
    getElement("codeEditor");


  if (editor) {

    editor.value =
      project.code;

  }


  showPlayground();


  setTimeout(function() {

    const output =
      getElement("codeOutput");

    if (output) {

      output.textContent =
        "Project loaded! Press ▶ Run Code.";

    }

  }, 100);

}


/* =====================================================
   KEYBOARD SHORTCUT
   ===================================================== */

document.addEventListener(
  "keydown",
  function(event) {

    /*
      Ctrl + Enter
      runs Playground code.
    */

    if (
      event.ctrlKey &&
      event.key === "Enter"
    ) {

      const playground =
        getElement("playgroundPage");


      if (
        playground &&
        playground.classList.contains(
          "active"
        )
      ) {

        runCode();

      }

    }

  }
);


/* =====================================================
   INITIALIZE APP
   ===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    loadSavedData();

    updateThemeButton();

    updateDashboard();

    renderLessons(lessons);

    renderProjects();

  }
);
