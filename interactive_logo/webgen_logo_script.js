function webgen_logo(container, width_, init_){

	var width = width_
	    height = width_/6
	    scale = width*208,55; //200000

	var path = d3.geo.path();

	var svg = container.append("svg")
	    .attr("width", width)
	    .attr("height", height)
	    //.on("mouseover",animate);

	var info = svg.append('text')
		.attr('x',width/2).attr('y',height/2)
		.attr("id", "info")
		.text( 'Loading...')
		.transition().duration(2000).style("opacity",1);
	var geo_logo, webgen_logo, line_data, init = init_, finished_init = false;

	this.show = function(){
		d3.json("interactive_logo/webgen_topo.json", showData);
	}
	
	function showData(error, de) {
		geo_logo = topojson.feature(de, de.objects.geo_logo);
		webgen_logo = topojson.feature(de, de.objects.webgen_logo);
		//enrich the logo-geometry with an ID
		webgen_logo.features = webgen_logo.features.map(function(d,i){d.properties.id = i; return d;})
		line_data = topojson.feature(de, de.objects.lines);
		info.remove();

		var webgen_logo_elements = [];

		var projection = d3.geo.mercator()
		    .center([13.735, 51.1])
	    	    .scale(scale)
		    .translate([width / 2, height / 2]);

		var path = d3.geo.path()
		    .projection(projection)
		    .pointRadius(4);

		
		svg.selectAll(".main_lines")
		    .data(line_data.features)
		  .enter().append("path")
		    .attr("class","main_lines")
		    .attr("d", path)
			.on("mouseover",interact_map);

		svg.selectAll(".logo")
		    .data(webgen_logo.features)
		  .enter().append("path")
		    .attr("class","logo")
		    .attr("d", path)
		    .on("mouseover",interact).on("mouseout",interact_revert);

		svg.selectAll(".logo_lines")
		    .data(geo_logo.features)
		  .enter().append("path")
		    .attr("class","logo_lines")
		    .attr("d", path);

		animate();
	}

	function interact(a){
		d3.select(this).transition().style('fill-opacity',0.4)
	}
	function interact_revert(){
		 d3.select(this).transition().style('fill-opacity',0.8)
	}
	function interact_map(){
		d3.select(this).style("stroke-width",'4px');
	}


	function animate(){
		if(init==true){
			init_animation();
			init = false;
		}	
	}
	function init_animation(){
		var duration = 4000;
		svg.transition()
		        .duration(2000)
		   .transition()
		        .duration(duration+1000)
		        .tween("opacity", function() {
		          var opacity = d3.interpolate(0, 1);
		          return function(t) {
		            interOpacity = opacity(t);
		            svg.selectAll(".logo").attr("transform","translate(0,0) scale(1,"+interOpacity+")").style('fill-opacity',interOpacity);
		          };
		        })
		        .transition()
		        .duration(duration)
		        .tween("opacity", function() {
		          var opacity = d3.interpolate(0,1);
		          return function(t) {
		            interOpacity = opacity(t);
		            svg.selectAll(".logo_lines").style('stroke-opacity',interOpacity);
		          };
		        })
		        .transition()
		        .duration(duration)
		        .tween("opacity", function() {
		          var opacity = d3.interpolate(1, 0);
		          return function(t) {
		            interOpacity = opacity(t);
		            svg.selectAll(".logo").style('fill-opacity',interOpacity);
		          };
		        })	
		        .transition()
		        .duration(duration)
		        .tween("opacity", function() {
		          var opacity = d3.interpolate(0, 7);
		          return function(t) {
		            interOpacity = opacity(t);
		            svg.selectAll(".logo").style('stroke-width',interOpacity);
		          };
		        }) 
		       	.transition()
		        .duration(duration/2)
		        .tween("opacity", function() {
		          var opacity = d3.interpolate(7,3);
		          return function(t) {
		            interOpacity = opacity(t);
		            svg.selectAll(".logo").style('stroke-width',interOpacity);
		          };
		        }) 
	}

}