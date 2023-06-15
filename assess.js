// sudo code
// input     output               process
// Title     the title and         class Story with attributes
//length  //different languages    objects Story, storyTeller, Translator
                                //    methods displayStory, getlength,getLanguage

                                class Story{
                                    constructor(title, length,stories,ageGroup){
                                        this.title = title
                                        this.length = length
                                        this.stories = stories
                                        this.ageGroup = ageGroup
                                    }
                                    displayStory(){
                                        console.log(`${this.stories}`);
                                        console.log(`${this.length}`);
                                        console.log(`${this.title}`);
                                
                                    }
                                }
                                class TypeStory extends Story{
                                    constructor(title,length,stories,ageGroup,characters){
                                        super(title,length,stories,ageGroup)
                                        this.characters = characters
                                    }
                                    getLength(){
                                        return this.stories.length;
                                
                                    }
                                }
                                class StoryTeller extends Story{
                                    constructor(name,length,title,morallessons){
                                        super(title, length,ageGroup,stories)
                                        this.morallessons = morallessons
                                        this.name = name
                                
                                    }
                                    displayStory(){
                                        console.log(`${this.name}`);
                                        console.log(`${this.morallessons}`);
                                    }
                                }
                                class Translator extends Story{
                                    constructor(language){
                                        super(title,stories,ageGroup,stories)
                                        this.language = language
                                        
                                
                                    }
                                    getLanguage(){
                                        this.ageGroup = this.language
                                        console.log(`${this.language}`);
                                    }
                                }
                                const typeStory = new Story("The mother monkey","The wise monkey");
                                const translator = new Story("English","swahili");
                                const storyTeller = new Story("MAKENZI AMI");
                                
                                storyTeller.displayStory(TypeStory);
                                translator.getLanguage(StoryTeller);
                                
                                
                                // sudo code
                                // input   title, author, pages
                                // output   books added, details of the book,and books searched for
                                // process  data class Book, class Library, methods addbook,searchbook,display deatils
                                      
                                class Book{
                                    constructor(title,author,pages){
                                        this.title =title
                                        this.author = author
                                        this.pages = pages
                                    }
                                }
                                class Library{
                                    
                                    constructor(title,author,pages,books){
                                        super(title,author,pages)
                                        this.books = books
                                        let books = []
                                
                                    }
                                    addBook(){
                                        let book = Book(title,autor,pages)
                                        this.books.add(book)
                                    }
                                    searchBook(){
                                        return this.books.filter((book)=>{
                                            book.includes(title)
                                        })
                                
                                    }
                                    displayDetails(books){
                                        this.books = books
                                        console.log("");
                                
                                    }
                                }
                                const books = new Book("OLiver Twist","Shakesphere",300);
                                const book1 = Library.addBook("Blossoms","Marie",200);
                                const book2 = Library.searchBook("OliverTwist")