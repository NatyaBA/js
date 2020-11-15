/*----------Reverse string------*/

function Reverse() {
    return s.split("").reverse().join("");
}

function Reverse() {
    for (i = str.length-1; i >= 0; i--) 
        strRev += str[i];
    return str;
}

/*-----------End With-----------*/

function EndWith() {
    str = str.slice(0, -1);
    return str;
} 

function EndWith() {
    for(i = 0; i < str.length; i++)
        if (i == str.length-1) {
            str.length--;
            break;
        }
    return str;
}

/*----------Start With----------*/

function StartWith() {
    str = str.substr(7, 6);
    return str;
}

function StartWith() {
    for(i = 0; i < str.length; i++)
        if ((i >= 5) && (i <= str.length-1)) 
            str.length--;
    return str;
}

/*----------Is Camel Case-------*/

function CamelCase() {
    return str.toCamelCase(str);
}

function CamelCase() {
    for(i = 0; i < str.length; i++)
        if (str[i]==' ') {
            str.length--;
            str[i+1] = to.UpperCase();
        }     
    return str;         
}

/*----------Is Snake Case--------*/

function SnakeCase() {
    return str.toSnakeCase(str);
}

function SnakeCase() {
    for(i = 0; i < str.length; i++)
        if (str[i]==' ')
            str[i]='_';
    str = text. toLowerCase();        
    return str;        
}

/*----------Is NaN---------------*/

function Nan() {
    return isNaN(num)
}
 
function Nan() {
   return num===Nan;     
}