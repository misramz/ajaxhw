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


function testArea (obj) {
  return `
  <div class="formElement" id="${obj.id}">
  <i class="fa ${obj.icon}"></i>
  <textarea placeholder="${obj.label}"</textarea>
  </div>`;
}
function select (obj) {

  var options = '';

  obj.options.forEach( function (option) {
    options += `<option value="${option.value}">${option.label}</option>`;
  });

  return  `
    <div class="formElement" id="${obj.id}">
      <select>
        <option>${obj.label}</option>
        ${options}
      </select>
    </div>
  `;
}



function buildForm (dataArr) {
  dataArr.forEach( function (field) {
     var html = inputText(field);
     myform.append(html);
  });
}
