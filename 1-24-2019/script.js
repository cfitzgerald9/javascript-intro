//1.
// - Create three new files: an `index.html`, a JavaScript file, and a CSS file
// - Copy and paste the following code into your `index.html` file:
// <article id="container"></article>
// 
// - Write a function called buildSection that accepts two arguments: `text` and `style`
// - The function should return an HTML component of a section element with whatever text and class (`style`) you pass in. 
// - Go ahead and add some CSS rules to whatever style you pass in so you can see if it worked or not.
// - Call the function and insert your section into the DOM

// function buildSection(text, style){
//     return `<p class = ${style}>${text}</p>`
// }

// document.querySelector("#container").innerHTML = buildSection("yooo", "green");

// const buildSection = () => {
//     return `<p class = ${style}>${text}</p>`
// }

// document.querySelector("#container").innerHTML = buildSection("yooo", "green");

const h1 = (title, style) => {
    return `<h1 class="${style}">${title}</h1>`
}

const section = (title, style) => {
    return `<section class="bordered dashed ${style}">${title}</section>`
}

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`
}

// const container = document.querySelector("#container")
// container.innerHTML = student("Marcus Fulbright", "Algebra", "Not a bright student")

const createStudentComponentPass = (name, studentClass, sectionContent, asideInfo) => `
    <div id="student">
        ${h1(name, studentClass, "xx-large passing")}
        ${section(sectionContent, "section--padded")}
        ${aside(asideInfo, "pushRight")}
    </div>
`
const createStudentComponentFail = (name, studentClass, sectionContent, asideInfo) => `
    <div id="student">
        ${h1(name, studentClass, "xx-large failing")}
        ${section(sectionContent, "section--padded")}
        ${aside(asideInfo, "pushRight")}
    </div>
`

{/* <div class="student">
    <h1 class="xx-large passing">Student Name</h1>
    <section class="bordered dashed section--padded">Student class</section>
    <aside class="pushRight">Additional information</aside>
</div> */}

const container = document.querySelector("#container")
const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

for(let i = 0; i < students.length; i++){
    let studentComponent = ""
    if (students[i].score >= 60){
        studentComponent = container.innerHTML(createStudentComponentPass(students[i].name, students[i].class, students[i].info, students[i].class))
    }
    else { studentComponent = container.innerHTML(createStudentComponentFail(students[i].name, students[i].class, students[i].info, students[i].class))
    }
}