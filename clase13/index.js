
// let promise = fetch(url, [options])
const main = document.querySelector('#root')
const btnsPage = document.querySelectorAll('.containerButtons button ')
console.log(btnsPage);

fetch('https://rickandmortyapi.com/api/character')
    .then( (response)  => {
        console.log(response);
        if (response.status !== 200) {
            throw new Error(response.status)
        }
        // console.log(response.json());
        return response.json()
    })
    .then( (data) => {
        console.log(data.results);
        html(data.results)
    })
    .catch((error) => alert('error en la solicitud' + error))
   


const getAllCharacterPage = async (page) => {
    let response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    if (response.status !== 200) {
        throw new Error(response.status)
    }
    let data = await response.json()
    html(data.results)
}



const html = (array) => {

    main.innerHTML = ''

    for (const element of array) {
        main.innerHTML += `
        
                <div>
                    <h3>Name: ${element.name}</h3>
                    <p>Species ${element.species}</p>
                    <img src=${element.image} alt="${element.name}">
                </div>
        
        `
    }

}


const addEventButton = (btn) => {
    btn.addEventListener('click', (event) => {
        console.log(event.target.innerText);
        let page = event.target.innerText
        getAllCharacterPage(page)
    })
}
 
const addEventBtnPage = (btns) => {
    btns.forEach( btn => {
        addEventButton(btn)
    });
}


addEventBtnPage(btnsPage)