APIKEY = "AIzaSyCkOlGAGRa1NLiz6t0P22ioh1xbbeY2YCw"
const $input = $("input")
const $button = $("button")

let books = []

$button.on("click", () =>{
    let bookTitle = $input.val()
    $.ajax({
        url: `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}:keyes&${APIKEY}`
    }).then((data) => {
        // console.log(data)
        let items = $(data.items)
        let volumeInfo = $(data.volumeInfo)
        let title = $(data.title)
        let $li = $("<li>")
        
        for(let i = 0; i < items.length; i++) {
             books.push(items[i].volumeInfo.title)
            //   console.log(books)
        }

        let $ul = '<ul>'

        books.forEach(function(book) {
            $ul += '<li>'+ book + '</li>'
          }); 
          
          $ul += '</ul>'
          document.getElementById("bookContainer").innerHTML = $ul

    })
})