function book(title, authorr, year){
    this.title = title;
    this.authorr = authorr;
    this.year = year;
    this.getSummary = function(){console.log(`${this.title} was written by ${this.authorr} in ${this.year}`);}
}

const book1 = new book('The Great Adventure', 'Saksham', 2026);
const book2 = new book('Mystery of the Night', 'Ananya', 2025);

book1.getSummary();
book2.getSummary();