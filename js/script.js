class Storage {
    constructor() {
        this.getTasks();
    }

    saveTask(counter, text) {
        let task = JSON.stringify({
            data: {
                text: text
            }
        });
        localStorage.setItem(counter,task);
    }

    getTasks() {
        for(let number in localStorage) {
            let data = JSON.parse(localStorage[number])['data'];
            this.wrapper = document.createElement('li');
            this.wrapper.innerHTML = data['text'];
            this.wrapper.dataset.number = number;
            document.querySelector('.tasks').appendChild(this.wrapper);
        }
    }

    static lengthStorage() {
        return localStorage.length + 1;
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
        this.storage = new Storage();
        this.newItem();
        console.log('new app!');
    }

    newItem() {
        document.querySelector('.button').onclick = function() {
            let text = document.querySelector('.input');
            new Item(Storage.lengthStorage(), text.value);
            text.value = '';
        }
    }
}

let app = new App();

