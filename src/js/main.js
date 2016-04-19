import $ from 'jquery';

var url = 'http://json-data.herokuapp.com/forms';

var dataReq = $.getJSON(url);

var myform = $('.myForm');
// formArea = $('.forminner');

dataReq.then(function (res) {
  buildForm(res);
  console.log(res);
})


function inputText (obj) {
  return `
  <div class="formElement" id="${obj.id}">
    <i class="fa ${obj.type}"></i>
    <input type="${obj.type}" placeholder="${obj.label}">
  </div>`;
}

function buildForm (dataArr) {
  dataArr.forEach( function (field) {
    //  var html = input(field);
  })
}
