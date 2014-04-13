# µC.js
A simple, high-level, JavaScript library for the µCollective.org API.

Just a placeholder file _and repository_ until µCollective.org's API is ready to roll.

Buuut, I should probably write up the documentation as I go, so here it is:

## Usage

To use µC.js add this to your document:
```HTML
<script type="text/javascript" src="uC.js"></script>
```

Now you're pretty much ready to go.

I'll only go over one set of requests here, you can find the rest at µCollective's API documentation (I'll add a link when it's finished).

## uC.audio
An example usage would be:
```JavaScript
uC.audio.rand(1, function(response) {
	console.log(response);
});
```
A possible return would be:
```JSON
{"author":"crab","avatar":"http://ucollective.org/items/av/crab.jpg","comment_count":8,"description":"From my white room, from my lovely LSDJ, ","extlink":null,"favourite_count":7,"file":"http://ucollective.org/items/music/crab - ChinaGirl-Crabsound.mp3","frontpage":true,"id":2090,"licensing":{"img":["by.png"],"short":"(BY)","text":"Creative Commons Attribution 3.0 Unported","url":"http://creativecommons.org/licenses/by/3.0/"},"plays":20,"soundcloud":"http://soundcloud.com/cangrejo-music","time":1371437157,"title":"China Girl - Crab sound","url":"http://ucollective.org/audio/crab/china+girl-crab+sound/"}
```
Inside the callback function given to the rand function we can access the data like so:
```JavaScript
console.log(response.author); // Logs 'crab' in your JavaScript console
console.log(response.licensing.text); // Logs 'Creative Commons Attribution 3.0 Unported' in your JavaScript console
console.log(response.frontpage); // Logs true in your JavaScript console
```

### .all(page, callback(data))
Returns the 40 newest audio submissions. Use the **page** variable to go back to the next 40 results.

### .id(id, callback(data))
Returns one audio submission from the ID you provide through the **id** variable.

### .rand(amount, callback(data))
Returns a random audio submission.
If the **amount** variable is set you can request up to 40 random audio submissions.

### .search({searchParams}, callback(data))
Enables you to search all the audio submissions on µCollective.
The searchParams object passed to it can look like this:
```JavaScript
{
	title: '',
	description: '',
	frontpage: '',
	license: '',
	groupby: ''
}
```

### .top(callback(data))
Returns the top three audio submissions for this week. No variables are passed to this function.
