## webgeneralisation.github.com
## ============================

This is the main 'homepage' of the WebGen 2.0 project!

## How to edit this site

This homepage is build with a very simple and basic content management, which is build with [D3.js](http://d3js.org/)

### HTML-files

Every viewable site is a simple html-file:
* index.html
* introduction.html
* participate.html
* blog.html

### Navigation Bar
On top of each site, is a navigation bar which is defined by a JavaScript-file...
* contents/navElements.js

...this file consists of:
* a JSON-object 

```JavaScript
var navElements=[
		  {"head":"head", "ref":"URL", "content":"what will be displayed"},...
]
```
* and a function

```JavaScript
function showNavbar(container, active){...}
```

If you want to add a new entry to the navbar...**just add another element to the JSON-object 'navElements'**!

### Site information

The information that are given at the sites is currently completely stored within one file...
* contents/infoElements.js

...this file also consists of some objects:
```JavaScript
	var introInfo = []

	var partInfo = []

	var blogInfo = []

	var dummy = []
```

...and one function:

 ```JavaScript
 function showInfos(container, active){...}
 ```
### Dependencies

**showInfos** depends on some information that you define within the corresponding html-files

```JavaScript
var elements = dummy	//always open the dummy object
if(active == 'intro')elements=introInfo    //show the introduction.html
else if(active == 'part')elements=partInfo   //show the participate.html
else if(active == 'blog')elements=blogInfo   //show the blog.html
```

You can see the corresponding part in the html-file (e.g.: introduction.html):

```JavaScript
showInfos(contents, 'intro');
```

**showNavbar** has the same dependency...so you have to define it in the same manner within in the corresponding html-file (e.g.: introduction.html):

```JavaScript
showNavbar(navBar, 'intro');
```

### Add a new site

It is very simple:
* open the *'dummy.html'*
* re-save it with your new file-name (e.g.: *'projects.html'*)
* add the page-name at the following parts:

```HTML
<title>Dummy-site</title>
```

```JavaScript
showInfos(contents, 'dummy');
```

```JavaScript
showNavbar(contents, 'dummy');
```
* add a new JSON-object to *infoElements.js* (make use of the dummy-object)
* add the new object to the if-clause of the function *showInfos*

### Additionals

Additionally, you find 3 folders:
* styles			--> all CSS-files
* interactive_logo	--> the JavaScript-code for the interactive logo on index.html
* graphics			--> all images like *.png, *.jpg or *.xcf