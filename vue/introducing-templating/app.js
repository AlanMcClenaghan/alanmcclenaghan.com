const helloWorld = new Vue({
    el: '#helloVue',
    data: {
        title: 'HELLO WORLD!!!!!',
        message: 'This is my first Vue template!'
    }
});

const example1 = new Vue({
    el: '#example1',
    data: {
        title: 'Hello',
        message: 'This is your cat-firmation!',
        name: 'Chewie'
    }
});

const example2 = new Vue({
    el: '#example2',
    data: {
        title: 'Thor',
        message: 'This is your cat-firmation!',
        name: 'Chewie'
    }
});

const example3 = new Vue({
    el: '#example3',
    data: {
        title: 'Hello',
        message: 'This is your cat-firmation!',
        name: 'Chewie',
        img: {
            src: 'https://placeimg.com/200/200/animals',
            alt: 'A placeholder image of animals'
        }
    }
});