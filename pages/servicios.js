footer(document.querySelector(".foot"))
navBar(document.querySelector(".head"))
// Variables Generales
const d = document;
const spaceId = "j3tyea787r39"
const environment = "master"
const access_token = "ZYDwCH-nCkFufw8dwjrrGbTW2ESzfMQJ9_fVoAzjk3E"
const $head = document.querySelector(".head")
let $headH2 = document.querySelector("header h2")

$headH2.innerHTML = `
    <span>Mis Servicios</span>
`

// Fetch de la Api de ContentFul
const datos = async () => {

    const $template = d.querySelector(".template__services").content
    const fragment = d.createDocumentFragment()
    const $articles = d.querySelector(".articles")
    const contentType = "servicios"
    try {
        let datos = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries?access_token=${access_token}&content_type=${contentType}`)
        if (!datos.ok) throw { status: res.status, statusText: res.statusText }

        let json = await datos.json()
        let assets = json.items
        let dat = assets.map(ele => {
            return ele.fields
        })
        let images = json.includes.Asset
        dat.forEach(ele => {

            images.forEach(el => {
                if (el.sys.id === ele.imagen.sys.id) {
                    ele.url = el.fields.file.url
                }
            })
        })


        dat.forEach(ele => {
            $template.querySelector("img").setAttribute("src", ele.url)
            $template.querySelector("img").setAttribute("alt", ele.titulo)
            $template.querySelector("h3").innerHTML = ele.titulo
            $template.querySelector("p").innerHTML = ele.description

            let clone = d.importNode($template, true)
            fragment.appendChild(clone)

        })

        $articles.appendChild(fragment)

    } catch (error) {
        alert(`${error.status}: ${error.statusText}`)

    }

}
datos()
