// ...여기에 코드를 작성하세요...
console.clear()

function camelize(txt) {
    const splitTxt = txt.split("-")
    const upperTxt = splitTxt.map((elem, index) => {
        if (index !== 0) {
            return elem[0].toUpperCase() + elem.slice(1);
        } else {
            return elem
        }
    })
    return upperTxt.join("")
}
document.write(camelize("background-color"), `<br>`)
document.write(camelize("list-style-image"), `<br>`)
document.write(camelize("-webkit-transition"))