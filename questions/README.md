## To start 
```
	git clone https://github.com/noamgolani/mongodb-weekend.git
	cd mongodb-weekend/questions
	npm i
	npm run start
```

### To develop / test 
```
	npm run dev
	npm run test <- on another terminal
```

## Entries

- **GET /questions**
	-	Gets all the questions from the DB
- **GET /questions:[id]**
	- Validates the id
	- If no such question responds with `404`
	-	Gets that question
- **PUT /questions:[id]**
	- Validates the id
	- Validates the sent params to update
	-	Responds if was successfull
- **POST /questions**
	- Validates the sent params
	-	Responds if was successfull
- **DELETE /questions/:[id]**
	- Validates the id
	-	Responds if was successfull
- **GET /questions/difficulty:<difficulty>**
	- Gets all the questions harder or equel
