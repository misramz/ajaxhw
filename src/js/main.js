import $ from 'jquery';

var myform = $('.myForm');
var url = 'http://json-data.herokuapp.com/forms';
console.log(url);
var dataReq = $.getJSON(url);
// formArea = $('.forminner');
dataReq.then(function (response) {
  buildForm(response);
  console.log(response);
})

function inputText (obj) {
  return `
  <div class="formElement" id="${obj.id}">
  <i class="fa ${obj.icon}"></i>
  <input type="${obj.type}" placeholder="${obj.label}">
  </div>`;
}






function buildForm (dataArr) {
  dataArr.forEach( function (field) {
     var html = inputText(field);
     myform.append(html);
  });
}
