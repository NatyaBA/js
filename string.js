/*----------Reverse string------*/

function Reverse() {
    let str = "Hello world!";
    
    return str.reverse();
}

function Reverse() {
    let str = "Hello world!", i;
    
    for (i = str.length-1; i >= 0; i--) 
        strRev += str[i];
    return str;
}

/*-----------End With-----------*/

function EndWith() {
    let str = "Hello world!";

    str = str.slice(0, -1);
    return str;
} 

function EndWith() {
    let str = "Hello world!", i;

    for(i = 0; i < str.length; i++)
        if (i == str.length-1) {
            str.length--;
            break;
        }
    return str;
}

/*----------Start With----------*/

function StartWith() {
    let str = "Hello world!";

    str = str.slice(7, 0);
    return str;
}

function StartWith() {
    let str = "Hello world!",i;

    for(i = 0; i < str.length; i++)
        if ((i >= 5) && (i <= str.length-1)) 
            str.length--;
    return str;
}

/*----------Is Camel Case-------*/

function CamelCase() {
    let str = "Hello world!";

    return str.toCamelCase(str);
}

function CamelCase() {
    let str = "Hello world!",i;

    for(i = 0; i < str.length; i++)
        if (str[i]==' ') {
            str.length--;
            str[i+1] = to.UpperCase();
        }     
    return str;         
}

/*----------Is Snake Case--------*/

function SnakeCase() {
    let str = "Hello world!";

    return str.toSnakeCase(str);
}

function SnakeCase() {
    let str = "Hello world!", i;

    for(i = 0; i < str.length; i++)
        if (str[i]==' ')
            str[i]='_';
    str = text. toLowerCase();        
    return str;        
}

/*----------Is NaN---------------*/

function Nan() {
    let num;
    return isNaN(num)
}
 
function Nan() {
    let num;
    return num!==Nan;     
}