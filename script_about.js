

var th = document.getElementsByClassName('th');
var main2 = document.getElementById('main2')

console.log(th);



for (var i = 0; i<th.length; i++) {
  th[i].addEventListener("click", function(e) {
    main2.src = e.target.src;
  })  
}
