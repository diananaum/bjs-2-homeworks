class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state *= 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (const book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }

        return null;
        // return this.books.find((book) => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            const book = this.books[i];
            if (book.name === bookName) {
                this.books.splice(i, 1);
                return book;
            }
        }

        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subjectName) {
        if (mark < 2 || mark > 5) {
            return;
        }

        if (subjectName in this.marks) {
            this.marks[subjectName].push(mark);
        } else {
            this.marks[subjectName] = [mark];
        }
    }

    getAverageBySubject(subjectName) {
        if (!(subjectName in this.marks)) {
            return 0;
        }

        let average = this.marks[subjectName].reduce((acc, mark, index, arr) => {
            acc += mark;
            if (index === arr.length - 1) {
                return acc / arr.length;
            }
            return acc;
        }, 0);

        return average;
    }

    getAverage() {
        const subjects = Object.keys(this.marks);

        if (subjects.length === 0) {
            return 0;
        }

        let sum = 0;
        for (let i = 0; i < subjects.length; i++) {
            sum += this.getAverageBySubject(subjects[i]);
        }

        const average = sum / subjects.length;

        return average;
    }
}