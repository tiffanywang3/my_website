function ArithGeo(arr) { 
	var diffArr = [];
  	for (var i = 1; i < arr.length; i++){
    	diffArr.push(arr[i] - arr[i-1]);
    }; 

  	if(arraySame(diffArr)){
    	return "Arithmetic";
    };
  
  	var geoArr = [];
  	for (var i = 1; i < arr.length; i++){
    	geoArr.push(arr[i] / arr[i-1]);
    };

  if(arraySame(geoArr)){
  	return "Geometric";
  };
  
  return -1;
}
   

function arraySame(array){
 var first = array[0];
      for(var i = 0; i < array.length; i++){
      if( first !== arr[i]){
          return false;
      };
    };
    return true;
}


arr => [1,3,5,7]

[2,2,2]

isSequence => true
diff => 1
i => 0
  does diff === arr[i] (AKA 2)
    YES! So do nothing ...
i => 1
  does diff == arr[i] (AKA 2)