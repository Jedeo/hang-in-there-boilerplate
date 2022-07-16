class Poster {
  constructor(imageURL, title, quote) {
    this.id = Date.now(); // this returns a unique number = unique identifier;
    this.imageURL = imageURL;
    this.title = title;
    this.quote = quote;
  }
}
