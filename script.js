const fetch = (isbn) => {
    var ISBN = $(isbn).parent().find("#book-number").val();
    var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + ISBN;
    $.ajax({
        method: "GET",
        url: url,
        success: function(data){
            newBook(data);
        },
        error: function(datjqXHR, textStatus, errorThrowna){
            console.log(textStatus);
        }
    });
}

var newBook = (book) => {
    var title = book.items[0].volumeInfo.title;
    var description = book.items[0].volumeInfo.description;
    var author = book.items[0].volumeInfo.authors[0];
    var thumbnail = book.items[0].volumeInfo.imageLinks.thumbnail;
    //console.log(book.items[0].volumeInfo.imageLinks.thumbnail);
    var newBookData = "<h2>" + title + "</h2>" +
                      "<div class= 'book-description'>" + description + "</div>" + 
                      "<h2>Written by: " + author + "</h2>" +
                      "<img src =" + thumbnail + ">";   

$(".books-go-here").append(newBookData);

}

$("#booksisbn").click( function() {
    fetch(this);
}); 