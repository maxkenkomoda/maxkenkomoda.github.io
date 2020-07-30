//define  skill card element
const html = document.getElementById('HTML');
const css = document.getElementById('CSS');
const js = document.getElementById('JS');
const git = document.getElementById('GIT');
const github = document.getElementById('GitHub');
const ruby = document.getElementById('Ruby');
const python = document.getElementById('Python');
const rails = document.getElementById('Rails');
const aws = document.getElementById('AWS');
const vim = document.getElementById('Vim');
const mysql = document.getElementById('MySQL');
const autocad = document.getElementById('AutoCAD');
const lr = document.getElementById('Lr');
const xd = document.getElementById('XD');
const house_keeper = document.getElementById('House_Keeper');
const uk = document.getElementById('UK');
const ger = document.getElementById('GER');
const por = document.getElementById('POR');
const detail = document.getElementById('skill-detail');




//skills description javascript
html.addEventListener ('mouseenter', function () {
  description (
    'hoge', 
    'hogehogehoge'
  );
});

html.addEventListener ('mouseleave', function () {
  description_delete ();
});




//add node function
function description (title, message) {
  //create  <h3> 
  var h3 = document.createElement('h3');
  h3.textContent = title
  //create  <p> 
  var paragraph = document.createElement('p');
  paragraph.textContent = message
  //add paragraph as children of div:skill-detail
  detail.appendChild(h3);
  detail.appendChild(paragraph);
}

//delete node function
function description_delete (id) {
  //remove paragraph
  detail.textContent = null;
}
