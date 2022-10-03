function header(el) {
  const $div = document.createElement("div")
  $div.innerHTML = `
    <header class="header">
    <nav class="nav">
    <a class="header__logo__link" href="/index.html"><span class="nav__logo">GUIDO</span></a>

      <i class="fa-solid fa-bars btn"></i>
      <ul class="nav___links">
        <li><a href="../pages/portfolio.html">Portfolio</a></li>
        <li><a href="../pages/servicios.html">Servicios</a></li>
        <li><a href="../pages/contact.html">Contact</a></li>
      </ul>
    </nav>
    <div class="screen__links">
      <i class="fa-solid fa-x btn--x"></i>
      <ul>
      <li><a href="../pages/portfolio.html">Portfolio</a></li>
      <li><a href="../pages/servicios.html">Servicios</a></li>
      <li><a href="../pages/contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="header__text">
      <h1><span>Hola</span></h1>
      <h2><span>Soy Guido</span></h2>
    </div>
  </header>
    `
  el.appendChild($div)
  const $btn = document.querySelector(".btn")
  const $btnX = document.querySelector(".btn--x")
  const $list = document.querySelector(".screen__links")
  $btn.addEventListener("click", e => {
    if (e.target.matches(".btn")) {
      $list.style.display = "block"

    }

  })
  $btnX.addEventListener("click", e => {

    $list.style.display = "none"
  })

}
