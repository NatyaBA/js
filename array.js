/*_______________INITIAL_____________*/

function initial() {
  array = array.initial();
  return array;
}

/*_______________COMPACT_____________*/

function compact() {
  array = array.filter(el) 
  return el != null;
}

/*_______________UNION_______________*/

function union(array1, array2) {
    for (i = array1.length-1; i >= 0; -- i)
       obj[array1[i]] = array1[i];
   
    for (i = array2.length-1; i >= 0; -- i)
       obj[array2[i]] = array2[i];
   
    for (n in obj)
    {
    if (obj.hasOwnProperty(n)) 
        res.push(obj[n]);
    }
   
    return res;
  }

/*_______________RANGE_______________*/ 

function range(start, end) {
    c = end - start + 1;
    while ( c-- ) {
        array[c] = end--
    }
    return array;
}

