### Students collection

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

### Relationships

- **Insert new users**

  - `db.createCollection('users')`

  ```
  db.users.insert({ username : "GoodGuyGreg", first_name : "Good Guy", last_name : "Greg"})
  db.users.insert({ username : "GoodGuyGreg", full_name : { first : "Scumbag", last : "Steve" } })
  ```

- **Insert new posts**

  - `db.createCollection('posts')`

  ```
  db.posts.insert({
    username : 'GoodGuyGreg' ,
    title : 'Passes out at party' ,
    body : 'Wakes up early and cleans house'
  })

  db.posts.insert({
    username : 'GoodGuyGreg',
    title : 'Steals your identity',
    body : 'Raises your credit score',
  })

  db.posts.insert({
    username : 'GoodGuyGreg',
    title :' Reports a bug in your code',
    body : 'Sends you a Pull Request',
  })

  db.posts.insert({
    username :' ScumbagSteve',
    title :' Borrows something',
    body : 'Sells it',
  })

  db.posts.insert({
    username :' ScumbagSteve',
    title :' Borrows everything',
    body : 'The end',
  })

  db.posts.insert({
    username :' ScumbagSteve',
    title : 'Forks your repo on github',
    body :' Sets to private',
  })
  ```

- **Insert new comments**

  - `db.createCollection('comments')`

  ```
  db.posts.find({title:  " Borrows something"}, {_id:1})

  db.comments.insert({
  username : 'GoodGuyGreg',
  comment : 'Hope you got a good deal!',
  post : ['618cf3589ffed6edab62664b']
  })

  db.posts.find({title:  " Borrows everything"}, {_id:1})

  db.comments.insert({ username : 'GoodGuyGreg', comment : 'What\'s mine is yours!', post : ['618cf3589ffed6edab62664c']  })


  db.posts.find({title: /Forks your repo on github/}, {_id:1})

  db.comments.insert({
    username : 'GoodGuyGreg',
    comment : 'Don\'t violate the licensing agreement!',
    post : ['618cf3599ffed6edab62664d']
  })

  db.posts.find({title: /Passes out at party/}, {_id:1})

  db.comments.insert({
    username : 'ScumbagSteve',
    comment : 'It still isn\'t clean',
    post : ['618cf3569ffed6edab626648']
  })

  db.posts.find({title: /Reports a bug in your code/}, {_id:1})

  db.comments.insert({
    username :' ScumbagSteve',
    comment :' Denied your PR cause I found a hack',
    post : ['618cf3579ffed6edab62664a']
  })
  ```

- **Quering related collections**

  - Find all users
    - `db.users.find({})` 
  - Find all posts
    - `db.posts.find({})` 
  - Find all posts that was authored by "GoodGuyGreg"
    - `db.posts.find({username: /GoodGuyGreg/})` 
  - Find all posts that was authored by "ScumbagSteve"
    - `db.posts.find({username: /ScumbagSteve/})` 
  - Find all comments
    - `db.comments.find({})` 
  - Find all comments that was authored by "GoodGuyGreg"
    - `db.comments.find({username: /GoodGuyGreg/})` 
  - Find all comments that was authored by "ScumbagSteve"
    - `db.comments.find({username: /ScumbagSteve/})` 
  - Find all comments belonging to the post "Reports a bug in your code"
    - `db.posts.find({title: /Reports a bug in your code/}, {_id:1})`
    - `db.comments.find({post: {$in: ['618cf3579ffed6edab62664a'] }})` 
