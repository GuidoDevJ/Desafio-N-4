// Variables Generales
const d = document;
const spaceId = "j3tyea787r39"
const environment = "master"
const access_token = "ZYDwCH-nCkFufw8dwjrrGbTW2ESzfMQJ9_fVoAzjk3E"
const $head = document.querySelector(".head")



// Fetch de la Api de ContentFul
navBar(document.querySelector(".head"))
footer(document.querySelector(".foot"))
let $headH2 = document.querySelector("header h2")

$headH2.innerHTML = `
    <span>Mis Trabajos</span>
`
const datos = async () => {

    const $template = d.querySelector(".template__services").content
    const fragment = d.createDocumentFragment()
    const $articles = d.querySelector(".articles")
    const contentType = "trabajos"
    try {
        let datos = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries?access_token=${access_token}&content_type=${contentType}`)
        let json = await datos.json()
        if (!datos.ok) throw { status: res.status, statusText: res.statusText }
        let assets = json.items
        let dat = assets.map(ele => {
            return ele.fields
        })
        let images = json.includes.Asset
        dat.forEach(ele => {
            images.forEach(el => {
                if (el.sys.id === ele.image.sys.id) {
                    ele.urlImage = el.fields.file.url
                }
            })
        })
        dat.forEach(ele => {
            $template.querySelector("img").setAttribute("src", ele.urlImage)
            $template.querySelector("img").setAttribute("alt", ele.title)
            $template.querySelector("h3").innerHTML = ele.title
            $template.querySelector("p").innerHTML = ele.description.content[0].content[0].value
            $template.querySelector("a").setAttribute("href", ele.url)
            $template.querySelector("a").setAttribute("target", "_blank")

            let clone = d.importNode($template, true)
            fragment.appendChild(clone)


        })
        $articles.appendChild(fragment)

    } catch (error) {
        alert(`${error.status}: ${error.statusText}`)
    }

}
datos()
