function searchword(str) {
			var innerText = document.getElementById("para");
			var innerHTML = innerText.innerHTML;
			var index = innerHTML.indexOf(str);
			if (index >= 0) {
				innerHTML = innerHTML.substring(0,index) + "<span background-color='yellow'" + innerHTML.substring(index,index+str.length) + "</span>" + innerHTML.substring(index + str.length);
				innerText.innerHTML = innerHTML;
			}
/*
			var pos=0;
			
			var len = word.length;
			var len1 = text.length;
			var text1 = text;

			var i;
			//alert(len);
			if(document.getElementById("text").checked == true) 
			{
				pos = text1.search(word);
				if(pos!=-1) 
				{	
					alert("text found at position "+ pos);	
				}
				else
				{
					alert("no match found");
				}							
			}

			if(document.getElementById("ignorecase").checked == true) 
			{
				text = text.toUpperCase();
				word=word.toUpperCase();
				pos = text.search(word);
				if(pos!=-1) 
				{	
					alert("text found at position "+ pos);	
				}
				else
				{
					alert("no match found");
				}							
			}

			if(document.getElementById("matchword").checked == true) 
			{
				text = text.toUpperCase();
				word=word.toUpperCase();
				i=0;
				var j=0,flag=0;
				// pos = text.search(word);
				while(i<len1)
				{
					if(text[i]==word[j])
					{
						j++;
						i++;
						if(text[i]==" ")
						{
							pos=parseInt(i)-parseInt(len);
							alert("match found" + " at position " +pos);
							flag=1;
							break;
						}
						continue;						
					}
					i++;
					j=0;
				}
				if(flag==0)
				{
					alert("no match found");
				}

											
			}
			if(document.getElementById('regex').checked)
			{
				  //alert(text);
				  var pattern=word;
				  // alert(pattern);
				  pos=text.search(pattern);
				  alert(pos);
			}
*/
		}	
