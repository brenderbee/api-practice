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
          resolve(xhr.response);
          } else {
          console.log('FUUUUUUUUUU');
          reject(Error(xhr.statusText));
          }
      }
    });
    let dino = promise.then(function(response) {
      let output = JSON.parse(response);
      console.log("after promise" + output);
      return output;
    }, function(error) {
      alert("There has been an error!: " + error);
    });
    return dino;
  }
}

export { API };
