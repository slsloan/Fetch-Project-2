async function navto(path) {
    await slideOut($("div.row")[1])
    window.location.href = path
}
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
async function slideOut(element) {
    element.classList.remove("slide-in")
    await delay(100)
    element.classList.add("slide-out")
    await delay(1000)
    return element
}

async function slideIn(element) {
    element.classList.remove("slide-out")
    element.style.transform = "translateX(100%)"
    await delay(100)
    element.classList.add("slide-in")
    element.style.transform = "unset"
    await delay(1000)
    return element
}