
  
  
 /* var followCursor = (function() {
    var s = document.createElement('div');
    s.style.position = 'absolute';
    s.style.margin = '0';
    s.style.padding = '5px';
    s.textContent = "♪"
  
    return {
      init: function() {
        document.body.appendChild(s);
      },
  
      run: function(e) {
        var e = e || window.event;
        s.style.left = (e.clientX - 5) + 'px';
        s.style.top = (e.clientY - 5) + 'px';
        getMouseCoords(e);
      }
    };
  }());
  
  window.onload = function() {
    followCursor.init();
    document.body.onmousemove = followCursor.run;
  }
*/
function contactScroll() {
  window.scrollTo(0, 1000);
}
function homeScroll() {
  window.scrollTo(0,0);
}
function aboutScroll() {
  window.scrollTo(0, 500);
}

function openModal() {
  document.querySelector('#background-modal').style.display = 'flex';
}
function closeModal() {
  document.querySelector('#background-modal').style.display = 'none';
}
function ifOther() {
  if (document.getElementById('where-heard-from-input').value == 'other') {
    document.querySelector('#if-other').style.display = 'flex';
  }
  else {
    document.querySelector('#if-other').style.display = 'none';
  }
}

let emailList = [];
let nameList = [];

function collectEmail() {
  
  emailList.push(document.getElementById('email').value);
  nameList.push(document.getElementById('name-input-input').value);
}

console.log(emailList);
console.log(nameList);