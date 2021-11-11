- Create collection:
  - `db.createCollection('students')`
- **Insert new student**:
  ```
  db.students.insert({ name: "Ido", surName: "Arbel", birth: "26/01/1998", phone: "0526305421", gender: "Male", courses: ["Math", "Law"], });
  db.students.insert({ name: "Chen", surName: "Halevi", birth: "11/03/1997", phone: "052632341", gender: "Male", courses: ["Math", "Law"], });
  db.students.insert({ name: "Koren", surName: "Gan-or", birth: "19/01/1997", phone: "0526305321", gender: "Male", courses: [ "JavaScript", "Finance", "Law" ], });
  db.students.insert({ name: "Oryan", surName: "Levy", birth: "02/04/1998", phone: "0542305321", gender: "Male", courses: [ "JavaScript", "Law" ], });
  db.students.insert({ name: "Yahalom", surName: "Cohen", birth: "03/11/1998", phone: "0542305392", gender: "Female", courses: [ "Java", "Law" ], });
  ```
- **Query**
  - Get all students:
    - `db.students.find({})`
  - Get all students with name set to "Ido"
    - `db.students.find({name: 'Ido'})`
  - Get all students where courses include "Law"
    - `db.students.find({courses: { $in: ['Law'] }})`
  - Get all students where courses include "Java" and gender set to "Female"
    - `db.students.find({courses: { $in: ['Java'] }, gender: 'Female'})`
  - Get all students where birth > 05/05/1998
    - `db.students.find({birth : {$gt: '05/05/1998'}})`
  - Get all students where phone starts with 054
    - `db.students.find({phone: /^054/})`
- **Update**
  - Add a JavaScript course to the students where name set to "Yahalom"
    - `db.students.update({name:'Yahalom'},{ $push: { courses: 'JavaScript'} })`
  - Update the birth to 02/12/1998 where name set to "Koren"
    - `db.students.update({name:'Koren'},{ $set: { birth: '02/12/1998'} })`
- **Text**
  - Find all students that have a name that contains the letter "o"
    - `db.students.find({name:/o/})`
  - Find all students that have a surName that contains the letter "h" or "y"
    - `db.students.find({name:/[hy]/})`
- **Text**
  - Delete the student where name set to "Ido"
    - `db.students.remove({name: 'Ido'})`
  - Delete the student where birth set to "02/04/1998"
    - `db.students.remove({birth: '02/04/1998'})`
