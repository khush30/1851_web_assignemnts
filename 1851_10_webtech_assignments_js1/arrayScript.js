function sumFunc(arr)
{
    sum = 0;
    for( i=0 ; i<arr.length ; i++)
        sum += arr[i];
    return sum;
}

function minFunc(arr)
{
    min = arr[0];
    for( i=1 ; i<arr.length ; i++)
        if(arr[i] < min)
            min = arr[i];
    return min;
}

function maxFunc(arr)
{
    max = arr[0];
    for( i=1 ; i<arr.length ; i++)
        if(arr[i] > max)
            max = arr[i];
    return max;
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
