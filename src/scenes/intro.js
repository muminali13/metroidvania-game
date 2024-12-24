import k from "../kaplayLoader.js"

export default function intro() {
    k.add([
        k.text("Metroidvania", {font: "glyphmesss", size: 160}),
        k.pos(k.center().x, k.center().y - 100),
        k.anchor("center")
    ])

    k.add([
        k.text("SPACE/CLICK/TOUCH TO START", {font: "glyphmesss", size: 64}),
        k.pos(k.center().x, k.center().y + 100),
        k.anchor("center")
    ])
}