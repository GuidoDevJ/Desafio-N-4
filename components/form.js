function form(el) {
    const $div = document.createElement("div")
    $div.innerHTML = `
    <div class="form" id="write">
        <h2>ESCRIBEME</h2>
        <form action="" class="formulario">
            <label for="name">NOMBRE</label>
            <input id="name" class="form__input__name"></input>
            <label for="email">EMAIL</label>
            <input id="email" class="form__input__email"></input>
            <label for="message">Mensaje</label>
            <textarea name="" id="message" cols="30" rows="10" class="form__input__textarea"></textarea>
            <button class="btn__submit">Enviar</button>
        </form>
    </div>
    `
    el.appendChild($div)
    enviarDatos()
}
function enviarDatos() {
    const $btn = document.querySelector(".btn__submit")
    const $name = document.querySelector(".form__input__name")
    const $email = document.querySelector(".form__input__email")
    const $textArea = document.querySelector(".form__input__textarea")
    const $formulario = document.querySelector(".formulario")

    $btn.addEventListener("click", e => {
        const emailMe = "guidogauna9@gmail.com"
        const url = "https://apx-api.vercel.app/api/utils/dwf"
        e.preventDefault()
        let $btnError = document.createElement("div")
        $btnError.classList.add("btn-alert")
        let $btnSucces = document.createElement("div")
        $btnSucces.classList.add("btn-success")
        if ($name.value === "" || $email.value === "" || $textArea.value === "") {
            $btnError.innerHTML = "Error debe de completar todos los campos"
            $formulario.appendChild($btnError)
            setTimeout(() => {
                $btnError.remove()
            }, 1000);
        } else {
            let mensaje = {
                to: emailMe,
                message: $textArea.value
            }
            fetch(url, {
                method: "POST",
                body: JSON.stringify(mensaje),
                headers: {
                    "content-type": "application/json"
                }
            }).then(res => res.json())
                .then(data => {
                    if (data.ok) {
                        $formulario.reset()
                        $btnSucces.innerHTML = "Exito su mensaje fue enviado"
                        $formulario.appendChild($btnSucces)
                        setTimeout(() => {
                            $btnSucces.remove()
                        }, 1000);

                    }
                })

        }
    })

}