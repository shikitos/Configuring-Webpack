export default class Post {
    constructor(title) {
        this.title = title;
        this.date = new Date();
        this.img = img;
    }
    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON(),
            img: this.img,
        }, null, 2);
    }
    get uppercaseTitle() {
        return this.title.toUpperCase();
    }
}