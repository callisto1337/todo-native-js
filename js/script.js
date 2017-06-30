class Storage {
    saveTask(counter, text) {
        localStorage.setItem(counter, text);
    }
}

class Item {
    constructor(counter, text) {
        this.wrapper = document.createElement('li');
        this.wrapper.className = 'item';
        this.wrapper.innerHTML = text;
        this.wrapper.dataset.number = counter;
        document.querySelector('.tasks').appendChild(this.wrapper);
        app.storage.saveTask(counter, text);
    }
}

class App {
    constructor() {
        this.newItem();
        console.log('new app!');
        this.storage = new Storage();
    }

    newItem() {
        let counter = 0;

        document.querySelector('.button').onclick = function() {
            let text = document.querySelector('.input');
            new Item(counter, text.value);

            text.value = '';
            counter++;
        }
    }
}

let app = new App();

