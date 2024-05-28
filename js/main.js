const headerEl = document.getElementById("header")

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY
    if (scrollPos > 100) {
    headerEl.classList.add("header_mini")
  } else {
    headerEl.classList.remove("header_mini")
  }
  /*console.log(headerH)*/
  /*document.getElementsByClassName('header')[0].style.height */
});

window.addEventListener('resize', function() {
  const  headerH   = headerEl.offsetHeight
  if (headerH > 125) {
    headerEl.classList.add("header_mini")
  } else {
    headerEl.classList.remove("header_mini")
  }

  console.log(headerH);
});
