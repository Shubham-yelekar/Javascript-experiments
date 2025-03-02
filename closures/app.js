const colorInput = document.getElementById('color-name-input')
const renderBtn = document.getElementById('render-btn')
const renderBox = document.getElementById('btn-box')

renderBtn.addEventListener("click", ()=>{
    const colorvalue = colorInput.value.trim()   
        createButton(colorvalue)
})

function createButton(value) {
    let button = document.createElement('button')
    button.setAttribute('value', value)
    button.innerText = value
    button.classList = `py-2 px-6 bg-neutral-100 cursor-pointer`
    button.addEventListener("click", ()=>{
        const body = document.querySelector('body')
        body.style.backgroundColor = value
    })
    renderBox.appendChild(button)
}
