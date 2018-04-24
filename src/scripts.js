export function parseResult(arrayOfArrays) {
  console.log(arrayOfArrays);
  let dinoStrings = [];
  let outputString = "";
  for (var i = 0; i < arrayOfArrays.length; i++) {
    dinoStrings.push(arrayOfArrays[i].join(' '));
  }
  // arrayOfArrays.forEach(function(array){
  //   dinoStrings.push(array.join(' '));
  // });
  outputString = dinoStrings.join(' ');
  return outputString;
}

class API {

  APIRequest() {
    let promise = new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=2&words=30');
      xhr.send();
      xhr.onload = function() {
        if (this.status === 200) {
          console.log("Successful call " + xhr.response);
          console.log("type of response" + xhr.responseType);
          console.log("text of response" + xhr.responseText);
          resolve(xhr.response);
          } else {
          console.log('FUUUUUUUUUU');
          reject(Error(xhr.statusText));
          }
      }
    });
    let returnValue = promise.then(function(response){});
    console.log("after promise " + returnValue);
    return returnValue;
    // const xhr = new XMLHttpRequest();
    // let responseObject = '';
    // xhr.open('GET', 'http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=2&words=30');
    // xhr.onload = function() {
    // 	if (this.status === 200) {
    //     console.log(this.response);
    // 		responseObject = this.response;
    //     } else {
    // 		console.log('FUUUUUUUUUU');
    //     }
    //   return responseObject;
    // };
    // xhr.send();
  }
}

export { API };
