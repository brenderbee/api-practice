class API {



  APIRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=2&words=30');
    xhr.onload = function() {
    	if (this.status === 200) {
    		var responseObject = this.response;
    		console.log(this.response);
    		console.log(responseObject);
    		return responseObject;
        } else {
    		console.log('FUUUUUUUUUU');
        }
    };
    xhr.send();
  }

}

export { API };
