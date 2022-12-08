const dictionary = (word) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9fdfd537bbmsh257223b130393d4p14a690jsn0ec066576756',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)



            wordheading.innerHTML = response.word;
            definition.innerHtml = response.definition;


        })

    .catch(err => console.error(err));

}
searchbtn.addEventListener("click", (e) => {

    e.preventdefault();
    dictionary(searchinput.value);
})