import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// import {parseResult} from './scripts.js';

$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    let inputParagraph = parseInt($("#paragraph").val());
    let inputWords = parseInt($("#word").val());

    let promise = new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${inputParagraph}&words=${inputWords}`);
      xhr.send();
      xhr.onload = function() {
        if (this.status === 200) {
          resolve(xhr.response);
          } else {
          reject(Error(xhr.statusText));
          }
      }
    });

    promise.then(function(response) {
      let arrays = JSON.parse(response);
      arrays.forEach(function(array) {
        let string = array.join(' ');
        $(".outputDinos").append('<p>' + string + '</p>');
      });
    }, function(error) {
      $(".outputDinos").append("There has been an error!: " + error);
    });

  });
});
