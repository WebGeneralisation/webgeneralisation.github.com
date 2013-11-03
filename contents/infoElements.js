//Very simple CMS of the informational elements of the WebGen-Homepage

//JSON-objects than contain all contents for the visualised information
//**********
//elements for ... introduction.html
var introInfo = [
  {'head':'play', 'ref':'https://github.com/WebGeneralisation', 'content':'...a playground', 
  	'description':[
  		"...it doesn't matter if you do something clever...strange...cool...necessary...impressive...",
  		'- WebGen should be the place for everything -'
  	]},
  {'head':'know_base', 'ref':'https://github.com/WebGeneralisation/webgeneralisation.github.com/wiki', 'content':'...a Knowledge-Base', 
  	'image':'http://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikipedia-logo-en-big.png/196px-Wikipedia-logo-en-big.png',
  	'description':[
  		"...Wikipedia has led the way ... we should learn from that...",
  		"- Let's build tools that help collecting knowledge about generalisation -"]},
  {'head':'plato', 'ref':'', 'content':'...a Platform', 'description':[
  	"...generalisation can be difficult to understand and has partially philosophical aspects...",
  	"- WebGen should provide different areas for Developers, Users and Acadamics -"]},
  {'head':'net', 'ref':'', 'content':'...a Network and Community', 'description':''},
  {'head':'open', 'ref':'', 'content':'...an Open Project', 'description':'', 
		  	'image':'https://github-media-downloads.s3.amazonaws.com/github-logo.svg'},
  {'head':'old', 'ref':'', 'content':"...an 'old' Idea" , 'description':''}

];

//**********
//elements for ... dummy.html
var dummy = [
  {'head':'head', 'ref':'ref', 'content':'content', 'description':''}
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
	      .attr('class','t-align-c f36 sansserif dark_grey')
	      .attr('href',function(d){return d.ref})
	      .text(function(d){return d.content})

	//add the logo at the rigth place
	contentContainers.append('div').attr('class','margin3').attr('id',function(d){if(d.head=='play')return 'logo'; else return 'nothing'})
	
	//image (if one exists) 
	contentContainers.append('a')
	      .attr('href',function(d){return d.ref})
	      .append('img')
		      .attr('src',function(d){return d.image})
		      .attr('class','i-align-c margin_b2')	
	//explanations	      
	contentContainers.selectAll('#explanation').data(function(d){return d.description}).enter()
		.append('p').attr('id','explanation')
	      .attr('class','t-align-c f16 margin_b2 sansserif dark_grey')
	      .text(function(d){return d})

	var logo = d3.select('#logo');
  	var logo_ = new webgen_logo(logo, window.innerWidth/2, false);
  	logo_.show()

}

