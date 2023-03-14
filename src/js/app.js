document.addEventListener('DOMContentLoaded', function() {
    let burger = document.getElementById('burger');
    burger.addEventListener('click', function () {
        burger.classList.toggle('open');
    })
}); 

document.getElementById('burger').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle("open");
  })

  const anchors = document.querySelectorAll('a[href^="#"]')
    for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() 
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}