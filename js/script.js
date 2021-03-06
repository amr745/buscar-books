APIKEY = "AIzaSyCkOlGAGRa1NLiz6t0P22ioh1xbbeY2YCw"
const $input = $("input")
const $button = $(".butBox")
const $aside = $("aside")
let $li = $("li")

let books = []
$button.on("click", () => {
    let bookTitle = $input.val()
    $.ajax({
        url: `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}:keyes&${APIKEY}`
    }).then((data) => {

        let items = $(data.items)
        let volumeInfo = $(data.volumeInfo)
        let title = $(data.title)


        for(let i = 0; i < items.length; i++) {
            books.push(items[i])
            const $ul = $("ul")
            let $li = $("<li>")
            $li.text(items[i].volumeInfo.title)
            $ul.append($li) 
            }


        for(let i = 0; i < books.length; i++) {
            $(document).ready(function() {
            $('li').click(function() {
                var index = $(this).index();
               
                const one = document.querySelector('#title1')
                one.innerHTML = `Title: ${books[index].volumeInfo.title}`;

                const two = document.querySelector('#author')
                two.innerHTML = `Author(s): ${books[index].volumeInfo.authors}`;
                if (books[index].volumeInfo.authors == null) {
                    two.innerHTML = ""
                }

                const three = document.querySelector('#summary')
                three.innerHTML = `Book Info: ${books[index].volumeInfo.description}`;
                if (books[index].volumeInfo.description == null) {
                    three.innerHTML = ""
                }

                $("aside").html(`<img src=${books[index].volumeInfo.imageLinks.smallThumbnail}/>`)
                if (books[index].volumeInfo.imageLinks.smallThumbnail == null) {
                    $aside.innerHTML = ""
                }
                
            })

            })

        }
    })
    
const remove = (event) => {
}

$button.on("click", remove)
$input.val("")

// $(document).keypress(function() {
//     books.length = 0;
//     return books;
// })

// books = []


})