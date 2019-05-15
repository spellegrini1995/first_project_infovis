	var dataset = [
	{
		regione: "Abruzzo",
		popolazione: 1315196
	},
	{
		regione: "Basilicata",
		popolazione: 567118
	},
	{
		regione: "Calabria",
		popolazione: 1956687
	},
	{
		regione: "Campania",
		popolazione: 5826860
	},
	{
		regione: "Emilia-Romagna",
		popolazione: 4452629
	},
	{
		regione: "Friuli Venezia Giulia",
		popolazione: 1216853	
	},
	{
		regione: "Lazio",
		popolazione: 5896693
	},
	{
		regione: "Liguria",
		popolazione: 1556981	
	},
	{
		regione: "Lombardia",
		popolazione: 10036258
	},
	{
		regione: "Marche",
		popolazione: 1531753	
	},
	{
		regione: "Molise",
		popolazione: 308493
	},
	{
		regione: "Piemonte",
		popolazione: 4375865
	},
	{
		regione: "Puglia",
		popolazione: 4048242	
	},
	{
		regione: "Sardegna",
		popolazione: 1648176
	},
	{
		regione: "Sicilia",
		popolazione: 5026989	
	},
	{
		regione: "Toscana",
		popolazione: 3736968	
	},
	{
		regione: "Trentino-Alto Adige",
		popolazione: 1067648
	},
	{
		regione: "Umbria",
		popolazione: 884640
	},
	{
		regione: "Valle d'Aosta",
		popolazione: 126202
	},
	{
		regione: "Veneto",
		popolazione: 4903722
	}
	]

	/* Se vuoi caricare i dati da file json esterno utilizzare questo comando al posto del precedente.
	Attenzione!!! I browser bloccano il caricamento dei dati da dile esterni, pertanto potrebbero esserci problemi nel caricamento
	In windows, andare nella cartella del progetto ed eseguire: "python -m http.server [porta]" (python deve essere installato). Quindi andare
	sul browser e digitare: localhost:porta

	var dataset = d3.json("dataset_infovis.json").then((data) => {
	return data;
	}*/

	function update() {
	path = d3.select("#chart").selectAll("path").data(pie(dataset));
	path.transition()
	.duration(1500)
	.attr('d', arc) 
	.attr('fill', function(d) { 
		return color(d.data.regione);
	})
	  .attrTween("d", arcTween); // Smooth transition with arcTween
	}

	function switchData(d) {
		var i=d.index;
		var appo1=[];
		var max=dataset.length - 1;
		appo1[0]=dataset[i];
		var ind1=i;
		var ind2=i+1;
		if(i==max){
			ind2=0;
		}
		dataset[ind1] = dataset[ind2];
		dataset[ind2] = appo1[0];
	}

	function arcTween(a) {
		var i = d3.interpolate(this._current, a);
		this._current = i(0);
		return function(t) {
			return arc(i(t));
		};
	}

	function setRegione(regione, pie){
		  var rect = d3.select(this);                             // NEW
	      var enabled = true;                                     // NEW
	      var totalEnabled = d3.sum(dataset.map(function(d) {     // NEW
	        return (d.enabled) ? 1 : 0;                           // NEW
	      }));                                                    // NEW
	      if (rect.attr('class') === 'disabled') {                // NEW
	        rect.attr('class', '');                               // NEW
	      } else {                                                // NEW
	        if (totalEnabled < 2) return;                         // NEW
	        rect.attr('class', 'disabled');                       // NEW
	        enabled = false;                                      // NEW
	      }                                                       // NEW
	      pie.value(function(d) {                                 // NEW
	        if (d.regione === regione) d.enabled = enabled;           // NEW
	        return (d.enabled) ? d.popolazione : 0;                     // NEW
	    });   

	  }
		// chart dimensions
		var width = 800;
		var height = 400;

	// a pie chart needs a radius
	var radius = Math.min(width, height) / 2 - 6;

	// legend dimensions
	var legendRectSize = 15; 
	var legendSpacing = 4.8; 

	// define color scale
	var color = d3.scaleOrdinal(['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', 
		'#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', 
		'#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080']);

	//define pie
	var pie = d3.pie() 
	.value(function(d) { return d.popolazione; }) 
	.sort(null); 

	//define arc
	var arc = d3.arc()
	.innerRadius(5) 
	.outerRadius(radius)
	
	var arcOver = d3.arc()
	.innerRadius(5) 
	.outerRadius(radius + 6)

	//svg element
	var svg = d3.select('#chart') 
	.append('svg') 
	.attr('width', width) 
	.attr('height', height) 
	.append('g') 
	.attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')'); 

	// define tooltip
	var tooltip = d3.select('#chart') 
	.append('div')                                   
	.attr('class', 'tooltip'); 

	tooltip.append('div')                           
	.attr('class', 'regione');                        
	tooltip.append('div')                   
	.attr('class', 'popolazione');                 
	tooltip.append('div') 
	.attr('class', 'percent'); 

	dataset.forEach(function(d) {
	    d.enabled = true;                                         
	});

	// creating the chart
	var path = svg.selectAll('path') 
	.data(pie(dataset)) 
	.enter() 
	.append('path') 
	.attr('d', arc) 
	.attr('fill', function(d) { 
		return color(d.data.regione);
	})
	  .each(function(d) { this._current = d; });                


	// mouse event handlers 
	path.on('mouseover', function(d) { 
		var total = d3.sum(dataset.map(function(d) {          
			return (d.enabled) ? d.popolazione : 0;                                      
		}));                                                      
		tooltip.select('.regione').html(d.data.regione);        
		tooltip.select('.popolazione').html('Popolazione: '+d3.format(",")(d.data.popolazione));    
		tooltip.select('.percent').html(d3.format(",.2%")(d.data.popolazione / total));          
		tooltip.style('display', 'block');                    
	});                                                           

	path.on('mouseout', function() {                     
		tooltip.style('display', 'none'); 
	});

	path.on('mousemove', function(d) { 
		tooltip.style('top', (d3.event.layerY + 10) + 'px') 
		.style('left', (d3.event.layerX + 10) + 'px'); 
	});

	path.on("mouseenter", function(d) {
        d3.select(this)
           .attr("stroke","white")
           .transition()
           .duration(100)
           .attr("d", arcOver)             
           .attr("stroke-width","none");
    })
    
    path.on("mouseleave", function(d) {
        d3.select(this).transition()            
           .attr("d", arc)
           .attr("stroke","none");
    });

	path.on('click', function(d) { 
		switchData(d);
		tooltip.style('display', 'none');
		update(); 
	});

	// define legend
	var legend = svg.selectAll('.legend') 
	.data(color.domain()) 
	.enter() 
	.append('g') 
	.attr('class', 'legend') 
	.attr('transform', function(d, i) {                   
		var height = legendRectSize + legendSpacing; 
		var offset =  height * color.domain().length / 2; 
		var horz = 18 * legendRectSize; 
		var vert = i * height - offset;  
		return 'translate(' + horz + ',' + vert + ')';  
	});

	legend.append('rect')
	.attr('width', legendRectSize)
	.attr('height', legendRectSize)
	.style('fill', color)
	.style('stroke', color)                                   
	.on('click', function(regione) {
	      var rect = d3.select(this);                             
	      var enabled = true;                                     
	      var totalEnabled = d3.sum(dataset.map(function(d) {     
	        return (d.enabled) ? 1 : 0;                           
	      }));                                                    
	      if (rect.attr('class') === 'disabled') {                
	        rect.attr('class', '');                               
	      } else {                                                
	        if (totalEnabled < 2) return;                         
	        rect.attr('class', 'disabled');                       
	        enabled = false;                                      
	      }                                                       
	      pie.value(function(d) {                                 
	        if (d.regione === regione) d.enabled = enabled;           
	        return (d.enabled) ? d.popolazione : 0;                     
	    });                                   
	      update();                      
	  });                                                      
	legend.append('text')
	.attr('x', legendRectSize + legendSpacing)
	.attr('y', legendRectSize - legendSpacing)
	.text(function(d) { return d; });


