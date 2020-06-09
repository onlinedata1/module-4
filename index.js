var array = new Array();
array[0] = "Yaakov";
array[1] = "Rabika";
array[2] = "John";
array[3] = "Fariha";
array[4] = "javeria";
//console.log(array.length );
for (var i = 0; i < array.length ; i++) {
	var value = array[i][0] ;
	if( value=== "J" || value=== "j" )
	{
		console.log(" Goodbye "+array[i] );
	}
	else
	{
		console.log(" Hello "+array[i] );
	}
}










