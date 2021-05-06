const requestURL = 'https://jsonplaceholder.typicode.com/posts'

function sendRequest(method, url, body=null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url);
        xhr.responseType ='json';  // получаем объект
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            }
            else {
               resolve(xhr.response);  // all posts
               // resolve(xhr.response[23]);  // post №23
            }
        }    
        xhr.onrerror = () => {  // ошибка
            reject(xhr.response);  
        }
        xhr.send(JSON.stringify(body));  //отправляем результат
    })
}
sendRequest('GET', requestURL)
    .then (data => console.log(data))
   .catch(err => console.log(err))

const body =  {
    userId: 3,
    id: 21,
    title: "asperiores ea ipsam voluptatibus modi minima quia sint"
}

sendRequest('POST', requestURL, body)
    .then (data => console.log(data))
    .catch(err => console.log(err))