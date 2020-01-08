function myFunction() {
    var x = document.getElementById("myChocolat");
    x.className = "chocolat";
    
}



function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById('myChocolat').style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById('myChocolat').style.display = "block";
}