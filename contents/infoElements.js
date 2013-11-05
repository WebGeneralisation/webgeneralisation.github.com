//Very simple CMS of the informational elements of the WebGen-Homepage

//JSON-objects than contain all contents for the visualised information
//**********
//elements for ... introduction.html
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
    "image":'https://raw.github.com/WebGeneralisation/Admin_CorporateDesign/master/webgen_mini_logo.png', 
  	'img_ref':'https://github.com/WebGeneralisation', 
  	'content':'a Platform', 
  	'description':[
	  	"...generalisation can be difficult to understand and has partially philosophical aspects...",
	  	"...generalisation is necessary for a wide range of people: Developers, Users, Acadamics, NMAs, ..."
	],
  	"catch": "meet different people from different fields"},

  {	'head':'net', 
    "image":'../graphics/network_small.png',
  	'img_ref':'', 
  	'content':'a Network and Community', 
  	'description':[
  	"...'Web 2.0' is not just a catchword - it involves all the necessary aspects of modern communication...",
  	"...Twitter, Mailinglists, etc. - WebGen uses these tools to benefit from their indisputable advantages..."
  	],
  	"catch": "participate in building 'Generalisation 2.0'"},

  {	'head':'open', 
    'image':'https://github-media-downloads.s3.amazonaws.com/github-logo.svg', 
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
		      .attr('class','i-align-c margin_b2 margin_t0')	
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

