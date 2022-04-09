let imageEl = document.querySelector('.for-image');

function getImage(){
    let width = document.getElementById('inputWidth').value;
    let height = document.getElementById('inputHeight').value;
    if (width >= 100 && width <= 300 && height >= 100 && height <= 300){
        console.log('верно');
        let url = `https://picsum.photos/${width}/${height}`;
        fetch(url)
            .then((response)=>{
                //получаю ответ и узнаю его статус
                alert('Статус запроса: ' + response.status);

                //создаю img для полученной ссылки и вставляю его внутрь div
                imageEl.innerHTML = `
                <img src="${response.url}" title="Картинка, полученная по запросу">
                `

            })

            .catch((error) => {
                alert('Произошла ошибка, статус: ' + error.status)
            })
    }
    else {
        alert('Впишите значения в рамках указанного диапазона')
    }
}

document.getElementById('btnGetImg').addEventListener(
    'click',
getImage
)