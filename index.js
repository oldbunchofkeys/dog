const newDogButton = document.querySelector('#js-new-dog');
newDogButton.addEventListener('click', getDog);

// const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
const endpoint = 'https://dog.ceo/api/breeds/image/random';

async function getDog() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText)
        }

    const json =  await response.json();
    displayDog(json.message);
    }   
    catch (err) {
        console.log(err);
        alert('Ruff ruff! Failed to fetch new dog.');
    }
};

function displayDog(dog) {
    const dogUrl = document.querySelector('#js-dog-url');
    dogUrl.src = dog;
    dogUrl.classList.add('dog-display');
};