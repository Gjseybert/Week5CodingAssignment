
class Book {
    constructor(title) {
        this.title = title;
    }
}
class Publisher {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book instanceof Book) {
            this.books.push(Book);
        } else {
            throw new Error(`You can only add books. Argument is not a book: ${book}`)
        }
    }
    describe() {
        return `${this.name} has published ${this.books.length} books.`
    }
}
class Menu {
    constructor() {
        this.names = [];
        this.selectedPublisher = null;
    }
start() { // entry point to application
    let selection = this.showMainMenuOptions(); 
        while (selection !== 0) {
            switch(selection) {
                case '1' :
                    this.createPublisher();
                    break;
                case '2' :
                    this.viewPublisher();
                    break;
                case '3' :
                    this.deletePublisher();
                    break;
                case '4' :
                    this.displayPublisher();
                    break;
                default:
                    selection = 0;
            }
        selection = this.showMainMenuOptions();
    }
    alert('Goodbye!');
}
showMainMenuOptions() {
    return prompt (`
        0) exit
        1) create a new Publisher
        2) view a Publisher
        3) delete a Publisher
        4) display all Publisher
    `);
}
showPublisherMenuOptions(publisherInfo) {
    return prompt(`
        0) back
        1) add a new Publisher
        2) delete a Publisher
        -----------------
        ${publisherInfo}
    `);
} 
displayPublisher() {
    let publisherString = '';
        for (let i = 0; i < this.names.length; i++) {
            publisherString += i+ ') ' + this.names[i].name + '\n';
        }4
    alert(publisherString);
}
createPublisher() {1
    let name = prompt('Enter name for new publisher: ');
    this.names.push(new Publisher(name));
}
viewPublisher() {
    let index = prompt("Enter the index of the Publisher that you want to view:");
    if (index > -1 && index < this.publishers.length) {
        this.selectedPublisher = this.publishers[index];
        let description = 'Publisher: ' + this.selectedPublisher.name + '\n';
        description += ' ' + this.selectedPublisher.describe() + '\n ';
        for (let i = 0; i < this.selectedPublisher.players.length; i++) {
    // description += i + ') ' + this.selectedTeam.players[i].name + ' - '
    // + this.selectedTeam.players[i].position + '\n';
        description += i + ') ' + this.selectedPublisher.books[i].describe() + '\n';
    }
    let selection1 = this.showTeamMenuOptions(description);
    switch (selection1) {
            case '1' :
            this.createBook();
            break;
            case '2' :
            this.deleteBook();
        }
    } // validate user input
}
deletePublisher() {
    let index = prompt('Enter the index of the Publisher that you wish to delete: ');
        if (index > -1 && index < this.publishers.length) {
            this.publishers.splice(index,1);
    }
}
createBook() {
    let title = prompt('Enter name for new player: ');
    //this.selectedTeam.players.push(new Player(name, position));
    this.selectedPublisher.addBook(new Book(title));
}
deleteBook() {
    let index = prompt('Enter the index of the book that you wish to delete: ');
    if (index > -1 && index < this.selectedPublisher.books.length) { this.selectedPublisher.books.splice(index,1);
    }
}
}
let menu = new Menu();
    menu.start();