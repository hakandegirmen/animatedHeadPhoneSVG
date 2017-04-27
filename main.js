// Static Values
var greenColor = '#ddf8cc';
var redColor = '#fcd6d6';


// Getting Svg files
var mainSvg = Snap('#mainSvg');
var checkMarkSvg = Snap('#checkMarkSvg');
var nopeMarkSvg = Snap('#nopeMarkSvg');

// Getting objects to manipulate


// MAIN SVG
var mainSvgBoxes = mainSvg.selectAll("#checkBoxes rect");
var extraBoxes = mainSvg.select("#extraBoxes");
var phonesLighs = mainSvg.selectAll("#phonesLight path");
var cablePath = mainSvg.selectAll("#cable path");
var cableLine = mainSvg.selectAll("#cable line");

// CHECK SVG
var checkBoxes = checkMarkSvg.selectAll("#checkBoxes rect");

// NOPE SVG
var nopeBoxes = nopeMarkSvg.selectAll("#nopeBoxes rect");

var mainSvgBoxesJQ = $("#checkBoxes rect");

// for(var i = 0, length1 = mainSvgBoxes.length; i < length1; i++){

// 	mainSvgBoxes[i].attr({
// 		filter: "url(#sofGlow)"
// 	});
// }




function checkToNope()
{	
	// arrange boxes and toggle color
	for(var i = 0, length1 = mainSvgBoxes.length; i < length1; i++){	

		mainSvgBoxes[i].animate({
			x: nopeBoxes[i].attr('x'),
			y: nopeBoxes[i].attr('y'),
			fill: nopeBoxes[i].attr('fill')

		},300);
	};

	// toggle phone lights color
	phonesLighs[0].animate({
		fill: redColor
	}, 300);

	phonesLighs[1].animate({
		fill: redColor
	}, 300);

	// toggle cable color
	cablePath[0].animate({
		fill: redColor,
		stroke: redColor
	}, 300);

	cableLine[0].animate({
		fill: redColor,
		stroke: redColor
	}, 300);

	// toggle extra boxes
	extraBoxes.attr({
		display: 'block'
	});
};





function nopeToCheck()
{
	// arrange boxes and toggle color
	for(var i = 0, length1 = mainSvgBoxes.length; i < length1; i++){

		mainSvgBoxes[i].animate({
			x: checkBoxes[i].attr('x'),
			y: checkBoxes[i].attr('y'),
			fill: checkBoxes[i].attr('fill')

		},300);	
	};

	// toggle phone lights color
	phonesLighs[0].animate({
		fill: greenColor
	}, 300);

	phonesLighs[1].animate({
		fill: greenColor
	}, 300);

	// toggle cable color
	cablePath[0].animate({
		fill: greenColor,
		stroke: greenColor
	}, 300);

	cableLine[0].animate({
		fill: greenColor,
		stroke: greenColor
	}, 300);

	// toggle extra boxes
	extraBoxes.attr({
		display: 'none'
	});
};




// call 
var mainDiv = $("#mainDiv");

mainDiv.click(function(){

	if (!mainDiv.hasClass("nopeSign")) {
		checkToNope();
		mainDiv.toggleClass("nopeSign");
	}
	else
	{	
		nopeToCheck();
		mainDiv.toggleClass("nopeSign");
	}
	
});
	





