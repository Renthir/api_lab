let button = document.querySelector("button")
let div = document.querySelector("div")
// let text = document.querySelector('input')
// let search = text.value

function buttonClick(){
    div.innerHTML = ''
    console.log('Button Clicked!')

    let text = document.querySelector('input').value.toLowerCase()

    axios.get(`https://swapi.dev/api/planets/?search=${text}`).then(res => {
        res.data.results[0].residents.forEach(elem=> {
            axios.get(elem).then(res2 => {
                let pop = document.createElement('h2')
                pop.textContent = res2.data.name
                div.appendChild(pop)
            })
        });
    })
    text 
}

button.addEventListener('click', buttonClick)

