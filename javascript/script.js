console.log("Welcome the new tutorial");

var x = document.getElementById('image');
let text = document.getElementById('text');
let btn = document.getElementById('search');
btn.addEventListener('click', () => {
    let a = '';
    let value = document.getElementById('value').value;
    if (value !== '') {

        text.innerText = "Searching Images..."
        var ok = fetch(`https://api.unsplash.com/search/photos/?client_id=iH9lpQ-xJHUO9ITA4Rjk3yy0gg_i0KJMv1idvuwBDY0&query=${value}`)
            .then(response => response.json())
            .then(data => {
                let Arrys = data.results;
                Arrys.forEach(element => {
                    a += `<img src="${element.links.download}" class="column" alt="image"/>`
                });
                x.innerHTML = a;
            });
        ok.then(setTimeout(() => {
            text.innerText = ""
        }, 5000));
    } else {
        text.innerText = "Input Fill is Empty..!";
    }

});