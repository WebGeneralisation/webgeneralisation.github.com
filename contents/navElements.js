//Very simple CMS of the informational elements of the WebGen-Homepage

//JSON-objects than contain all contents for the possible bars
//**********
//elements for ... navigation bar
var navElements=[
		  {"head":"intro", "ref":"/introduction.html", "content":"WebGen is..."},
		  {"head":"part", "ref":"participate.html", "content":"How to participate"},
		  {"head":"blog", "ref":"/blog.html", "content":"Blog"}
]

//Display all elements of the corresponding json-objects
function showNavbar(container, active){
	container.selectAll('div').data(navElements)
	  .enter().append('div')
	    .attr('class','margin2 sub_nav_element')
	    .append('a')
	      //The the user, which is tab currently active
	      .attr('class',function(d){if(d.head==active)return 'active'; else return d.head})
	      .attr('href',function(d){return d.ref})
	      .text(function(d){return d.content})
}

