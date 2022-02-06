//1.
var object = [
    { person: "Mohan", age: 2, company: "Guvi" },
    { person: "Rohan", age: 3, company: "Guvi Geeks" },
    { person: "Raju", age: 4, company: "Guvi Geek Network" },
  ];

//for

for (let i = 0; i < object.length; i++) {
    console.log(`
    Name: ${object[i].person}
    Age: ${object[i].age}
    Company: ${object[i].company}
    `);
}

//for-in

for (let i in object) {
  console.log(`
    Name: ${object[i].person}
    Age: ${object[i].age}
    Company: ${object[i].company}
    `);
}

//for-of

for (let i of object) {
  console.log(`
    Name: ${i.person}
    Age: ${i.age}
    Company: ${i.company}
    `);
}

//forEach

object.forEach(element => {
  console.log(`
    Name: ${element.person}
    Age: ${element.age}
    Company: ${element.company}
  `);
});

//Output:

// Name: Mohan
// Age: 2
// Company: Guvi
// debugger eval code:11:13

// Name: Rohan
// Age: 3
// Company: Guvi Geeks
// debugger eval code:11:13

// Name: Raju
// Age: 4
// Company: Guvi Geek Network
// debugger eval code:11:13

// Name: Mohan
// Age: 2
// Company: Guvi
// debugger eval code:21:11

// Name: Rohan
// Age: 3
// Company: Guvi Geeks
// debugger eval code:21:11

// Name: Raju
// Age: 4
// Company: Guvi Geek Network
// debugger eval code:21:11

// Name: Mohan
// Age: 2
// Company: Guvi
// debugger eval code:31:11

// Name: Rohan
// Age: 3
// Company: Guvi Geeks
// debugger eval code:31:11

// Name: Raju
// Age: 4
// Company: Guvi Geek Network
// debugger eval code:31:11

// Name: Mohan
// Age: 2
// Company: Guvi
// debugger eval code:41:11

// Name: Rohan
// Age: 3
// Company: Guvi Geeks
// debugger eval code:41:11

// Name: Raju
// Age: 4
// Company: Guvi Geek Network
// debugger eval code:41:11



//2.

let myData = {
  name : 'Osama Habib',
  emailAddress : 'osama@email.com',
  workExperience : {
    company: 'Capgemini',
    years : 2,
    jobRole: 'Consultant'
  },
  educationQualification : {
    UG :{ 
    degree : 'B.Tech',
    college : 'SRM',
    passingYear : 2019
    },

    SSC : {
      School : 'City Montesori School',
      passingYear : 2015
    },

    HSC : {
      School : 'City Montesori School',
      passingYear : 2015
    },

  },
};