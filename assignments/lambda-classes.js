// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.age = attributes.age;
        this.name = attributes.name;
        this.location = attributes.location;
} 
    speak (){
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
};

class Instructor extends Person {
    constructor (InstructorAttributes){
        super (InstructorAttributes)
        this.specialty = InstructorAttributes.specialty;
        this.favLanguage = InstructorAttributes.favLanguage;
        this.catchphrase = InstructorAttributes.catchphrase;
    }
    demo (subject){
        console.log(`Today we are learning about ${subject}`)
    }
    grade (student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor (StudentAttributes) {
        super(StudentAttributes)
        this.previousBackground = StudentAttributes.previousBackground;
        this.className = StudentAttributes.className;
        this.favSubjects = StudentAttributes.favSubjects;
    }
    listsSubjects () {
        for (let i = 0; i < this.favSubjects.length; i++){
        console.log(this.favSubjects[i]);
        }
    }
    PRAssignment (subject) {
        console.log (`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallange (subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`) 
    }
}

class ProjectManager extends Instructor {
    constructor (ProjectManagerAttributes) {
        super (ProjectManagerAttributes)
        this.gradClassName = ProjectManagerAttributes.gradClassName;
        this.favInstructor = ProjectManagerAttributes.favInstructor;
    }
    standUp (channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode (student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const morty = new Student({
    name: "Morty",
    age: 13,
    location: "Earth",
    previousBackground: "Little_boy",
    className: "Web22",
    favSubjects: ["Jessica", "More Jessica", "Ah jeez I dunno man"]
})

morty.speak();
morty.listsSubjects();
morty.PRAssignment("Pog Collections");
morty.sprintChallange("undefined...no really undefined");

const slick = new Student({
    name: "Slick",
    age: 13,
    location: "Earth",
    previousBackground: "Little_boy, no sleeves",
    className: "Web22",
    favSubjects: ["Poetry", "Depression", "Wait, is this supposed to be about webDev?"]
})

slick.speak();
slick.listsSubjects();
slick.PRAssignment("An essay on the Inevitability of Death");
slick.sprintChallange("JavaScript");

const teacher_rick = new Instructor({
    name: "Teacher Rick",
    age: 80,
    location: "The Citidel of Ricks",
    previousBackground: "Rick",
    specialty: "Breaking down the dreams of his students",
    favLanguage: "floopfloopian",
    catchphrase: "Dont know dont care",
})

teacher_rick.speak();
teacher_rick.demo("hopelessness");
teacher_rick.grade(slick, "not caring")

const teacher_rick_B = new Instructor({
    name: "Also Teacher Rick",
    age: 80,
    location: "The Citidel of Ricks as well",
    previousBackground: "Also a Rick",
    specialty: "Also Breaking down the dreams of his students",
    favLanguage: "Also floopfloopian",
    catchphrase: "Still dont know dont care",
})

teacher_rick_B.speak();
teacher_rick_B.demo("Inevitablility");
teacher_rick_B.grade(morty, "giving in")


const headmaster_rick = new ProjectManager({
    name: "Headmaster Rick",
    age: 80,
    location: "Citidel of Ricks",
    previousBackground: "None of anyones business",
    specialty: "Breaking Time",
    favLanguage: "Spanish or JavaScript",
    catchphrase: "I dont have time for a catchphrase",
    gradClassName: "2",
    favInstructor: teacher_rick,
})

headmaster_rick.speak();
headmaster_rick.demo("Insignificance");
headmaster_rick.grade(slick, "Tank tops")
headmaster_rick.standUp("ricks")
headmaster_rick.debugsCode(morty, "CSS, we do some coding here too")

const grandcouncilmember_rick = new ProjectManager({
    name: "Grandcouncilmember rick",
    age: 80,
    location: "Citidel of Ricks",
    previousBackground: "REDACTED",
    specialty: "Haircuts...",
    favLanguage: "Java, love the pain",
    catchphrase: "Wubalubadubdub",
    gradClassName: "1",
    favInstructor: teacher_rick_B,
})

grandcouncilmember_rick.speak();
grandcouncilmember_rick.demo("Stuff");
grandcouncilmember_rick.grade(morty, "I cant remember what")
grandcouncilmember_rick.standUp("mortys")
grandcouncilmember_rick.debugsCode(slick, "his computer")