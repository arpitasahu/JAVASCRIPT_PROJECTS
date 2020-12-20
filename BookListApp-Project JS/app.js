//function constrctor
 function Book (title,author,isbn){
     this.title = title;
     this.author = author; 
     this.isbn = isbn;

 }

 //ui function
 function UI(){}
          //adding book to list

     UI.prototype.addBookList = function(book){
        //    console.log(book);
        const list = document.getElementById('book-list');
        //create tr element.
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href ="#" class= "delete">X </a></td>
`
        list.appendChild(row);
        // console.log(row);
     }
     UI.prototype.clearFields = function(){
         document.getElementById('title').value = '';
         document.getElementById('author').value = '';
         document.getElementById('isbn').value = '';

     }


 
 //event listener
 document.getElementById('book-form').addEventListener('submit',function(e){

 //get value -> from
 const title = document.getElementById('title').value;
        author = document.getElementById('author').value ;
        isbn = document.getElementById('isbn').value;
        // console.log('clicked');
       
        //book intantiate
        const book = new Book(title,author,isbn);
        // console.log(book);

        //Ui intantiate
        const ui = new UI();
        // console.log(ui);

        //clear fields
        ui.clearFields();
         
         ui.addBookList(book);
        e.preventDefault(e);
    });


