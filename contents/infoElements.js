//Very simple CMS of the informational elements of the WebGen-Homepage

//JSON-objects than contain all contents for the visualised information
//**********
//elements for ... introduction.html
var heading = {
  'head':'Short introduction',
  'content':["Cartographic generalisation is, until now, a highly complex field of possible applications, techniques as well as methods and has partially philosophical point of views.",
  "This project will analyse in how far we can refine the basic concept of WebGen to open it to a wider audience, that arose within the last years related to the emergence of the Web 2.0 (e.g.: OpenStreetMap).",
  "In that relation we want to expand the basic, highly technologically driven, concept of WebGen with a social component, that drives most Web 2.0-Trends.",
  "Simply said, we want to establish a kind of WebGen-community that uses the modern cummunication structure to unite the different aspects respectively user needs (e.g.: Developer, User, Academics) to build a kind of central knowledge base for the technological status quo of cartographic generalisation."]}

function showHeading(container){
  container.append('p').attr('class','t-align-c f36 sansserif dark_grey margin_t0').text(heading.head)
  container.attr('class','beam margin_b1 padding1 inset_shadow')
  container.selectAll('#head_content').data(heading.content).enter().append('p')
    .attr('id','head_content')
    .text(function(d) {return d})
    .attr('class','t-align-c f16 margin_b2 sansserif dark_grey')
}

var introInfo = [
  {	'head':'play',
  	'img_ref':'', 
  	'content':'a playground', 
  	'description':[
  		"WebGen is a place where you can develop new ideas and present them to people share your passion for generalisation!"  		
  	],
  	"catch":'make experiments...get inspiration...let your imagination run wild'},

  {	'head':'know_base',
  	'image':'../graphics/WebGenPedia/WebGenpedia-logo-en-196px.png',
    'img_ref':'https://github.com/WebGeneralisation/webgeneralisation.github.com/wiki', 
  	'content':'a Knowledge-Base', 
  	'description':[
  		"...Wikipedia has led the way ... we should learn from that..."
  	],
  	"catch":"share your knowledge ... learn from 'experts'"},

  {	'head':'plato',
    "image":'../graphics/network_small.png', 
  	'img_ref':'', 
  	'content':'a Platform', 
  	'description':[
	  	"...generalisation can be difficult to understand and has partially philosophical aspects...",
	  	"...generalisation is necessary for a wide range of people: Developers, Users, Acadamics, NMAs, ..."
	],
  	"catch": "meet different people from different fields"},

  { 'head':'pub',
    "image":'../graphics/publication_small.png', 
    'img_ref':'', 
    'content':'a Form of Publication', 
    'description':[
      "...research builds the scientific base for all generalisation tasks...",
      "...reading a scientific paper is time consuming ...",
      "...the more complex a theoretical description is, the more difficult to understand..."
  ],
    "catch": "present your scientific work visually impressive and plain"},

  {	'head':'net', 
    "image":'https://raw.github.com/WebGeneralisation/Admin_CorporateDesign/master/webgen_mini_logo.png',
  	'img_ref':'https://github.com/WebGeneralisation', 
  	'content':'a Network and Community', 
  	'description':[
  	"...'Web 2.0' is not just a catchword - it involves all the necessary aspects of modern communication...",
  	"...Twitter, Mailinglists, etc. - WebGen uses these tools to benefit from their indisputable advantages..."
  	],
  	"catch": "participate in building 'Generalisation 2.0'"},

  {	'head':'open', 
    'image':'../graphics/open_project_img_400px.png', 
  	'img_ref':'https://github.com/WebGeneralisation', 
  	'content':'an Open Project', 
  	'description':[
  	"...everything, that we do is visible to everybody...",
  	"...GitHub provides the perfect framework for collaborative development of algorithms, tools, projects, etc..."
  	],
  	"catch": "make a change ... you can even edit this site",
    "catch_ref": "https://github.com/WebGeneralisation/webgeneralisation.github.com"},

  {	'head':'old',
    "image":"../graphics/old_WebGen.png", 
  	'img_ref':'http://kartographie.geo.tu-dresden.de/webgen_core/index.html', 
  	'content':"an 'old' Idea" , 
  	'description':[
  	"...it began with the idea of sharing knowledge about generalisation..."
  	],
  	"catch": "read about the scientific background",
    "catch_ref": "http://kartographie.geo.tu-dresden.de/webgen_docs/index.php?option=com_content&view=article&id=46&Itemid=119&lang=en"}

];

//**********
//elements for ... dummy.html
var dummy = [
  { 'head':'head',
    "image":"../graphics/dummy.png", 
    'img_ref':'URL where the image is linked to', 
    'content':"the main heading" , 
    'description':["one statement", "a second statement", "..."
    ],
    "catch": "a 'catchy' phrase, that highlights the statment of this info",
    "catch_ref": "URL where the catchy phrase is linked to"}
];


//Display all elements of the corresponding json-objects
function showInfos(container, active){
	var elements = dummy	//always open the dummy object
	if(active == 'intro')elements=introInfo		//show the introduction.html
	//basic container
	var contentContainers = container.selectAll('div').data(elements)
	  .enter().append('div')
	    .attr('class','beam margin_b1 padding1 inset_shadow')
	    .attr('id',function(d){return d.head});
	//heading
	contentContainers.append('p')
	      .attr('class','t-align-c f36 sansserif dark_grey margin_t0')
	      .text(function(d){return "... " + d.content})

	//add the logo at the rigth place
	contentContainers.append('div').attr('class','margin3').attr('id',function(d){if(d.head=='play')return 'logo'; else return 'nothing'})
	
	//image (if one exists) 
	contentContainers.append('a')
	      .attr('href',function(d){return d.img_ref})
	      .append('img')
		      .attr('src',function(d){return d.image})
		      .attr('class','i-align-c margin_b2 margin_t0 r_corners1')	
	//explanations	      
	contentContainers.selectAll('#explanation').data(function(d){return d.description}).enter()
		.append('p').attr('id','explanation')
	      .attr('class','t-align-c f16 margin_b2 sansserif dark_grey')
	      .text(function(d){return d})
	//catchy sentence      
	contentContainers.append('a')
    .attr('href',function(d){return d.catch_ref})
    .append('p').attr('class','t-align-c f22 margin_b0 sansserif dark_grey2')
	      .text(function(d){return "- " + d.catch + " -"})

  if(active!='dummy'){
  	var logo = d3.select('#logo');
    var logo_ = new webgen_logo(logo, window.innerWidth/2, false);
    logo_.show()
  }
}

