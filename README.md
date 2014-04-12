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
