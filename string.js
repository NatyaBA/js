/*----------Reverse string------*/

function Reverse() {
    const str = "Hello world!";
    if (str == "") 
        throw Error('Empty array');
    if (str.length == 1)       
        return str;
    else
        return str.reverse();
}

function Reverse() {
    const str = "Hello world!", i;
    
    if (str == "") 
        throw Error('Empty array');

    for (i = str.length-1; i >= 0; i--) { 
        if (str.length == 1)   
            return str;
        else {
            strRev += str[i];     
            return str;
        }
    }
}

/*-----------End With-----------*/

function EndWith() {
    const str = "Hello world!";
    
    if (str == "")
        throw Error('Empty array');  
    else    
        return str.slice(0, -1);
} 

function EndWith() {
    const str = "Hello world!", i;

    for(i = 0; i < str.length; i++)
        if (str.length == 1)
            return str;
        if (str == "")  
            throw Error('Empty array');
        else {   
            if (i == str.length-1) {
                str.length--;
                break;
            }
            return str;
        }
    }        

/*----------Start With----------*/

function StartWith() {
    const str = "Hello world!";
     
    if (str == "")
        throw Error('Empty array');
    else    
        return str.slice(7, 0);
}

function StartWith() {
    const str = "Hello world!",i;

    for(i = 0; i < str.length; i++)
        if (str == "")
            throw Error('Empty array');
        else    
            if ((i >= 5) && (i <= str.length-1)) { 
                str.length--;
                return str;
            }
}

/*----------Is Camel Case-------*/

function CamelCase() {
    const str = "Hello world!";
    
    if (str == "")
        throw Error('Empty array');
    else    
        return str.toCamelCase(str);
}

function CamelCase() {
    const str = "Hello world!",i;

    for(i = 0; i < str.length; i++)
        if (str == "")
            throw Error('Empty array');
        else {
            if (str[i]==' ') {
                str.length--;
                str[i+1] = to.UpperCase()
            }         
            return str;
        }             
}

/*----------Is Snake Case--------*/

function SnakeCase() {
    const str = "Hello world!";
    
    if (str == "")
        throw Error('Empty array');
    else
        return str.toSnakeCase(str);
}

function SnakeCase() {
    const str = "Hello world!", i;

    for(i = 0; i < str.length; i++)
        if (str == "")
            throw Error('Empty array');
        else {    
            if (str[i]==' ')
                str[i]='_';
            str = text. toLowerCase();        
            return str;        
        }
    }        

/*----------Is NaN---------------*/

function Nan() {
    let num;
    return isNaN(num)
}
 
function Nan(x) {   
    
    if (NaN === x) 
        return true;
    else
        return false;
}