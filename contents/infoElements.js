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
  	'image':'../graphics/WebGenPedia/WebGenpedia-logo-en-400px.png',
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
  	'img_ref':'https://github.com/WebGeneralisation/webgeneralisation.github.com', 
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
//elements for ... participation.html
var partInfo = [

  { 'head':'basic',
    "image":"../graphics/original_320.png", 
    'img_ref':'https://github.com', 
    'content':"GitHub ... the social coding instance" , 
    'description':["...it seems to be complicated...only at first glance...",
      "...in fact, it is super simple to handle..."],
    "catch": "Get some background information",
    "catch_ref": "http://git-scm.com/book"},

  { 'head':'getAccount',
    "image":"../graphics/setuptocat_320.jpg", 
    'img_ref':'https://github.com/join', 
    'content':"get an account" , 
    'description':["...it's simple...", "...completely free of charge..."
    ],
    "catch": "You don't have a GitHub account? Sign up now!",
    "catch_ref": "https://github.com/join"},

  { 'head':'easy',
    "image":"../graphics/collabocats_320.jpg", 
    'img_ref':'https://github.com/WebGeneralisation/webgeneralisation.github.com/issues', 
    'content':"the easiest way" , 
    'description':["...you can participate even without good programming skills...", 
      "...good and fresh ideas are also very important...",
      "...you can join discussions or pose problems..."
    ],
    "catch": "Come on! ... Issues are as easy as an E-Mail!",
    "catch_ref": "https://github.com/blog/831-issues-2-0-the-next-generation"},

  { 'head':'easy',
    "image":"../graphics/constructocat2_320.jpg", 
    'img_ref':'https://github.com/WebGeneralisation/webgeneralisation.github.com/issues', 
    'content':"just pull!" , 
    'description':["...you can also participate in development...", 
      "------",
      "...simply fork a repo...",
      "...add your corrections or extensions...",
      "...and pull a request!"
    ],
    "catch": "That's not as easy...but you can do it!",
    "catch_ref": "https://github.com/blog/831-issues-2-0-the-next-generation"},

  { 'head':'member',
    "image":"../graphics/benevocats_320.png", 
    'img_ref':'https://github.com/WebGeneralisation/webgeneralisation.github.com/issues/2', 
    'content':"apply for membership" , 
    'description':["...just contributing ideas or pulling is not enough for you?",
    "...your are cordially invited to get a member...",
    "------",
    "...look for an existing project and apply for the membership of the corresponding team...", 
    "...or realise your ideas by launching a new team..."
    ],
    "catch": "What are you waiting for? Let's work together!",
    "catch_ref": "https://github.com/WebGeneralisation/webgeneralisation.github.com/issues/2"},

  { 'head':'mailinglist',
    "image":"../graphics/groups.png", 
    'img_ref':'https://github.com/WebGeneralisation/webgeneralisation.github.com/issues/1', 
    'content':"Mailinglist" , 
    'description':["It is currently not defined if we will also cummunicate via mailing list."
    ],
    "catch": "You can still participate in the discussion!!!",
    "catch_ref": "https://github.com/WebGeneralisation/webgeneralisation.github.com/issues/1"}
];
//**********
//elements for ... blog.html
var blogInfo = [
  { 'head':'head',
    "image":"../graphics/WebGenPress/webgenpress.png", 
    'img_ref':'https://github.com/WebGeneralisation/webgeneralisation.github.com/issues/3', 
    'content':"Should we maintain a blog?" , 
    'description':["...it is a very good tool to inform about news and developments...", 
      "...but has to be managed...", 
      "...Wordpress is initially favored...",
      "...should we set it up locally or should we use a server solution..."
    ],
    "catch": "Let's discuss about it!",
    "catch_ref": "https://github.com/WebGeneralisation/webgeneralisation.github.com/issues/3"}
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
	if(active == 'intro')elements=introInfo    //show the introduction.html
  else if(active == 'part')elements=partInfo   //show the participate.html
  else if(active == 'blog')elements=blogInfo   //show the blog.html
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

  if(active=='intro'){
  	var logo = d3.select('#logo');
    var logo_ = new webgen_logo(logo, window.innerWidth/2, false);
    logo_.show()
  }
}

