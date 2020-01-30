function displayC(arr)
{
    var result = '';
    for( i=0 ; i<arr.length ; i++)
        result += " " + arr[i];
    return result;
}

function sumFunc(arr)
{
    sum = 0;
    for( i=0 ; i<arr.length ; i++)
        sum += arr[i];
    return sum;
}

function minFunc(arr)
{
    var pos = 0;
	var min = arr[0];
    for( i=1 ; i<arr.length ; i++)
        if(arr[i] < min)
        {
			min = arr[i];
			pos=i;
		}
    return pos;
}

function maxFunc(arr)
{
    var max = arr[0];
	var pos = 0;
    for( i=1 ; i<arr.length ; i++)
        if(arr[i] > max)
        {
			max = arr[i];
			pos=i;
		}
    return pos;
}

function sortFunc(arr)
{
    for( i = 1 ; i < arr.length ; i++ )
		for(j = 0 ; j < arr.length-i ; j++ )
			if(arr[j] > arr[j+1])
			{
				arr[j] = arr[j] + arr[j+1];
				arr[j+1] = arr[j] - arr[j+1];
				arr[j] = arr[j] - arr[j+1];
			}
	return arr;
}
