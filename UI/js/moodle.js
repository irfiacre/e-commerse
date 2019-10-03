var modal = document.getElementById("myModal");
var btn = document.getElementById("click");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const validateUser = (form) => {

    if (form.email.value === 'admin@gh-tech.com' && form.password.value === 'admin@123') {
      window.open('UI/html/admin.html', '_self');
    }
    else {
      window.open('UI/html/products.html');
    }
  
  };
