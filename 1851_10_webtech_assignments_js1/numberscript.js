function factorial(x)
{
    fact=1;
    for( i=2 ; i<=x ; i++ )
    fact*=i;
    return fact;
}

function isEven(x)
{
    if(x%2==1)
    return("number is odd");
    else
    return("number is even");
}

function isPrime(x)
{
    flag=1;
    for(i=2;i<=x/2 && flag==1; i++)
    if(x%i==0)
    flag=0;
    if(flag==0)
    return("not prime");
    else
    return("is prime");
}

function reverseNumber(y)
{
    reversed=0;
    x=parseInt(y,10);
    while(x>0)
    {
        reversed = (reversed*10) + (x%10);
        x=parseInt(x/10,10);
    }
    return reversed;
}

function isArmstrong(y)
{
    sum = 0;
    x=parseInt(y,10);
    while(x>0)
    {
        temp = x%10;
        sum += temp*temp*temp;
        x=parseInt(x/10,10);
    }
    if( y == sum)
        return("Number is an Armstrong number");
    else
        return("Number is not an Armstrong number");
}

function fibbonacci(x)
{
    if(x==1)
        return 0;
    else if(x==2)
        return 1;
    else
    {
        f1 = 0;
        f2 = 1;
        for( i=2 ; i<x ; i++)
        {
            f3 = f1 + f2;
            f1 = f2;
            f2 = f3;
        }
        return f2;
    }
}

function fibbonacciSeries(x)
{
    var series;
    if(x==1)
        series = "0";
    else if(x==2)
        series = "0 1";
    else
    {
        f1 = 0;
        f2 = 1;
        series = "0 1";
        for( i=2 ; i<x ; i++)
        {
            f3 = f1 + f2;
            series = series + " " + f3;
            f1 = f2;
            f2 = f3;
        }
    }
    return series;
}