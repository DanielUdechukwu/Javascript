
function checkYuGiOh(n)
{
	window.chi = "";
	
	function reduce(i)
	{
		
		var yu = "yu"; //factor of 2
		var gi = "gi"; //factor of 3
		var oh = "oh"; //factor of 5
		str = "";
		
		if(i == 1)
		{
			str += i;
		}
		
		while(i != 1)
		{
			if((i % 2) == 0)
			{
				var n = 2;
				if((str.length) >= 1)
				{
					str += "-"+yu;
				}
				else
				{
					str += yu;
				}
			}
			else if((i % 3) == 0)
			{
				var n = 3;
				if((str.length) >= 1)
				{
					str += "-"+gi;
				}
				else
				{
					str += gi;
				}
			}
			else if((i % 5) == 0)
			{
				var n = 5;
				if((str.length) >= 1)
				{
					str += "-"+oh;
				}
				else
				{
					str += oh;
				}
			}
			else
			{
				str += i;
				break;
			}
			i = (i/n);
		}
		
		return(str);
	}
	
	if(typeof(n) == "number")
	{
		var arr = Array();
		for(var i = 1; i<=n; i++)
		{
			arr.push(reduce(i));
		}
		
		document.write("["+arr+"]");
	}
	else
	{
		document.write("Invalid Parameter: '"+ n +"'");
	}
}

checkYuGiOh(8);
