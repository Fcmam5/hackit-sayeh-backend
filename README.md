# Sayeh Backend

Made upon [mini express boilerplate](https://github.com/Fcmam5/mini-express-boilerplate).

## API usage

### Monuments API
* `GET /api/monuments/` Display all monuments
* `GET /api/monuments/:id` Display a certain object for a given `id`
* `POST /api/monuments/` Send `POST` with
    ```
    	'name' : String,
	'personnage' : String,
	'type' : String,
	'city' : String,
  'long': String,
  'latt': String
	'story' : String,
	'xp' : Number,
	'date' : String,
	'language' : String,
	'questions' : [{
		'text' : {type: String, default: ''},
		'choises' : Array,
		'correct_choice' : String
	  }
    ```
