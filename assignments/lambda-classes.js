// CODE here for your Lambda Classes
class Person {
	constructor(personAttr) {
		this.name = personAttr.name;
		this.age = personAttr.age;
		this.location = personAttr.location;
		this.gender = personAttr.gender;
	}
	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}`;
	}
}

const fred = new Person({
	name: "Fred",
	location: "Bedrock",
	age: 37,
	gender: "male"
});

const bread = new Person({
	name: "bread",
	location: "Breadrock",
	age: 27,
	gender: "female"
});

const lead = new Person({
	name: "lead",
	location: "Leadrock",
	age: 17,
	gender: "non-binary"
});

console.log(fred.speak());
console.log(bread.speak());
console.log(lead.speak());

class Instructor extends Person {
	constructor(InstructorAttr) {
		super(InstructorAttr);
		this.specialty = InstructorAttr.specialty;
		this.favLanguage = InstructorAttr.favLanguage;
		this.catchPhrase = InstructorAttr.catchPhrase;
	}
	demo(subject) {
		return `Today we are learning about ${subject}.`;
	}

	grade(student, subject) {
		return `${student} receives a perfect score on ${subject}`;
	}
}

const Jordan = new Instructor({
	name: "Jordan",
	location: "Bedrock",
	age: 37,
	gender: "male",
	favLanguage: "JavaScript",
	specialty: "Back-end",
	catchPhrase: `Don't forget the homies`
});

const Matt = new Instructor({
	name: "Matt",
	location: "Mattrock",
	age: 27,
	gender: "female",
	favLanguage: "CSS",
	specialty: "Front-end",
	catchPhrase: `I like turtles`
});

const Kelly = new Instructor({
	name: "Kelly",
	location: "Kellyrock",
	age: 17,
	gender: "non-binary",
	favLanguage: "HTML",
	specialty: "Everything!",
	catchPhrase: `Wha Bam!`
});

console.log(Jordan.demo("Math"));
console.log(Jordan.grade("Jordan", "Math"));

console.log(Matt.demo("Gym"));
console.log(Matt.grade("Matt", "Gym"));

console.log(Kelly.demo("Health Science"));
console.log(Kelly.grade("Kelly", "Health Science"));

class Student extends Person {
	constructor(studentAttr) {
		super(studentAttr);
		this.previousBackground = studentAttr.previousBackground;
		this.className = studentAttr.className;
		this.favSubjects = studentAttr.favSubjects;
	}

	listsSubjects() {
		return this.favSubjects;
	}

	PRAssignment(subject) {
		return `${this.name} has submitted a PR for ${subject}.`;
	}

	sprintChallenge(subject) {
		return `${this.name} has begun sprint challenge on ${subject}.`;
	}
}

const Elan = new Student({
	name: "Elan",
	location: "Bedrock",
	age: 37,
	gender: "male",
	favLanguage: "JavaScript",
	specialty: "Back-end",
	catchPhrase: `Don't forget the homies`,
	previousBackground: "Firefighter",
	className: "CS132",
	favSubjects: ["Html", "CSS", "JavaScript"]
});

const Karen = new Student({
	name: "Karen",
	location: "Karenrock",
	age: 27,
	gender: "female",
	favLanguage: "CSS",
	specialty: "Front-end",
	catchPhrase: `I like turtles`,
	previousBackground: "Baker",
	className: "CS133",
	favSubjects: ["Art", "Shop", "Home"]
});

const Omar = new Student({
	name: "Omar",
	location: "Omarrock",
	age: 17,
	gender: "non-binary",
	favLanguage: "HTML",
	specialty: "Everything!",
	catchPhrase: `Wha Bam!`,
	previousBackground: "Laborer",
	className: "CS134",
	favSubjects: ["Metalworking", "Shop", "Design"]
});

console.log(Elan.listsSubjects());
console.log(Elan.PRAssignment("Math"));
console.log(Elan.sprintChallenge("Javascript"));

console.log(Karen.listsSubjects());
console.log(Karen.PRAssignment("English"));
console.log(Karen.sprintChallenge("Python"));

console.log(Omar.listsSubjects());
console.log(Omar.PRAssignment("PE"));
console.log(Omar.sprintChallenge("React"));

class ProjectManagers extends Instructor {
	constructor(ProjectManagersAttr) {
		super(ProjectManagersAttr);
		this.gradClassName = ProjectManagersAttr.gradClassName;
		this.favInstructor = ProjectManagersAttr.favInstructor;
	}

	standUp(channel) {
		return `${this.name} announces to ${channel}, @channel standy times!`;
	}

	debugsCode(student, subject) {
		return `${this.name} debugs ${student.name}'s code on ${subject}`;
	}
}

const Tiffany = new ProjectManagers({
	name: "Tiffany",
	location: "Bedrock",
	age: 37,
	gender: "male",
	favLanguage: "JavaScript",
	specialty: "Back-end",
	catchPhrase: `Don't forget the homies`,
	previousBackground: "Firefighter",
	className: "CS132",
	favSubjects: ["Html", "CSS", "JavaScript"],
	gradClassName: "CS1",
	favInstructor: "Sean"
});

const Marielle = new ProjectManagers({
	name: "Marielle",
	location: "Breadrock",
	age: 27,
	gender: "female",
	favLanguage: "CSS",
	specialty: "Front-end",
	catchPhrase: `I like turtles`,
	previousBackground: "Baker",
	className: "CS133",
	favSubjects: ["Art", "Shop", "Home"],
	gradClassName: "CS2",
	favInstructor: "Josh"
});

const Roger = new ProjectManagers({
	name: "Roger",
	location: "Leadrock",
	age: 17,
	gender: "non-binary",
	favLanguage: "HTML",
	specialty: "Everything!",
	catchPhrase: `Wha Bam!`,
	previousBackground: "Laborer",
	className: "CS134",
	favSubjects: ["Metalworking", "Shop", "Design"],
	gradClassName: "CS3",
	favInstructor: "Jordan"
});

console.log(Tiffany.standUp("WEB17"));
console.log(Tiffany.debugsCode(Elan, "Bootstrap"));

console.log(Marielle.standUp("WEB18"));
console.log(Marielle.debugsCode(Karen, "Python"));

console.log(Roger.standUp("WEB19"));
console.log(Roger.debugsCode(Omar, "C++"));
