// var a = 10;
// var b = 50;
// var c = 50;
// for(var j = 10; j < 1000; j += 50){
//     for(var i = 10; i<1000; i += 50) {
//         var myCircle = new Path.Circle(new Point(i, j), 10);
//         myCircle.fillColor = 'rgb(' + a + ', ' + b + ', ' + c + ')';
//         a+=1;
//         b+=1;
//         c+=1;
//         if (a==255 || b==255 || c==255){
//             a=100;
//             b=100;
//             c=100;    
//         }
//     }
// }
// The starting position of the line
// The starting position of the line
var myCircle = new Path.Circle(new Point(100, 100), 10);
function onKeyDown(event) {
    console.log("function");
	if(event.key == 'a') {
        myCircle = new Path.Circle(new Point(100, 100), 10);
        myCircle.fillColor = 'rgb(100, 100, 100)';
        console.log("a");
	}

	if(event.key == 'd') {
		myCircle = new Path.Circle(new Point(100, 100), 50);
        myCircle.fillColor = 'rgb(100, 100, 100)';
        console.log("a");
	}

	if(event.key == 'w') {
		myCircle = new Path.Circle(new Point(100, 100), 200);
        myCircle.fillColor = 'rgb(100, 100, 100)';
        console.log("a");
	}

	if(event.key == 's') {
		myCircle = new Path.Circle(new Point(100, 100), 100);
        myCircle.fillColor = 'rgb(100, 100, 100)';
        console.log("a");
	}
	
}