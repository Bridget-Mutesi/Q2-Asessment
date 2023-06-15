fun main() {

    var library = Library()
    library.addBook("OliverTwist","ShakeSphere",300)
    library.addBook("Blossoms","Kenyatta",300)
    library.addBook("The River side","Bridget",200)
    library.addBook("in love","Joyeuse",400)

    library.displayBookDetails()

    library.addBook("The River side")
    println("After removing the book")

    library.searchBooks("In love")

}


// sudo code
// input   title, author, pages
// output   books added, details of the book,and books searched for
// process  data class Book, class Library, methods addbook,searchbook,display deatils


data class Book(var title:String, var author:String, var pages:Int)

class Library(){
    var books = mutableListOf<Book>()

    fun addBook(title:String,author:String,pages:Int){
        var book = Book(title, author,pages)
        books.add(book)
    }
    fun searchBooks(title:String,author: String){
        var searching = books.find{it.title == title}
        books.forEach(searching)
    }
    fun keepTrack(){
        for(i in books)
            println(i)
    }
    fun displayBookDetails(){

    }
}