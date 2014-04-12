# µC-JS

Just a placeholder file _and repository_ until µCollective.org's API is ready to roll.

Buuut, I should probably write up the documentation as I go, so here it is:

## Usage

To use µC-JS add this to your document:
```HTML
<script type="text/javascript" src="uC.js"></script>
```

Now you're pretty much ready to go.

I'll only go over one set of requests here, you can find the rest at µCollective's API documentation (I'll add a link when it's finished).

## uC.audio
An example usage would be:
```JavaScript
uC.audio.rand()
```
and a possible return would be:
```JSON
{"author":"UncleBibby","avatar":"http://ucollective.org/items/av/UncleBibby.png","comment_count":3,"description":"i made this a heck of a long time ago but i never posted it here. chip chords and bass but house drums. hope you like it!!!","extlink":null,"favourite_count":6,"file":"http://ucollective.org/items/music/UncleBibby - SageQuitchiphouse.mp3","frontpage":true,"id":2623,"licensing":{"img":[".png"],"short":"","text":"All Rights Reserved","url":""},"plays":5,"soundcloud":"http://soundcloud.com/unclebibby47/sagequit","time":1381200447,"title":"SageQuit (chiphouse)","url":"http://ucollective.org/audio/UncleBibby/sagequit+chiphouse/"}
```

### .all(page)
Returns the 40 newest audio submissions. Use the **page** variable to go back to the next 40 results.

### .id(id)
Returns one audio submission from the ID you provide through the **id** variable.

### .rand(amount)
Returns a random audio submission.
If the **amount** variable is set you can request up to 40 random audio submissions.

### .search({})
Enables you to search all the audio submissions on µCollective.
The object passed to it can look like this:
```JavaScript
{
	title: '',
	description: '',
	frontpage: '',
	cc: '',
	groupby: ''
}
```

### .top()
Returns the top three audio submissions for this week. No variables are passed to this function.
