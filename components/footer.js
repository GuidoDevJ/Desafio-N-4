function footer(el) {
  const $div = document.createElement("div")
  $div.innerHTML = `
    <footer class="footer">
    <div class="footer__text">
      <h2>Guido</h2>
    </div>
    <div class="footer__links">
      <span class="insta"
        >Instragram
        <i class="bx bxl-instagram"></i>
      </span>
      <span class="insta"
        >Linkedin
        <i class="bx bxl-linkedin-square"></i>
      </span>
      <span class="insta"
        >Instragram
        <i class="bx bxl-github"></i>
      </span>
    </div>
  </footer>
    `
  el.appendChild($div)


}

