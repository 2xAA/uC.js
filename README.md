# µC.js
A simple, high-level, JavaScript library for the µCollective.org API.

Just a placeholder file _and repository_ until µCollective.org's API is ready to roll.

Buuut, I should probably write up the documentation as I go, so here it is:

## Let's go

To use µC.js add this to your document:
```HTML
<script type="text/javascript" src="uC.min.js"></script>
```

Now you're pretty much ready to go.

## uC.audio
An example usage would be:
```JavaScript
uC.audio.rand({
	amount: 1,
	success: function(response) {
		console.log(response);
	},
	error: function(e) {
		alert('Oops: ' + e.error);
	}
});
```
A possible return would be:
```JSON
{"author":"crab","avatar":"http://ucollective.org/items/av/crab.jpg","comment_count":8,"description":"From my white room, from my lovely LSDJ, ","extlink":null,"favourite_count":7,"file":"http://ucollective.org/items/music/crab - ChinaGirl-Crabsound.mp3","frontpage":true,"id":2090,"licensing":{"img":["by.png"],"short":"(BY)","text":"Creative Commons Attribution 3.0 Unported","url":"http://creativecommons.org/licenses/by/3.0/"},"plays":20,"soundcloud":"http://soundcloud.com/cangrejo-music","time":1371437157,"title":"China Girl - Crab sound","url":"http://ucollective.org/audio/crab/china+girl-crab+sound/"}
```
Inside the success callback function given to the rand function we can access the data like so:
```JavaScript
console.log(response.author); // Logs 'crab' in your JavaScript console
console.log(response.licensing.text); // Logs 'Creative Commons Attribution 3.0 Unported' in your JavaScript console
console.log(response.frontpage); // Logs true in your JavaScript console
```

### .all(allObj)
Returns the 40 newest Audio submissions in an Array. Use the **page** variable to go back to the next 40 results.
```JavaScript
var allObj = {
	page: 1,
	success: function(data){},
	warn: function(w){},
	error: function(e){}
}
```

### .id(idObj)
Returns one Audio submission as an Object from the ID you provide through the **id** variable.
```JavaScript
var idObj = {
	id: 1,
	success: function(data){},
	warn: function(w){},
	error: function(e){}
}
```

### .rand(randObj)
Returns a random Audio submission as an Object.
If the **amount** variable is set you can request up to 40 random audio submissions and will return as an Array.
```JavaScript
var randObj = {
	amount: 1,
	success: function(data){},
	warn: function(w){},
	error: function(e){}
}
```

### .search(searchObj)
Enables you to search all the Audio submissions on µCollective.
Returns up to 40 results ordered in from the most relevant first in an Array.
Use the **page** variable to advance to the next 40 results.
The search variables can be read into further for more advanced searches in the µC API documentation.
```JavaScript
var searchObj = {
	title: "",
	description: "",
	groupBy: "",
	page: 1,
	success: function(data){},
	warn: function(w){},
	error: function(e){}
}
```

### .top(topObj)
Returns the top three Audio submissions for this week in an Array. No variables are needed to be passed to this function.
```JavaScript
var topObj = {
	success: function(data){},
	warn: function(w){},
	error: function(e){}
}
```

## uC.visual
The Visual request functions are identical, they just return Visual submissions rather than Audio submissions.

## uC.comment.get
>(The .get is appended because of future API write requests - then, after authentication, you'd be able to use .write (or something similar) to write a comment to a submission.)

###.audio(audioComObj)
Returns, if any, the comments on an Audio submission as an Array.

Throws a warning if no comments are available.
```JavaScript
var audioComObj = {
	id: 1,
	success: function(data){},
	warn: function(w){},
	error: function(e){}
}
```
###.visual(visualComObj)
Like I said, the Visual requests are identical to the Audio requests.
```JavaScript
var visualComObj = {
	id: 1,
	success: function(data){},
	warn: function(w){},
	error: function(e){}
}
```

## uC.favourite.get
>Not a spelling mistake, I'm from England.

###.audio(audioFavObj)
Returns, if any, the favourites on an Audio submission as an Array.

Throws a warning if no favourites are available.
```JavaScript
var audioFavObj = {
	id: 1,
	success: function(data){},
	warn: function(w){},
	error: function(e){}
}
```
###.visual(visualFavObj)
Again, the Visual requests are identical to the Audio requests.

## uC.user
### .info(userInfObj)
Returns an Object containing the User's public profile data.
```JavaScript
var userInfObj = {
	user: "2xAA",
	success: function(data){},
	warn: function(w){},
	error: function(e){}
}
```
### .stats(userStatsObj)
Returns an Object containing µCollective's user data including
```JavaScript
var userStatsObj = {
	success: function(data){},
	warn: function(w){},
	error: function(e){}
}
```
### .search(userStatsObj)
Allows you to search for usernames on µCollective.
Returns as an Array.
```JavaScript
var userSearchObj = {
	user: "2xAA",
	success: function(data){},
	warn: function(w){},
	error: function(e){}
}
```
