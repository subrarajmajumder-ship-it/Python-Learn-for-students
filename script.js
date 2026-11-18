/* PythonLearn 4.0 — complete client-side learning platform */
"use strict";

const STORAGE_KEY = "pythonlearn_v4_state";
const LEGACY_KEYS = ["pythonlearn_completed", "pythonlearn_xp", "pythonlearn_theme"];

const lessons = [
{unit:"UNIT 1 • GETTING STARTED",icon:"🐍",title:"Python Basics",desc:"Understand Python and write your first program.",time:"8 min",body:`
<h2>What is Python?</h2><p>Python is a popular, high-level programming language known for its clear and readable syntax. People use it for web development, automation, data analysis, artificial intelligence, education and much more.</p>
<h3>Your first Python program</h3><pre><code>print("Hello, Python!")</code></pre><p>The <code>print()</code> function displays information in the output. Text is written inside quotation marks.</p>
<h3>Python comments</h3><pre><code># This is a comment
print("I am learning Python")</code></pre><p>A comment starts with <code>#</code>. Python ignores it when running the program. Comments help explain your code.</p>
<div class="lesson-note">💡 Remember: Python is case-sensitive. <code>print</code> and <code>Print</code> are not the same.</div>
<h3>Try it yourself</h3><p>Open the Playground and print your name, your favourite subject and the words “I can code!”.</p>`,practice:"Write a program that prints three separate lines: your name, Python and Hello World."},
{unit:"UNIT 1 • GETTING STARTED",icon:"📦",title:"Variables & Data Types",desc:"Store information using variables and common data types.",time:"10 min",body:`
<h2>What is a variable?</h2><p>A variable is a named place to store a value. Use the assignment operator <code>=</code> to give a variable its value.</p><pre><code>name = "Alex"
age = 16
height = 5.7
is_learning = True

print(name)
print(age)</code></pre>
<h3>Four common data types</h3><ul><li><b>str</b> — text, such as <code>"Python"</code></li><li><b>int</b> — whole numbers, such as <code>25</code></li><li><b>float</b> — decimal numbers, such as <code>3.14</code></li><li><b>bool</b> — either <code>True</code> or <code>False</code></li></ul>
<h3>Check a value's type</h3><pre><code>score = 95
print(type(score))</code></pre><div class="lesson-note">💡 Variable names can contain letters, numbers and underscores, but cannot start with a number. Use meaningful names.</div>`,practice:"Create variables called city, temperature and is_sunny. Give them a string, a decimal and a Boolean value, then print them."},
{unit:"UNIT 1 • GETTING STARTED",icon:"⌨️",title:"Input & Type Conversion",desc:"Ask the user for information and convert input into numbers.",time:"10 min",body:`
<h2>Taking input</h2><p>The <code>input()</code> function pauses the program and reads text entered by the user.</p><pre><code>name = input("Enter your name: ")
print("Welcome", name)</code></pre>
<h3>Convert input to a number</h3><p>Input is returned as a string. Convert it when you need to calculate with it.</p><pre><code>age = int(input("Enter your age: "))
price = float(input("Enter a price: "))

print(age)
print(price)</code></pre>
<h3>Useful conversion functions</h3><ul><li><code>int("12")</code> converts to an integer.</li><li><code>float("2.5")</code> converts to a decimal.</li><li><code>str(25)</code> converts to text.</li><li><code>bool(1)</code> converts to a Boolean.</li></ul><div class="lesson-note">💡 <code>int("hello")</code> causes a ValueError because the text is not a valid integer.</div>`,practice:"Ask the user for two numbers, convert both to integers and print their sum."},
{unit:"UNIT 2 • DECISIONS & REPETITION",icon:"🔀",title:"Operators",desc:"Perform calculations and compare values.",time:"10 min",body:`
<h2>Arithmetic operators</h2><pre><code>a = 10
b = 3
print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # division
print(a // b) # floor division
print(a % b)  # remainder
print(a ** b) # power</code></pre>
<h3>Comparison operators</h3><p>Comparisons produce either <code>True</code> or <code>False</code>.</p><ul><li><code>==</code> equal to</li><li><code>!=</code> not equal to</li><li><code>&gt;</code> greater than</li><li><code>&lt;</code> less than</li><li><code>&gt;=</code> greater than or equal to</li><li><code>&lt;=</code> less than or equal to</li></ul>
<h3>Logical operators</h3><pre><code>age = 16
print(age >= 13 and age <= 19)
print(age < 13 or age > 19)
print(not age == 16)</code></pre>`,practice:"Use two numbers and print their sum, product, remainder and whether the first number is larger."},
{unit:"UNIT 2 • DECISIONS & REPETITION",icon:"🤔",title:"If / Elif / Else",desc:"Make your program choose what to do based on conditions.",time:"12 min",body:`
<h2>Making decisions</h2><p>An <code>if</code> statement runs a block only when its condition is true. Python uses indentation to group the block.</p><pre><code>temperature = 28

if temperature > 30:
    print("It is hot")
else:
    print("It is not too hot")</code></pre>
<h3>Use elif for more choices</h3><pre><code>marks = 78

if marks >= 90:
    print("Grade A")
elif marks >= 70:
    print("Grade B")
elif marks >= 40:
    print("Grade C")
else:
    print("Keep practising")</code></pre>
<div class="lesson-note">💡 The conditions are checked from top to bottom. The first true branch runs, and the remaining branches are skipped.</div>`,practice:"Create a program that checks whether a number is positive, negative or zero."},
{unit:"UNIT 2 • DECISIONS & REPETITION",icon:"🔁",title:"For Loops",desc:"Repeat an action a fixed number of times or through a collection.",time:"12 min",body:`
<h2>Repeat with for</h2><p>A <code>for</code> loop visits each item in a sequence.</p><pre><code>for number in range(5):
    print(number)</code></pre><p><code>range(5)</code> produces 0, 1, 2, 3 and 4. The ending value is not included.</p>
<h3>Choose a start and step</h3><pre><code>for number in range(2, 11, 2):
    print(number)</code></pre><p>This prints 2, 4, 6, 8 and 10.</p>
<h3>Loop through a list</h3><pre><code>fruits = ["apple", "mango", "banana"]

for fruit in fruits:
    print(fruit)</code></pre>`,practice:"Use a for loop to print the multiplication table of 5 from 5 × 1 to 5 × 10."},
{unit:"UNIT 2 • DECISIONS & REPETITION",icon:"♻️",title:"While Loops",desc:"Repeat code while a condition remains true.",time:"10 min",body:`
<h2>While loop</h2><p>A <code>while</code> loop repeats as long as its condition is true.</p><pre><code>count = 1

while count <= 5:
    print(count)
    count += 1</code></pre>
<h3>Control a loop</h3><ul><li><code>break</code> exits the loop immediately.</li><li><code>continue</code> skips to the next iteration.</li></ul><pre><code>for number in range(1, 6):
    if number == 3:
        continue
    print(number)</code></pre>
<div class="lesson-note">⚠️ Make sure a while-loop condition can eventually become false. Otherwise, the loop may never stop.</div>`,practice:"Use a while loop to count down from 5 to 1, then print “Done!”."},
{unit:"UNIT 3 • COLLECTIONS & TEXT",icon:"📋",title:"Lists",desc:"Store, access and update multiple values in a list.",time:"14 min",body:`
<h2>What is a list?</h2><p>A list stores multiple items in one ordered, changeable collection. Lists use square brackets.</p><pre><code>fruits = ["apple", "mango", "banana"]
print(fruits[0])</code></pre><p>Indexes start at zero. The first item is index 0; the last item can be accessed with index -1.</p>
<h3>Change and add items</h3><pre><code>fruits[1] = "orange"
fruits.append("grapes")
fruits.insert(0, "kiwi")
print(fruits)</code></pre>
<h3>Remove and inspect</h3><pre><code>fruits.remove("apple")
last = fruits.pop()
print(len(fruits))
print(fruits)</code></pre><p>Useful tools include <code>append()</code>, <code>insert()</code>, <code>remove()</code>, <code>pop()</code>, <code>sort()</code> and <code>len()</code>.</p>`,practice:"Make a list of five favourite foods. Print the first and last item, add one more item and print the final list."},
{unit:"UNIT 3 • COLLECTIONS & TEXT",icon:"🔤",title:"Strings",desc:"Work with text, indexes, slicing and string methods.",time:"13 min",body:`
<h2>Strings are text</h2><pre><code>message = "Learn Python"
print(message[0])
print(message[-1])
print(len(message))</code></pre>
<h3>Slicing</h3><pre><code>word = "Programming"
print(word[0:4])
print(word[4:])
print(word[:6])</code></pre>
<h3>Useful string methods</h3><pre><code>name = "  python learner  "
print(name.upper())
print(name.lower())
print(name.strip())
print(name.replace("python", "code"))
print(name.title())</code></pre><p>Strings are immutable: methods return a new string rather than changing the original one.</p>`,practice:"Store your name in a variable. Print it in uppercase, lowercase and title case."},
{unit:"UNIT 3 • COLLECTIONS & TEXT",icon:"🧩",title:"Tuples & Sets",desc:"Learn immutable sequences and collections of unique items.",time:"12 min",body:`
<h2>Tuples</h2><p>A tuple is ordered but cannot be changed after creation. It uses parentheses.</p><pre><code>coordinates = (10, 20)
print(coordinates[0])
print(len(coordinates))</code></pre>
<h3>Sets</h3><p>A set stores unique values. It removes duplicates and does not provide normal positional indexing.</p><pre><code>numbers = {1, 2, 2, 3, 4}
print(numbers)

numbers.add(5)
numbers.discard(2)
print(numbers)</code></pre>
<h3>Set operations</h3><pre><code>a = {1, 2, 3}
b = {3, 4, 5}
print(a | b)  # union
print(a & b)  # intersection
print(a - b)  # difference</code></pre>`,practice:"Create a set from a list containing repeated numbers. Print the set and observe how duplicates disappear."},
{unit:"UNIT 3 • COLLECTIONS & TEXT",icon:"📖",title:"Dictionaries",desc:"Store information as key-value pairs.",time:"13 min",body:`
<h2>Dictionary basics</h2><p>A dictionary stores values under unique keys. It uses curly braces with key-value pairs.</p><pre><code>student = {
    "name": "Alex",
    "age": 16,
    "city": "Agartala"
}

print(student["name"])
print(student.get("age"))</code></pre>
<h3>Add, update and remove</h3><pre><code>student["grade"] = "A"
student["age"] = 17
student.pop("city")

print(student)</code></pre>
<h3>Loop through a dictionary</h3><pre><code>for key, value in student.items():
    print(key, value)</code></pre><p>Use <code>keys()</code>, <code>values()</code> and <code>items()</code> to inspect dictionary contents.</p>`,practice:"Create a dictionary for a book with title, author and year. Print each value."},
{unit:"UNIT 4 • REUSABLE CODE",icon:"⚙️",title:"Functions",desc:"Write reusable blocks of code with def, parameters and return.",time:"15 min",body:`
<h2>Define a function</h2><p>A function is a reusable block of code. Define it with <code>def</code> and call it by its name.</p><pre><code>def greet():
    print("Hello!")

greet()</code></pre>
<h3>Parameters and arguments</h3><pre><code>def greet(name):
    print("Hello", name)

greet("Alex")</code></pre>
<h3>Return a value</h3><pre><code>def add(a, b):
    return a + b

result = add(5, 3)
print(result)</code></pre><p><code>return</code> sends a result back to the place where the function was called.</p>`,practice:"Write a function called square that accepts a number and returns its square. Call it with 6."},
{unit:"UNIT 4 • REUSABLE CODE",icon:"🧰",title:"Modules & Imports",desc:"Reuse Python code from built-in modules.",time:"12 min",body:`
<h2>What is a module?</h2><p>A module is a Python file containing code you can reuse. Python includes many standard-library modules.</p><pre><code>import math

print(math.sqrt(25))
print(math.pi)</code></pre>
<h3>Import selected names</h3><pre><code>from random import randint

number = randint(1, 10)
print(number)</code></pre>
<h3>Useful standard modules</h3><ul><li><code>math</code> — mathematical functions and constants.</li><li><code>random</code> — random choices and numbers.</li><li><code>datetime</code> — dates and times.</li><li><code>statistics</code> — basic statistical calculations.</li></ul>`,practice:"Import the math module and print the square root of 144 and the value of pi."},
{unit:"UNIT 4 • REUSABLE CODE",icon:"🛡️",title:"Errors & Exceptions",desc:"Understand common errors and handle exceptions safely.",time:"14 min",body:`
<h2>Common error types</h2><ul><li><b>SyntaxError:</b> Python cannot understand the code structure.</li><li><b>NameError:</b> a name has not been defined.</li><li><b>TypeError:</b> an operation uses an unsuitable type.</li><li><b>ValueError:</b> a value has the wrong format.</li><li><b>IndexError:</b> a list or sequence index is out of range.</li></ul>
<h3>Use try and except</h3><pre><code>try:
    age = int(input("Enter age: "))
    print("Age:", age)
except ValueError:
    print("Please enter a whole number.")</code></pre>
<h3>Use finally</h3><pre><code>try:
    print("Working...")
except Exception as error:
    print("Problem:", error)
finally:
    print("Finished")</code></pre><div class="lesson-note">💡 Handle errors you expect. Avoid hiding every error without understanding what went wrong.</div>`,practice:"Ask for a number inside a try/except block. If conversion fails, print a friendly message."},
{unit:"UNIT 5 • PRACTICAL PYTHON",icon:"📁",title:"File Handling",desc:"Read and write text files with Python.",time:"14 min",body:`
<h2>Open a file</h2><p>Use <code>open()</code> to work with a file. The <code>with</code> statement closes it automatically.</p><pre><code>with open("notes.txt", "w") as file:
    file.write("Learning Python!")

with open("notes.txt", "r") as file:
    text = file.read()
    print(text)</code></pre>
<h3>Common file modes</h3><ul><li><code>"r"</code> — read an existing file.</li><li><code>"w"</code> — write; replaces existing content.</li><li><code>"a"</code> — append to the end.</li><li><code>"x"</code> — create a new file and fail if it exists.</li></ul>
<h3>Read lines</h3><pre><code>with open("notes.txt", "r") as file:
    for line in file:
        print(line.strip())</code></pre>`,practice:"In the playground, write a short message to a text file and then read it back."},
{unit:"UNIT 5 • PRACTICAL PYTHON",icon:"🧱",title:"Object-Oriented Programming",desc:"Understand classes, objects, attributes and methods.",time:"16 min",body:`
<h2>Classes and objects</h2><p>A class is a blueprint. An object is an instance created from that blueprint.</p><pre><code>class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

    def introduce(self):
        print("I am", self.name)

student = Student("Alex", 10)
student.introduce()
print(student.grade)</code></pre>
<h3>Important ideas</h3><ul><li><b>Class:</b> the blueprint.</li><li><b>Object:</b> an instance of a class.</li><li><b>Attribute:</b> data stored on an object.</li><li><b>Method:</b> a function defined inside a class.</li><li><b>self:</b> refers to the current object.</li></ul>`,practice:"Create a Car class with a brand attribute and a show_brand method. Create one car object and call the method."},
{unit:"UNIT 5 • PRACTICAL PYTHON",icon:"🧠",title:"List Comprehensions",desc:"Create lists in a concise and readable way.",time:"12 min",body:`
<h2>A shorter way to build lists</h2><p>A list comprehension creates a new list from an iterable.</p><pre><code>squares = [number ** 2 for number in range(1, 6)]
print(squares)</code></pre>
<h3>Add a condition</h3><pre><code>even_numbers = [
    number for number in range(1, 11)
    if number % 2 == 0
]
print(even_numbers)</code></pre>
<h3>Equivalent normal loop</h3><pre><code>squares = []
for number in range(1, 6):
    squares.append(number ** 2)</code></pre><div class="lesson-note">💡 Use comprehensions when they make code clearer. A normal loop is better for complicated logic.</div>`,practice:"Create a list containing the cubes of numbers from 1 to 5 using a list comprehension."},
{unit:"UNIT 5 • PRACTICAL PYTHON",icon:"🧮",title:"Useful Built-in Functions",desc:"Use Python's built-in tools to work more efficiently.",time:"12 min",body:`
<h2>Built-in functions</h2><p>Python includes many functions ready to use without importing a module.</p><pre><code>numbers = [12, 5, 20, 8]

print(len(numbers))
print(sum(numbers))
print(min(numbers))
print(max(numbers))
print(sorted(numbers))</code></pre>
<h3>Enumerate and zip</h3><pre><code>names = ["Ana", "Ben", "Cara"]
for index, name in enumerate(names, start=1):
    print(index, name)

subjects = ["Math", "Science"]
marks = [90, 85]
for subject, mark in zip(subjects, marks):
    print(subject, mark)</code></pre>
<h3>Any and all</h3><pre><code>values = [True, True, False]
print(any(values))
print(all(values))</code></pre>`,practice:"Given a list of five numbers, print its length, sum, smallest and largest values."},
{unit:"UNIT 6 • BUILD & REVIEW",icon:"🧪",title:"Debugging & Code Style",desc:"Find mistakes and make code easier to understand.",time:"12 min",body:`
<h2>Debugging</h2><p>Debugging means finding and fixing problems in a program. Read the error message and inspect the line where the issue occurs.</p>
<h3>Useful habits</h3><ul><li>Use clear variable and function names.</li><li>Keep indentation consistent.</li><li>Break large tasks into smaller functions.</li><li>Test one change at a time.</li><li>Use <code>print()</code> temporarily to inspect values.</li></ul>
<h3>Readable code example</h3><pre><code># Calculate the average mark
marks = [80, 90, 70]
total_marks = sum(marks)
average_mark = total_marks / len(marks)

print("Average:", average_mark)</code></pre><div class="lesson-note">💡 Python's style guide is called PEP 8. It recommends readable names, consistent spacing and clear formatting.</div>`,practice:"Take an older playground example and improve its variable names, spacing and comments."},
{unit:"UNIT 6 • BUILD & REVIEW",icon:"🎓",title:"Final Python Project",desc:"Combine variables, conditions, loops, functions and collections.",time:"20 min",body:`
<h2>Build a student marks manager</h2><p>This guided project combines several Python concepts. It stores marks, calculates an average and reports a result.</p><pre><code>def calculate_average(marks):
    return sum(marks) / len(marks)

student_name = input("Student name: ")
marks = []

for subject_number in range(1, 4):
    mark = float(input("Enter mark: "))
    marks.append(mark)

average = calculate_average(marks)

print("\\nStudent:", student_name)
print("Marks:", marks)
print("Average:", round(average, 2))

if average >= 40:
    print("Result: Passed")
else:
    print("Result: Keep practising")</code></pre>
<h3>Ideas to improve it</h3><ul><li>Store subject names with marks in a dictionary.</li><li>Validate that marks are within a sensible range.</li><li>Display the highest and lowest mark.</li><li>Move the result calculation into another function.</li></ul><div class="lesson-note">🎉 You have reached the final lesson. Keep practising by changing the project and building your own ideas.</div>`,practice:"Run the project in the Playground. Then add a function that returns the highest mark."}
];

const quizBank = [
{cat:"basics",q:"Which function displays output in Python?",o:["input()","print()","show()","display()"],a:1,e:"print() displays information in the output."},
{cat:"basics",q:"Which symbol starts a single-line comment?",o:["//","#","<!--","**"],a:1,e:"Python comments start with #."},
{cat:"basics",q:"Which data type stores whole numbers?",o:["str","float","int","bool"],a:2,e:"int represents integers, or whole numbers."},
{cat:"basics",q:"What is the result of type('Hello')?",o:["int","float","bool","str"],a:3,e:"Text inside quotes is a string (str)."},
{cat:"basics",q:"Which is a valid variable name?",o:["2score","my-score","my_score","my score"],a:2,e:"Underscores are allowed in variable names."},
{cat:"basics",q:"What does input() return by default?",o:["An integer","A string","A Boolean","A list"],a:1,e:"input() returns text. Convert it when you need another type."},
{cat:"basics",q:"Which converts text to an integer?",o:["str()","float()","int()","list()"],a:2,e:"int() converts a valid integer string to an integer."},
{cat:"basics",q:"What is the value of 2 ** 3?",o:["5","6","8","9"],a:2,e:"** is the exponentiation operator: 2 to the power of 3 is 8."},
{cat:"basics",q:"Which value is a Boolean?",o:["'True'","True","1.0","'False'"],a:1,e:"True without quotation marks is a Boolean value."},
{cat:"basics",q:"What does len('Python') return?",o:["5","6","7","Python"],a:1,e:"Python has six characters."},
{cat:"control",q:"Which keyword begins a condition?",o:["when","if","check","case"],a:1,e:"if begins a conditional statement."},
{cat:"control",q:"Which keyword adds another condition?",o:["elseif","elif","otherwise","nextif"],a:1,e:"Python uses elif for another condition."},
{cat:"control",q:"What does range(3) produce?",o:["1, 2, 3","0, 1, 2","0, 1, 2, 3","3 only"],a:1,e:"range(3) starts at zero and stops before three."},
{cat:"control",q:"Which loop repeats while a condition is true?",o:["for","repeat","while","loop"],a:2,e:"A while loop continues while its condition is true."},
{cat:"control",q:"What does break do inside a loop?",o:["Skips one iteration","Exits the loop","Restarts the loop","Pauses Python"],a:1,e:"break immediately exits the nearest loop."},
{cat:"control",q:"What does continue do?",o:["Ends the program","Exits the loop","Skips to the next iteration","Repeats the same line forever"],a:2,e:"continue moves to the next iteration."},
{cat:"control",q:"What is 10 % 3?",o:["3","1","0","3.3"],a:1,e:"The modulo operator returns the remainder. 10 divided by 3 leaves 1."},
{cat:"control",q:"Which operator means 'equal to'?",o:["=","==","!=","=>"],a:1,e:"== compares two values. = assigns a value."},
{cat:"control",q:"What does not True evaluate to?",o:["True","False","None","Error"],a:1,e:"not reverses a Boolean value."},
{cat:"control",q:"What is important for Python code blocks?",o:["Brackets only","Indentation","Semicolons","Capital letters"],a:1,e:"Python uses indentation to define code blocks."},
{cat:"collections",q:"Which brackets create a list?",o:["()","{}","[]","<>"],a:2,e:"Lists use square brackets."},
{cat:"collections",q:"What is the first index of a Python list?",o:["0","1","-1","It has no index"],a:0,e:"Python sequences use zero-based indexing."},
{cat:"collections",q:"Which list method adds an item at the end?",o:["push()","append()","add()","insertEnd()"],a:1,e:"append() adds an item to the end of a list."},
{cat:"collections",q:"Which collection stores unique values?",o:["List","Tuple","Set","String"],a:2,e:"A set contains unique elements."},
{cat:"collections",q:"Which collection uses key-value pairs?",o:["List","Dictionary","Tuple","Set"],a:1,e:"Dictionaries map keys to values."},
{cat:"collections",q:"Which keyword defines a function?",o:["function","fun","def","make"],a:2,e:"Use def to define a function."},
{cat:"collections",q:"What does return do?",o:["Repeats a function","Sends a value back","Prints automatically","Deletes a variable"],a:1,e:"return sends a result to the caller."},
{cat:"collections",q:"Which brackets usually create a tuple?",o:["[]","{}","()","||"],a:2,e:"Tuples are commonly written with parentheses."},
{cat:"collections",q:"Which method gives dictionary key-value pairs?",o:["keys()","values()","items()","pairs()"],a:2,e:"items() returns key-value pairs."},
{cat:"collections",q:"What does a list comprehension create?",o:["A class","A list","A file","A function"],a:1,e:"A list comprehension builds a list from an iterable."},
{cat:"mixed",q:"What is the output of print(3 + 2 * 2)?",o:["10","7","12","9"],a:1,e:"Multiplication happens before addition: 3 + 4 = 7."},
{cat:"mixed",q:"Which statement handles an expected error?",o:["try / except","if / else only","for / while","def / return"],a:0,e:"try and except let you handle exceptions."},
{cat:"mixed",q:"Which file mode appends content?",o:["r","w","a","x"],a:2,e:"The a mode appends to the end of a file."},
{cat:"mixed",q:"What is a class?",o:["A loop","A blueprint for objects","A list method","A data type conversion"],a:1,e:"A class defines the structure and behaviour of objects."},
{cat:"mixed",q:"Which module contains sqrt()?",o:["random","math","time","sys"],a:1,e:"math.sqrt() calculates a square root."},
{cat:"mixed",q:"What does sorted([3, 1, 2]) return?",o:["[3, 2, 1]","[1, 2, 3]","[2, 1, 3]","None"],a:1,e:"sorted() returns a new sorted list."},
{cat:"mixed",q:"What is the result of bool(0)?",o:["True","False","0","None"],a:1,e:"Zero is falsy, so bool(0) is False."},
{cat:"mixed",q:"Which method removes and returns the last list item by default?",o:["remove()","delete()","pop()","discard()"],a:2,e:"pop() removes and returns the last item by default."},
{cat:"mixed",q:"What does enumerate() commonly provide?",o:["Only values","Index and value","Only indexes","Sorted values"],a:1,e:"enumerate() provides an index and its corresponding value."},
{cat:"mixed",q:"Which statement is true about strings?",o:["Strings are mutable","Strings are immutable","Strings only store numbers","Strings use curly braces"],a:1,e:"Python strings cannot be changed in place."}
];

const projects = [
{icon:"🧮",title:"Simple Calculator",level:"BEGINNER",desc:"Take two numbers and perform basic arithmetic operations.",code:`first = float(input("First number: "))
second = float(input("Second number: "))

print("Addition:", first + second)
print("Subtraction:", first - second)
print("Multiplication:", first * second)
if second != 0:
    print("Division:", first / second)
else:
    print("Cannot divide by zero")`},
{icon:"🎓",title:"Student Result Checker",level:"BEGINNER",desc:"Enter marks and display a simple result message.",code:`name = input("Student name: ")
marks = float(input("Enter marks: "))

if marks >= 90:
    grade = "A"
elif marks >= 75:
    grade = "B"
elif marks >= 40:
    grade = "C"
else:
    grade = "Needs more practice"

print(name, "—", grade)`},
{icon:"📝",title:"To-Do List",level:"BEGINNER",desc:"Store tasks in a list and display them with numbers.",code:`tasks = []

tasks.append("Study Python")
tasks.append("Practise coding")
tasks.append("Build a project")

print("MY TASKS")
for number, task in enumerate(tasks, start=1):
    print(number, task)`},
{icon:"🌡️",title:"Temperature Converter",level:"BEGINNER",desc:"Convert a temperature from Celsius to Fahrenheit.",code:`celsius = float(input("Temperature in Celsius: "))
fahrenheit = (celsius * 9 / 5) + 32

print("Fahrenheit:", round(fahrenheit, 2))`},
{icon:"📊",title:"Marks Analyzer",level:"INTERMEDIATE",desc:"Calculate the total, average, highest and lowest marks.",code:`marks = [78, 85, 92, 67, 88]

print("Marks:", marks)
print("Total:", sum(marks))
print("Average:", sum(marks) / len(marks))
print("Highest:", max(marks))
print("Lowest:", min(marks))`},
{icon:"🔤",title:"Word Counter",level:"INTERMEDIATE",desc:"Count words and characters in a sentence.",code:`sentence = input("Enter a sentence: ")
words = sentence.split()

print("Characters:", len(sentence))
print("Words:", len(words))
print("Uppercase:", sentence.upper())`},
{icon:"📚",title:"Contact Book",level:"INTERMEDIATE",desc:"Use a dictionary to store and find contact names.",code:`contacts = {
    "Alex": "9876543210",
    "Sam": "9123456780"
}

name = input("Search contact: ")

if name in contacts:
    print("Number:", contacts[name])
else:
    print("Contact not found")`},
{icon:"🎯",title:"Quiz Game",level:"INTERMEDIATE",desc:"Ask multiple-choice questions and calculate a score.",code:`questions = [
    ("Python uses which comment symbol?", "#"),
    ("Which function displays output?", "print")
]

score = 0

for question, answer in questions:
    print(question)
    user_answer = input("Answer: ")
    if user_answer.strip().lower() == answer.lower():
        print("Correct!")
        score += 1
    else:
        print("Correct answer:", answer)

print("Final score:", score, "/", len(questions))`}
];

const achievements = [
{id:"first_lesson",icon:"🌱",title:"First Step",desc:"Complete your first lesson.",test:s=>s.completed.length>=1},
{id:"five_lessons",icon:"📚",title:"Bookworm",desc:"Complete five lessons.",test:s=>s.completed.length>=5},
{id:"all_lessons",icon:"🎓",title:"Course Finisher",desc:"Complete all 20 lessons.",test:s=>s.completed.length>=lessons.length},
{id:"first_quiz",icon:"🧠",title:"Quiz Starter",desc:"Finish your first quiz.",test:s=>s.quizAttempts>=1},
{id:"perfect_quiz",icon:"💯",title:"Perfect Score",desc:"Get every answer right in a quiz.",test:s=>s.perfectQuizzes>=1},
{id:"xp_100",icon:"⭐",title:"Rising Star",desc:"Earn 100 XP.",test:s=>s.xp>=100},
{id:"xp_500",icon:"🌟",title:"Python Explorer",desc:"Earn 500 XP.",test:s=>s.xp>=500},
{id:"playground",icon:"💻",title:"Code Runner",desc:"Run Python code in the playground.",test:s=>s.codeRuns>=1},
{id:"project",icon:"🚀",title:"Builder",desc:"Mark your first project complete.",test:s=>s.projectsDone.length>=1},
{id:"streak_3",icon:"🔥",title:"On a Roll",desc:"Learn on three consecutive days.",test:s=>s.bestStreak>=3}
];

function defaultState(){
  return {name:"Learner",completed:[],xp:0,theme:"light",streak:0,bestStreak:0,lastActive:"",activity:[],quizAttempts:0,perfectQuizzes:0,bestQuiz:0,quizXP:0,codeRuns:0,projectsDone:[],unlocked:[],reminders:false};
}
let state = defaultState();
let currentLessonIndex = 0;
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let quizMode = "mixed";
let pyodide = null;
let pyodideLoading = null;
let currentProjectIndex = -1;

const $ = id => document.getElementById(id);
const safeNumber = n => Number.isFinite(Number(n)) ? Math.max(0, Number(n)) : 0;
function loadState(){
  try{
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved){ state = {...defaultState(), ...JSON.parse(saved)}; }
    else{
      const oldLessons = JSON.parse(localStorage.getItem(LEGACY_KEYS[0]) || "[]");
      const oldXP = safeNumber(localStorage.getItem(LEGACY_KEYS[1]));
      const oldTheme = localStorage.getItem(LEGACY_KEYS[2]);
      state.completed = Array.isArray(oldLessons) ? oldLessons.filter(n=>Number.isInteger(n)&&n>=0&&n<lessons.length) : [];
      state.xp = oldXP;
      if(oldTheme === "dark") state.theme = "dark";
    }
  }catch(e){ state = defaultState(); }
  state.completed = [...new Set((Array.isArray(state.completed)?state.completed:[]).filter(n=>Number.isInteger(n)&&n>=0&&n<lessons.length))];
  state.projectsDone = Array.isArray(state.projectsDone)?state.projectsDone:[];
  state.activity = Array.isArray(state.activity)?state.activity:[];
  state.unlocked = Array.isArray(state.unlocked)?state.unlocked:[];
  state.xp = safeNumber(state.xp);
}
function saveState(){
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
  catch(e){toast("Could not save data. Your browser storage may be full.","error");}
}
function logActivity(icon,title,detail,xp=0){
  state.activity.unshift({icon,title,detail,xp,date:new Date().toISOString()});
  state.activity=state.activity.slice(0,12);
  saveState();
}
function markLearningDay(){
  const today=new Date().toLocaleDateString("en-CA");
  if(state.lastActive!==today){
    const yesterday=new Date(Date.now()-86400000).toLocaleDateString("en-CA");
    state.streak=state.lastActive===yesterday?state.streak+1:1;
    state.bestStreak=Math.max(state.bestStreak,state.streak);
    state.lastActive=today;
  }
}
function addXP(amount,reason){
  amount=safeNumber(amount);
  if(!amount)return;
  const before=getLevel(state.xp);
  state.xp+=amount;
  const after=getLevel(state.xp);
  if(after.level>before.level) toast(`🎉 Level up! You reached Level ${after.level}.`);
  if(reason)logActivity("⭐",reason,`Earned ${amount} XP`,amount);
  saveState();updateAll();
}
function getLevel(xp){
  const level=Math.floor(safeNumber(xp)/100)+1;
  const inLevel=safeNumber(xp)%100;
  const names=["Python Beginner","Code Explorer","Python Learner","Junior Coder","Code Builder","Python Developer","Problem Solver","Python Pro","Code Master","Python Champion"];
  return {level,inLevel,remaining:100-inLevel,name:names[Math.min(level-1,names.length-1)]};
}
function toast(message,type="success"){
  const box=document.createElement("div");box.className=`toast ${type}`;box.textContent=message;
  $("toastContainer").appendChild(box);setTimeout(()=>box.remove(),3200);
}
function navigate(page){
  const valid=["home","dashboard","lessons","lesson","quiz","playground","projects","achievements","profile"];
  if(!valid.includes(page))page="home";
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  const target=$(`page-${page}`);if(target)target.classList.add("active");
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page || (page==="lesson"&&b.dataset.page==="lessons")));
  closeMobileMenu();
  if(page==="dashboard")renderDashboard();
  if(page==="lessons")renderLessonCatalog();
  if(page==="projects")renderProjects();
  if(page==="achievements")renderAchievements();
  if(page==="profile")renderProfile();
  if(page==="quiz")renderQuizHome();
  window.scrollTo({top:0,behavior:"smooth"});
}
function updateAll(){
  const level=getLevel(state.xp);
  $("topXP").textContent=`${state.xp} XP`;
  $("homeLessons").textContent=`${state.completed.length}/${lessons.length}`;
  $("homeXP").textContent=`${state.xp} XP`;
  $("homeStreak").textContent=`${state.streak} ${state.streak===1?"day":"days"}`;
  $("homeLevel").textContent=`Level ${level.level}`;
  $("navLessonCount").textContent=`${state.completed.length}/${lessons.length}`;
  $("dashLessons").textContent=`${state.completed.length} / ${lessons.length}`;
  $("dashXP").textContent=state.xp;
  $("dashLevel").textContent=`Level ${level.level}`;
  $("dashNextLevel").textContent=`${level.remaining} XP to next level`;
  $("dashStreak").textContent=`${state.streak} days`;
  $("levelName").textContent=level.name;
  $("levelHint").textContent=`${level.remaining} XP needed for Level ${level.level+1}.`;
  const pct=Math.round(state.completed.length/lessons.length*100);
  $("dashPercent").textContent=`${pct}%`;
  $("dashProgressFill").style.width=`${pct}%`;
  $("dashProgressText").textContent=`${state.completed.length} of ${lessons.length} lessons completed`;
  $("todayLabel").textContent=new Date().toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric"});
  $("courseCompletion").textContent=`${state.completed.length} / ${lessons.length} done`;
  $("coursePercent").textContent=`${pct}%`;
  $("courseProgressFill").style.width=`${pct}%`;
  $("lessonSideProgress").style.width=`${pct}%`;
  $("lessonSideText").textContent=`${state.completed.length} of ${lessons.length} completed`;
  const next=lessons.findIndex((l,i)=>!state.completed.includes(i));
  const nextIndex=next<0?lessons.length-1:next;
  $("continueTitle").textContent=lessons[nextIndex].title;
  $("continueDescription").textContent=next<0?"You completed the course. Revisit any lesson to revise.":lessons[nextIndex].desc;
  $("continueBtn").textContent=next<0?"Review course →":"Start lesson →";
  $("homeStreak").textContent=`${state.streak} ${state.streak===1?"day":"days"}`;
  $("quizBest").textContent=state.quizAttempts?`${state.bestQuiz}%`:"—";
  $("profileShortcut").textContent=(state.name||"L").trim().charAt(0).toUpperCase();
}
function continueLearning(){
  const next=lessons.findIndex((l,i)=>!state.completed.includes(i));
  openLesson(next<0?0:next);
}
function renderDashboard(){
  updateAll();
  const next=lessons.findIndex((l,i)=>!state.completed.includes(i));
  const index=next<0?lessons.length-1:next;
  $("recommendedLesson").innerHTML=`<span class="rec-icon">${lessons[index].icon}</span><div class="rec-copy"><b>${escapeHTML(lessons[index].title)}</b><p>${escapeHTML(lessons[index].desc)}</p></div><button class="btn btn-primary btn-small" onclick="openLesson(${index})">${next<0?"Review":"Start"} →</button>`;
  const list=$("activityList");
  if(!state.activity.length){list.innerHTML='<div class="empty-state">Your learning activity will appear here. Complete a lesson or quiz to get started.</div>';return;}
  list.innerHTML=state.activity.map(a=>`<div class="activity-row"><span class="activity-dot">${escapeHTML(a.icon||"✨")}</span><div><b>${escapeHTML(a.title)}</b><small>${escapeHTML(a.detail)} • ${new Date(a.date).toLocaleDateString()}</small></div>${a.xp?`<span class="activity-xp">+${a.xp} XP</span>`:""}</div>`).join("");
}
function renderLessonCatalog(){
  const query=($("lessonSearch").value||"").trim().toLowerCase();
  const filter=$("lessonFilter").value;
  const root=$("lessonCatalog");let html="",lastUnit="";
  lessons.forEach((l,i)=>{
    const done=state.completed.includes(i);
    if(filter==="done"&&!done||filter==="notdone"&&done)return;
    if(query&&!`${l.title} ${l.desc} ${l.unit}`.toLowerCase().includes(query))return;
    if(l.unit!==lastUnit){html+=`<div class="lesson-unit-label">${escapeHTML(l.unit)}</div>`;lastUnit=l.unit;}
    html+=`<button class="catalog-card ${done?"completed":""}" onclick="openLesson(${i})"><span class="catalog-icon">${l.icon}</span><span class="catalog-copy"><small>LESSON ${String(i+1).padStart(2,"0")} • ${l.time}</small><b>${escapeHTML(l.title)}</b><p>${escapeHTML(l.desc)}</p></span><span class="catalog-status">${done?"✓":"›"}</span></button>`;
  });
  root.innerHTML=html||'<div class="empty-state" style="grid-column:1/-1">No lessons match your search.</div>';
  updateAll();
}
function openLesson(index){
  if(!Number.isInteger(index)||index<0||index>=lessons.length)return;
  currentLessonIndex=index;const l=lessons[index];
  $("lessonUnit").textContent=`${l.unit} • LESSON ${index+1}`;
  $("lessonDetailTitle").textContent=l.title;$("lessonDetailDesc").textContent=l.desc;$("lessonDetailIcon").textContent=l.icon;
  $("lessonBody").innerHTML=l.body;
  $("lessonPractice").innerHTML=`<b>✍️ Practice task</b><p>${escapeHTML(l.practice)}</p><button class="btn btn-outline btn-small" style="margin-top:10px" onclick="navigate('playground')">Open Python playground →</button>`;
  $("markCompleteBtn").textContent=state.completed.includes(index)?"Completed ✓":"Mark as complete ✓";
  $("markCompleteBtn").disabled=state.completed.includes(index);
  $("previousLessonBtn").disabled=index===0;
  $("nextLessonBtn").textContent=index===lessons.length-1?"Finish course →":"Next →";
  $("lessonSideList").innerHTML=lessons.map((item,i)=>`<button class="side-lesson ${i===index?"active":""}" onclick="openLesson(${i})"><span>${i+1}</span>${escapeHTML(item.title)}${state.completed.includes(i)?'<b class="side-check">✓</b>':""}</button>`).join("");
  $("lessonSideProgress").style.width=`${state.completed.length/lessons.length*100}%`;
  $("lessonSideText").textContent=`${state.completed.length} of ${lessons.length} completed`;
  navigate("lesson");
}
function completeLesson(){
  if(state.completed.includes(currentLessonIndex))return;
  state.completed.push(currentLessonIndex);state.completed.sort((a,b)=>a-b);
  markLearningDay();state.xp+=25;logActivity("📚",`Completed ${lessons[currentLessonIndex].title}`,"Lesson completed",25);
  saveState();updateAll();checkAchievements();
  $("markCompleteBtn").textContent="Completed ✓";$("markCompleteBtn").disabled=true;
  $("lessonSideList").innerHTML=lessons.map((item,i)=>`<button class="side-lesson ${i===currentLessonIndex?"active":""}" onclick="openLesson(${i})"><span>${i+1}</span>${escapeHTML(item.title)}${state.completed.includes(i)?'<b class="side-check">✓</b>':""}</button>`).join("");
  toast("Lesson completed! +25 XP 🎉");
}
function moveLesson(direction){
  const target=currentLessonIndex+direction;
  if(target>=0&&target<lessons.length)openLesson(target);
  else if(target>=lessons.length){navigate("lessons");toast("You reached the final lesson. Great work!");}
}
function renderProjects(){
  $("projectGrid").innerHTML=projects.map((p,i)=>`<article class="project-card"><div class="project-card-top"><span class="project-card-icon">${p.icon}</span><div><h3>${escapeHTML(p.title)}</h3><small>${p.level}</small></div></div><p>${escapeHTML(p.desc)}</p><div class="project-card-actions"><button class="btn btn-primary btn-small" onclick="openProject(${i})">Open project →</button><button class="btn btn-outline btn-small" onclick="toggleProjectDone(${i})">${state.projectsDone.includes(i)?"✓ Completed":"Mark done"}</button>${state.projectsDone.includes(i)?'<span class="project-done">Completed</span>':""}</div></article>`).join("");
}
function openProject(index){
  const p=projects[index];if(!p)return;currentProjectIndex=index;
  $("codeEditor").value=p.code;$("codeOutput").textContent=`Project loaded: ${p.title}\nClick “Run code” to execute it.`;
  navigate("playground");
}
function toggleProjectDone(index){
  if(state.projectsDone.includes(index))state.projectsDone=state.projectsDone.filter(x=>x!==index);
  else{state.projectsDone.push(index);markLearningDay();state.xp+=15;logActivity("🚀",`Completed ${projects[index].title}`,"Project marked complete",15);toast("Project completed! +15 XP");}
  saveState();renderProjects();updateAll();checkAchievements();
}
function renderQuizHome(){
  $("quizStart").classList.remove("hidden");$("quizGame").classList.add("hidden");$("quizResult").classList.add("hidden");updateAll();
}
function startQuiz(mode){
  quizMode=mode;
  const pool=mode==="mixed"?quizBank:quizBank.filter(q=>q.cat===mode);
  quizQuestions=shuffle([...pool]).slice(0,mode==="mixed"?15:10);
  quizIndex=0;quizScore=0;quizAnswered=false;
  $("quizStart").classList.add("hidden");$("quizResult").classList.add("hidden");$("quizGame").classList.remove("hidden");
  $("quizModeLabel").textContent=({basics:"PYTHON BASICS",control:"CONDITIONS & LOOPS",collections:"COLLECTIONS & FUNCTIONS",mixed:"MIXED CHALLENGE"})[mode];
  renderQuestion();
}
function renderQuestion(){
  const q=quizQuestions[quizIndex];if(!q)return;
  quizAnswered=false;$("quizCounter").textContent=`${quizIndex+1} / ${quizQuestions.length}`;
  $("quizProgressFill").style.width=`${quizIndex/quizQuestions.length*100}%`;
  $("quizQuestion").textContent=q.q;$("quizFeedback").textContent="";$("quizFeedback").className="quiz-feedback";
  $("quizScoreLive").textContent=`Score: ${quizScore}`;$("quizNextBtn").disabled=true;
  $("quizNextBtn").textContent=quizIndex===quizQuestions.length-1?"See results →":"Next question →";
  $("quizOptions").innerHTML=q.o.map((option,i)=>`<button class="quiz-answer" onclick="answerQuestion(${i})"><span class="answer-letter">${String.fromCharCode(65+i)}</span>${escapeHTML(option)}</button>`).join("");
}
function answerQuestion(selected){
  if(quizAnswered)return;quizAnswered=true;
  const q=quizQuestions[quizIndex];const buttons=[...$("quizOptions").querySelectorAll("button")];
  buttons.forEach((b,i)=>{b.disabled=true;if(i===q.a)b.classList.add("correct");if(i===selected&&selected!==q.a)b.classList.add("wrong");});
  if(selected===q.a){quizScore++;$("quizFeedback").textContent=`✓ Correct! ${q.e}`;$("quizFeedback").className="quiz-feedback good";}
  else{$("quizFeedback").textContent=`Not quite. ${q.e}`;$("quizFeedback").className="quiz-feedback bad";}
  $("quizScoreLive").textContent=`Score: ${quizScore}`;$("quizNextBtn").disabled=false;
}
function nextQuestion(){
  if(!quizAnswered)return;
  quizIndex++;
  if(quizIndex<quizQuestions.length)renderQuestion();else finishQuiz();
}
function finishQuiz(){
  const total=quizQuestions.length;const percent=Math.round(quizScore/total*100);const earned=quizScore*5;
  state.quizAttempts++;state.bestQuiz=Math.max(state.bestQuiz,percent);
  if(percent===100)state.perfectQuizzes++;
  state.xp+=earned;state.quizXP+=earned;markLearningDay();
  logActivity("🧠","Completed a Python quiz",`${quizScore} out of ${total} correct`,earned);
  saveState();updateAll();checkAchievements();
  $("quizGame").classList.add("hidden");$("quizResult").classList.remove("hidden");
  const message=percent===100?"Perfect result! Outstanding work.":percent>=70?"Great work! You have a strong understanding.":percent>=40?"Good effort. Review the explanations and try again.":"Keep practising. Every attempt helps you improve.";
  $("quizResult").innerHTML=`<div class="result-emoji">${percent===100?"🏆":percent>=70?"🎉":"🌱"}</div><span class="eyebrow">QUIZ COMPLETE</span><h2>${percent===100?"Perfect score!":"Nice effort!"}</h2><p>${message}</p><div class="result-score">${quizScore} / ${total}</div><p>${percent}% correct • You earned <b style="color:var(--green)">+${earned} XP</b></p><div class="result-actions"><button class="btn btn-primary" onclick="startQuiz('${quizMode}')">Try again</button><button class="btn btn-outline" onclick="renderQuizHome()">Choose another quiz</button></div>`;
}
function shuffle(array){for(let i=array.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[array[i],array[j]]=[array[j],array[i]];}return array;}
function renderAchievements(){
  const unlocked=achievements.filter(a=>a.test(state));$("achievementTally").textContent=`${unlocked.length} / ${achievements.length} unlocked`;
  $("achievementMessage").textContent=unlocked.length===achievements.length?"You unlocked every achievement. Amazing work!":`${unlocked.length} unlocked. ${achievements.length-unlocked.length} more milestones to discover.`;
  $("achievementGrid").innerHTML=achievements.map(a=>{const yes=a.test(state);return `<article class="achievement-card ${yes?"unlocked":""}"><span>${a.icon}</span><div><b>${a.title}</b><p>${a.desc}</p></div><em>${yes?"UNLOCKED":"LOCKED"}</em></article>`;}).join("");
}
function checkAchievements(){
  const newly=achievements.filter(a=>a.test(state)&&!state.unlocked.includes(a.id));
  if(newly.length){newly.forEach(a=>{state.unlocked.push(a.id);toast(`Achievement unlocked: ${a.title} ${a.icon}`);});saveState();}
  renderAchievements();
}
function renderProfile(){
  $("profileName").value=state.name||"Learner";$("profileAvatar").textContent=(state.name||"L").trim().charAt(0).toUpperCase();
  $("settingsThemeBtn").classList.toggle("on",state.theme==="dark");$("reminderSwitch").classList.toggle("on",!!state.reminders);
}
function saveProfile(){
  const name=$("profileName").value.trim().slice(0,24);
  if(!name){toast("Please enter a display name.","error");return;}
  state.name=name;$("profileAvatar").textContent=name.charAt(0).toUpperCase();$("profileShortcut").textContent=name.charAt(0).toUpperCase();
  saveState();toast("Profile saved.");
}
function toggleReminder(){state.reminders=!state.reminders;saveState();renderProfile();toast(state.reminders?"Reminder preference enabled.":"Reminder preference disabled.");}
function toggleTheme(){
  state.theme=state.theme==="dark"?"light":"dark";document.body.classList.toggle("dark",state.theme==="dark");
  $("themeBtn").textContent=state.theme==="dark"?"☀️":"🌙";saveState();renderProfile();
}
function exportProgress(){
  const data={app:"PythonLearn",version:"4.0",exportedAt:new Date().toISOString(),state};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="pythonlearn-progress-backup.json";a.click();URL.revokeObjectURL(url);toast("Progress backup downloaded.");
}
function resetAllProgress(){
  if(!confirm("Reset all PythonLearn progress, XP, quiz scores, projects and activity? This cannot be undone. Export a backup first if you need one."))return;
  state=defaultState();saveState();updateAll();renderProfile();renderDashboard();renderLessonCatalog();renderAchievements();renderProjects();toast("All progress has been reset.");
}
function escapeHTML(value){
  return String(value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}

/* Real Python runtime powered by Pyodide. It downloads on first use. */
async function loadPythonEngine(){
  if(pyodide)return pyodide;if(pyodideLoading)return pyodideLoading;
  const status=$("runtimeStatus");status.className="runtime-status";status.innerHTML="<i></i> Loading Python engine...";
  pyodideLoading=(async()=>{
    if(typeof loadPyodide!=="function")throw new Error("Python engine script did not load. Check your internet connection.");
    pyodide=await loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.27.7/full/"});
    status.className="runtime-status ready";status.innerHTML="<i></i> Python ready";
    return pyodide;
  })();
  try{return await pyodideLoading;}catch(error){pyodideLoading=null;status.className="runtime-status error";status.innerHTML="<i></i> Python engine unavailable";throw error;}
}
async function runCode(){
  const code=$("codeEditor").value;
  if(!code.trim()){setOutput("Write some Python code first.");return;}
  const button=$("runCodeBtn");button.disabled=true;button.textContent="⏳ Running...";
  setOutput("Loading Python engine...");
  try{
    const runtime=await loadPythonEngine();
    let stdout="",stderr="";
    runtime.setStdout({batched:s=>{stdout+=s+"\n";}});
    runtime.setStderr({batched:s=>{stderr+=s+"\n";}});
    runtime.setStdin({stdin:()=>{const value=prompt("Python input() — enter a value:");return value===null?"":value;}});
    try{
      await runtime.runPythonAsync(code);
      setOutput((stdout+stderr).trimEnd()||"Program finished successfully (no output).");
      state.codeRuns++;markLearningDay();saveState();checkAchievements();
    }catch(error){
      setOutput((stdout?stdout:"")+(stderr?stderr:"")+(stdout||stderr?"\n":"")+String(error));
    }
  }catch(error){setOutput("Could not start the Python engine.\n\n"+error.message+"\n\nCheck your internet connection and reload the page.");}
  finally{button.disabled=false;button.textContent="▶ Run code";$("runtimeStatus").className=pyodide?"runtime-status ready":"runtime-status error";$("runtimeStatus").innerHTML=`<i></i>${pyodide?"Python ready":"Python engine unavailable"}`;}
}
function setOutput(text){$("codeOutput").textContent=text;}
function clearOutput(){setOutput("Output cleared.");}
function clearCode(){$("codeEditor").value="";setOutput("Editor cleared. Write some Python code and run it.");}
function resetCode(){$("codeEditor").value='print("Hello, Python!")\nname = "Learner"\nprint("Welcome", name)';setOutput("Starter code restored.");}
function loadExample(type){
  const examples={
    hello:'print("Hello, Python!")\nprint("I am learning to code.")',
    variables:'name = "Learner"\nage = 16\nprint("Name:", name)\nprint("Age:", age)',
    condition:'marks = 75\n\nif marks >= 40:\n    print("Passed!")\nelse:\n    print("Keep practising!")',
    loop:'for number in range(1, 6):\n    print(number)',
    list:'fruits = ["Apple", "Mango", "Banana"]\n\nfor fruit in fruits:\n    print(fruit)',
    function:'def greet(name):\n    return "Hello, " + name\n\nmessage = greet("Python learner")\nprint(message)'
  };
  $("codeEditor").value=examples[type]||examples.hello;setOutput("Example loaded. Click “Run code” to execute it.");
}
function closeMobileMenu(){$("sidebar").classList.remove("open");$("mobileOverlay").classList.remove("show");}
function toggleMobileMenu(){$("sidebar").classList.toggle("open");$("mobileOverlay").classList.toggle("show");}

function init(){
  loadState();document.body.classList.toggle("dark",state.theme==="dark");
  $("themeBtn").textContent=state.theme==="dark"?"☀️":"🌙";
  $("profileShortcut").textContent=(state.name||"L").trim().charAt(0).toUpperCase();
  document.querySelectorAll(".nav-item").forEach(button=>button.addEventListener("click",()=>navigate(button.dataset.page)));
  $("themeBtn").addEventListener("click",toggleTheme);$("profileShortcut").addEventListener("click",()=>navigate("profile"));
  $("mobileMenuBtn").addEventListener("click",toggleMobileMenu);$("mobileOverlay").addEventListener("click",closeMobileMenu);
  $("lessonSearch").addEventListener("input",renderLessonCatalog);$("lessonFilter").addEventListener("change",renderLessonCatalog);
  $("codeEditor").addEventListener("keydown",event=>{
    if(event.key==="Tab"){event.preventDefault();const start=event.target.selectionStart,end=event.target.selectionEnd;event.target.value=event.target.value.substring(0,start)+"    "+event.target.value.substring(end);event.target.selectionStart=event.target.selectionEnd=start+4;}
    if((event.ctrlKey||event.metaKey)&&event.key==="Enter"){event.preventDefault();runCode();}
  });
  updateAll();renderDashboard();renderLessonCatalog();renderProjects();renderAchievements();renderProfile();
  checkAchievements();
  if(typeof loadPyodide==="function"){$("runtimeStatus").innerHTML="<i></i> Python engine ready to load";}else{$("runtimeStatus").className="runtime-status error";$("runtimeStatus").innerHTML="<i></i> Connect to internet to load Python";}
}
document.addEventListener("DOMContentLoaded",init);
