// Load google's Visualization API and charting package.
google.charts.load('current', {
	// 'current' points you to the current version of the API, rather than a specific version
	'packages' : ['corechart', 'line']
	// this is the package we will use to make our chart
});

// After Google gets the corechart package, execute the km_makes_a_chart function
// (don't try to execute the km_makes_a_chart function before the package has loaded)
google.charts.setOnLoadCallback(draw_many_charts);

function draw_many_charts() {
	km_makes_a_pie_chart();
	km_makes_a_line_chart();
	km_makes_a_bar_chart();
}

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and then draws it.
function km_makes_a_pie_chart() {

	// Calls google's DataTable recipe
	var km_gorgeous_data = new google.visualization.DataTable();
	//specifies what the column value type and headings will be
	km_gorgeous_data.addColumn('string', 'Time Allocation');
	//column number 2
	km_gorgeous_data.addColumn('number', 'Hours');
	//adds rows into the DataTable, matching the syntax I defined above in the addColumn function
	//references the data that I've loaded into variables in the data.js file
	km_gorgeous_data.addRows(km_gorgeous_data_info);

	// Customization area to define what we want the chart to look like.
	// See https://developers.google.com/chart/interactive/docs/basic_customizing_chart#specify-options
	var km_gorgeous_chart_options = {
		//The string for the title that will appear at the top
		'title' : 'How I Spend My Day',
		//how wide my chart will be, in pixels
		'width' : 500,
		//how high my chart will be, in pixels
		'height' : 400,
		//what colors my char will use to draw the pie chart (chosen from Pantone colors, obvs)
		'colors' : ['#EABEDB', '#E56DB1', '#DA1884', '#A50050', '#910048'],
		//the font I want to use in the body of the chart
		'fontName' : 'Tahoma',
		//whether I want my legend to appear as a static bit (default), or when you mouse over the slices
		'legend.position' : 'labeled',
		//an object that defines the styling for my title
		'titleTextStyle' : {
			fontName : 'Helvetica',
			bold : true,
			fontSize : 18
		}
	};

	// This variable stores the results of the PieChart function, called from Google's charting package
	// PieChart takes a document function (a native javascript function, refers to an html document)
	// getElement lets you retrieve a tagged thing in an html file.  ById means it looks for a tag.
	// All of that means that getElementById is retrieving something tagged 'chart_div'
	var day_pie = new google.visualization.PieChart(document.getElementById('day_pie_container'));
	day_pie.draw(km_gorgeous_data, km_gorgeous_chart_options);
}

//my function to make a pretty line chart
function km_makes_a_line_chart() {

	//Calls google's DataTable recipe (again)
	var km_line_data = new google.visualization.DataTable();
	//specifies what the line value type and headings will be
	//this one is just time, I don't really want it labeled
	km_line_data.addColumn('number', 'X');
	//column 2 is number of kids in SF
	km_line_data.addColumn('number', 'Children living in San Francisco');
	//adds my data into the datatable object
	km_line_data.addRows(km_line_data_content);

	//an object that stores all the customizations I want to make to my line chart
	var km_line_chart_options = {
		//title for my whole chart
		title : 'The number of children living in San Francisco plummetted from 1970 to 1980',
		//gives a title to my horizontal axis, and tells it where I want my gridlines to be
		hAxis : {
			title : 'Year',
			format : '',
			ticks : [1970, 1975, 1980]
		},
		//gives a title to the line it drew
		vAxis : {
			title : 'Children'
		},
		//tells the chart what colors I want to use to draw things (sticking with pink)
		colors : ['#DA1884'],
		//puts the legend at the bottom, so you can read it
		legend : {
			position : 'bottom'
		},
		//tells it how tall to draw the line chart
		height : 500,
		//tells it how wide to make the line chart
		width : 400
	};

	// This variable stores the results of the LineChart function, called from Google's charting package
	// LineChart takes a document function (a native javascript function, refers to an html document)
	// getElement lets you retrieve a tagged thing in an html file.  ById means it looks for a tag.
	// All of that means that getElementById is retrieving something tagged 'kids line container'
	var kids_line = new google.visualization.LineChart(document.getElementById('kids_line_container'));
	kids_line.draw(km_line_data, km_line_chart_options);
}

function km_makes_a_bar_chart() {
	//Calls google's arrayToDataTable recipe
	//populates it with the data I've loaded into the UNHCR_refugee_country_data variable in the data.js file
	var km_bar_chart_data = google.visualization.arrayToDataTable(UNHCR_refugee_country_data);

	//an object that stores all the customizations I want to make to my bar chart
	var km_bar_chart_options = {
		//title for the whole chart
		title : 'Refugees by country of origin',
		//gives a title to my horizontal axis, and tells it where I want my gridlines to be
		hAxis : {
			title : 'Refugee Population',
			format : '###,###',
			ticks : [0,50000,100000,150000,200000,250000]
		},
		//gives a title to the line it drew
		vAxis : {
			title : 'Country'
		},
		//tells the chart what colors I want to use to draw things (sticking with pink)
		colors : ['#DA1884', '#E56DB1'],
		//tells it how tall to draw the line chart
		height : 500,
		//tells it how wide to make the line chart
		width : 800
	};

	// This variable stores the results of the LineChart function, called from Google's charting package
	// LineChart takes a document function (a native javascript function, refers to an html document)
	// getElement lets you retrieve a tagged thing in an html file.  ById means it looks for a tag.
	// All of that means that getElementById is retrieving something tagged 'kids line container'
	var refugee_bar = new google.visualization.BarChart(document.getElementById('refugee_bar_container'));
	refugee_bar.draw(km_bar_chart_data, km_bar_chart_options);
}
