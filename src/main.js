import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// import { API } from './scripts.js';

$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    let inputParagraph = parseInt($("#paragraph").val());
    let inputWords = parseInt($("#word").val());

// Javascript API request
    // let promise = new Promise(function(resolve, reject) {
    //   const xhr = new XMLHttpRequest();
    //   xhr.open('GET', `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${inputParagraph}&words=${inputWords}`);
    //   xhr.send();
    //   xhr.onload = function() {
    //     if (this.status === 200) {
    //       resolve(xhr.response);
    //       } else {
    //       reject(Error(xhr.statusText));
    //       }
    //   }
    // });
    // promise.then(function(response) {
    //   let arrays = JSON.parse(response);
    //   arrays.forEach(function(array) {
    //     let string = array.join(' ');
    //     $(".outputDinos").append('<p>' + string + '</p>');
    //   });
    // }, function(error) {
    //   $(".outputDinos").append("There has been an error!: " + error);
    // });
// end of Javascript API request

// Jquery API request
// jQuery's ajax function returns a promise, the reason you aren't working with
// it here, is because we are instead using the success and error handlers on the
// ajax method
    $.ajax({
      url: 'http://dinoipsum.herokuapp.com/api/',
      type: 'GET',
      data: {
        format: 'json',
        paragraphs: inputParagraph,
        words: inputWords
      },
      //   success(response) { This is how you write an ES6 method or function
      success: function(response) {
        // jQUery parses the response for you, no need for JSON.parse
        response.forEach(function(array) {
          let string = array.join(' ');
          $(".outputDinos").append('<p>' + string + '</p>');
        });
      },
      error: function() {
        $(".outputDinos").append("There has been an error!");
      }
    });
// end of Jquery API request

    // let myRequest = $.ajax({
    //   url: 'http://dinoipsum.herokuapp.com/api/',
    //   type: 'GET',
    //   data: {
    //     format: 'json',
    //     paragraphs: inputParagraph,
    //     words: inputWords
    //   });
    //
    // myRequest.then((response) => {
    //   response.forEach((array) => {
    //     let string = array.join(' ');
    //     $(".outputDinos").append('<p>' + string + '</p>');
    //   });
    // }, (error) => {
    //   $(".outputDinos").append("There has been an error!");
    // })

  });
});
