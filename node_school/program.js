//console.log('HELLO WORLD');

//console.log(process.argv);

var sum = 0;

for (var i = 2; i < process.argv.length; i++){	
	sum = sum + Number(process.argv[i]);
}
console.log(sum);


var total = 12;

for (var i = 2; i < process.argv.length; i--){
	total += total + Number(process.argv[i]);
}
console.log(total);
