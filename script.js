/* =====================================================
   PythonLearn 3.4
   COMPLETE SCRIPT.JS
   ===================================================== */


/* =====================================================
   LESSON DATA
   ===================================================== */

const lessons = [

  {
    title: "Python Basics",
    desc: "Learn what Python is and write your first program.",
    content: `
      <h3>🐍 What is Python?</h3>
      <p>
        Python is a beginner-friendly programming language used
        for websites, automation, data science, AI and many other projects.
      </p>

      <h3>Your First Program</h3>
      <pre><code>print("Hello, Python!")</code></pre>

      <p>
        The <b>print()</b> function displays information on the screen.
      </p>
    `
  },

  {
    title: "Variables & Data Types",
    desc: "Learn how Python stores different types of information.",
    content: `
      <h3>📦 Variables</h3>
      <p>A variable stores a value that your program can use.</p>

      <pre><code>name = "Alex"
age = 16
height = 5.6
is_student = True</code></pre>

      <h3>Common Data Types</h3>
      <ul>
        <li><b>str</b> → Text</li>
        <li><b>int</b> → Whole numbers</li>
        <li><b>float</b> → Decimal numbers</li>
        <li><b>bool</b> → True or False</li>
      </ul>
    `
  },

  {
    title: "Input & Type Conversion",
    desc: "Learn how to take user input and convert values.",
    content: `
      <h3>⌨️ User Input</h3>

      <pre><code>name = input("Enter your name: ")
print("Hello", name)</code></pre>

      <h3>Type Conversion</h3>

      <pre><code>age = int(input("Enter your age: "))
print(age)</code></pre>

      <p>
        <b>input()</b> normally returns text.
        Use <b>int()</b> or <b>float()</b> when you need numbers.
      </p>
    `
  },

  {
    title: "If / Else",
    desc: "Make decisions in Python programs.",
    content: `
      <h3>🤔 Conditions</h3>

      <pre><code>age = 16

if age >= 18:
    print("Adult")
else:
    print("Under 18")</code></pre>

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

      <p>This prints numbers from 0 to 4.</p>

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

      <p>Python list indexes start from <b>0</b>.</p>
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
        <b>len()</b> tells you the number of characters.
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
        Functions allow you to reuse code.
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
    desc: "Learn two useful Python collection types.",
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
    desc: "Combine your Python skills in a small project.",
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
        Try adding more subjects, grades and conditions.
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
      "Use calculations to analyze numbers.",
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

let quizXPAlreadyAwarded = false;


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

      completedLessons = JSON.parse(savedLessons);

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


  updateThemeButton();

}


/* =====================================================
   SAVE DATA
   ===================================================== */

function saveData() {

  try {

    localStorage.setItem(
      "pythonlearn_completed",
      JSON.stringify(completedLessons)
    );

    localStorage.setItem(
      "pythonlearn_xp",
      String(xp)
    );

  } catch (error) {

    console.log("Could not save progress.");

  }

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
    document.body.classList.contains("dark");


  localStorage.setItem(
    "pythonlearn_theme",
    dark ? "dark" : "light"
  );


  updateThemeButton();

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
    document.body.classList.contains("dark")
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

  quizXPAlreadyAwarded = false;

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


  if (!quiz) {
    return;
  }


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


  /*
    Prevent accidental double XP
    if this function is triggered twice.
  */

  if (!quizXPAlreadyAwarded) {

    xp += earnedXP;

    saveData();

    quizXPAlreadyAwarded = true;

  }


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

        <button
          class="secondary-btn"
          onclick="showDashboard()">

          📊 Dashboard

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
   LOAD CODE EXAMPLES
   ===================================================== */

function loadExample(type) {

  const editor =
    getElement("codeEditor");

  if (!editor) {
    return;
  }


  const examples = {

    hello:
`print("Hello, Python!")`,

    variables:
`name = "Subraraj"
age = 16

print("Name:", name)
print("Age:", age)`,

    math:
`a = 10
b = 5

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)`,

    loop:
`for i in range(5):
    print(i)`,

    list:
`fruits = ["Apple", "Mango", "Banana"]

print(fruits)
print(fruits[0])`

  };


  if (examples[type]) {

    editor.value =
      examples[type];

  }

}


/* =====================================================
   CLEAR CODE
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
      'Click "Run Code" to see output.';

  }

}


/* =====================================================
   BASIC PYTHON PLAYGROUND
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
      "Please write some Python code first.";

    return;

  }


  /*
    This is a beginner JavaScript-based
    simulation for simple Python commands.

    It is NOT a full Python interpreter.
  */


  try {

    let result = "";


    /* print("text") */

    const printMatches =
      code.matchAll(
        /print\s*\(\s*["']([^"']*)["']\s*\)/g
      );


    for (const match of printMatches) {

      result +=
        match[1] + "\n";

    }


    /* Simple number variables */

    const variables = {};

    const variableMatches =
      code.matchAll(
        /^\s*([a-zA-Z_]\w*)\s*=\s*(-?\d+(?:\.\d+)?)\s*$/gm
      );


    for (const match of variableMatches) {

      variables[match[1]] =
        Number(match[2]);

    }


    /* print(variable) */

    const variablePrintMatches =
      code.matchAll(
        /print\s*\(\s*([a-zA-Z_]\w*)\s*\)/g
      );


    for (const match of variablePrintMatches) {

      const variableName =
        match[1];

      if (
        Object.prototype.hasOwnProperty.call(
          variables,
          variableName
        )
      ) {

        result +=
          variables[variableName] +
          "\n";

      }

    }


    /* print("text", variable) */

    const mixedMatches =
      code.matchAll(
        /print\s*\(\s*["']([^"']*)["']\s*,\s*([a-zA-Z_]\w*)\s*\)/g
      );


    for (const match of mixedMatches) {

      const variableName =
        match[2];

      if (
        Object.prototype.hasOwnProperty.call(
          variables,
          variableName
        )
      ) {

        result +=
          match[1] +
          " " +
          variables[variableName] +
          "\n";

      }

    }


    if (result === "") {

      result =
        "Code entered successfully.\n\n" +
        "The current playground supports simple beginner examples.\n" +
        "For full Python execution, a real Python engine will be added later.";

    }


    output.textContent =
      result.trim();

  } catch (error) {

    output.textContent =
      "Error: " + error.message;

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
            onclick="openProject(${index})">

            💻 Open Project

          </button>

        </article>

      `;

    }
  );


  container.innerHTML =
    html;

}


/* =====================================================
   OPEN PROJECT
   ===================================================== */

function openProject(index) {

  if (
    index < 0 ||
    index >= projects.length
  ) {

    return;

  }


  const project =
    projects[index];


  showPlayground();


  const editor =
    getElement("codeEditor");

  const output =
    getElement("codeOutput");


  if (editor) {

    editor.value =
      project.code;

  }


  if (output) {

    output.textContent =
      "Project loaded.\nClick \"Run Code\" to test the example.";

  }

}


/* =====================================================
   INITIALIZE APP
   ===================================================== */

function initializeApp() {

  loadSavedData();

  updateDashboard();

  renderLessons(lessons);

  renderProjects();

  updateThemeButton();


  const editor =
    getElement("codeEditor");

  if (
    editor &&
    editor.value.trim() === ""
  ) {

    editor.value =
      'print("Hello, Python!")';

  }

}


/* =====================================================
   START APP
   ===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  initializeApp
);


/* =====================================================
   PYTHONLEARN 3.4
   END
   ===================================================== */
