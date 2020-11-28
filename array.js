/*_______________INITIAL_____________*/

function Initial() {
  let array = [10];

  if (array == "") 
      throw Error('Empty array')
  else
      return array.initial();
}

function initial() {
    let array = [10], count;

    if (array == "") 
        throw Error('Empty array')
    else {   
        array = array[array.length - count];
        return array;
    }
}

/*_______________COMPACT_____________*/

function compact() {
    let array = [10];

    if (array == "")
        throw Error('Empty array')
    else
        return array.compact(array) 
}


function Compact() {
    let array = [10], el; 

    if (array == "")
        throw Error('Empty array')
    else {
        for (i = 0; i < length; i++)
            if (array[i] == null)
                delete array[i];     
        return array;
    }
}
/*_______________UNION_______________*/

function union(array1, array2) {
    if (array == "")
        throw Error('Empty array')
    else    
        return array.union(array1, array2);
}

function Union(array1, array2) {
    if (array == "")
        throw Error('Empty array')
    else {    
        for (i = array1.length-1; i >= 0; -- i)
            obj[array1[i]] = array1[i];
   
        for (i = array2.length-1; i >= 0; -- i)
           obj[array2[i]] = array2[i];
   
        for (n in obj) {
            if (obj.hasOwnProperty(n)) 
                res.push(obj[n]);
        }
        return res;
    }
}  

/*_______________RANGE_______________*/ 

function range(start, end) {
    if ((start < end) && (array != ""))
        return array.range(start, end);
    if (array == "")
        throw Error('Empty array')
    if (start >= end) 
        throw Error('Wrong parameters')
}

function Range(start, end) {
    if ((start < end) && (array != "")) {
        c = end - start + 1;
    
        while ( c-- ) {
            array[c] = end--;
        }
        return array;
    }
    if (array == "")
        throw Error('Empty array')
    if (start >= end) 
        throw Error('Wrong parameters')
}
