function myFunction() { 
	var num = document.getElementById("num").value; 		
	var temp = num;
	var rem;
	var count = 0;
	var res = [];
	
	document.getElementById("res").innerHTML = null;
	
	if(num < 0) temp *= -1;
	
	while(temp >= 1)
	{
		rem = parseInt(temp % 2);
		temp = parseInt(temp / 2);
		res[count] = rem;
		count++;
	}

	if (num == 0) document.getElementById("res").innerHTML = 0;
	else if (num < 0)
	{
		document.getElementById("res").innerHTML = "-";
		while(res.length != 0)
		{
		document.getElementById("res").innerHTML += res.pop(); 
		}		
	}
	else 
	while(res.length != 0)
	{
	document.getElementById("res").innerHTML += res.pop(); 
	}
} 
