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
        console.log(`Today we are learning about ${subject}`) //where does subject come from.
    }
    grade () {
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
    listsSubjects (favSubjects[]) {
        console.log(favSubjects[])
    }
    PRAssignment (subject) {
        console.log (`${student.name} has submitted a PR for ${subject}`)
    }
    sprintChallange (subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`) 
    }
}

class ProjectManager extends Instructor {
    constructor (ProjectManagerAttributes) {
        super (ProjectManagerAttributes)
        this.gradClassName = ProjectManagerAttributes.gradClassName;
        this.favInstructor = ProjectManagerAttributes.favInstructor;
    }
    standUp (channel) {
        console.log(`${name} announces to ${channel}, @channel standy times!`​​​​​)
    }
    debugsCode () {
        console.log(`${name} debugs ${student.name}'s code on ${subject}`)
    }
}