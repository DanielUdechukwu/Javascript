function convertFahrToCelsius(number)
{
	
	function convert(x)
	{
		var solve = (1.8 * x) + 32;
		var celsius = (Math.round((solve*10000))/10000);
		return celsius;
	}
	
	var fahr = number;
	if(Array.isArray(fahr))
	{
		document.write(fahr + " is not a valid number but an Array.");
	}
	else
	{
		var fahrtype = typeof(fahr);
		
		if (fahrtype == "number")
		{
			document.write(convert(fahr));
		}
		else
		{
			var conv = parseInt(fahr);
			var check = conv + 1;
			
			if(!check)
			{	
				if(fahrtype == "object")
				{
					document.write(JSON.stringify(fahr) + " is not a valid number but a " + fahrtype + ".");
				}
				
				if(fahrtype == "string")
				{
					document.write(fahr + " is not a valid number but a " + fahrtype + ".");
				}
			}
			else
			{
				if(typeof(conv) == "number")
				{
					document.write(convert(conv));
				}
			}
		}
	}
}

convertFahrToCelsius(-17.7778);
