const book1 = new Vue({
    el: '#book1',
    data: {
      title: 'The Sirens of Titan',
      author: 'Kurt Vonnegut',
      summary: 'This is a summary of the Sirens of Titan.',
    },
    methods: {
      // Avoid using arrow functions when defining methods on a Vue data object
      sayHello: function() {
        alert(this.title);
      }
    }
});

const book2 = new Vue({
  el: '#book2',
  data: {
    title: 'Mr Mercedes',
    author: 'Stephen King',
    summary: 'This is a summary of Mr Mercedes.',
    showDetail: false
  },
  methods: {
    // Avoid using arrow functions when defining methods on a Vue data object
    toggleDetails: function() {
      this.showDetail = !this.showDetail;
    }
  }
});