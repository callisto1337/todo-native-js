class Item {
    constructor(text, counter) {
        this.wrapper = document.createElement('li');
        this.wrapper.className = 'item';
        this.wrapper.innerHTML = text;
        this.wrapper.dataset.number = counter;
        document.querySelector('.tasks').appendChild(this.wrapper);
    }
}

class App {
    constructor() {
        this.newItem();
        console.log('new app!');
    }

    newItem() {
        let counter = 0;

        document.querySelector('.button').onclick = function() {
            let text = document.querySelector('.input');
            new Item(text.value, counter);
            text.value = '';
            counter++;
        }
    }
}

new App();

