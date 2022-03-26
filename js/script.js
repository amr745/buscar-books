APIKEY = "AIzaSyCkOlGAGRa1NLiz6t0P22ioh1xbbeY2YCw"
const $input = $("input")
const $button = $("button")

const books = []

$button.on("click", () =>{
    let bookTitle = $input.val()
    $.ajax({
        url: `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}:keyes&${APIKEY}`
    }).then((data) => {
        // console.log(data)
        let items = $(data.items)
        let volumeInfo = $(data.volumeInfo)
        let title = $(data.title)
        
        for(let i = 0; i < items.length; i++) {
             books.push(items[i].volumeInfo.title)
            //   console.log(books)
        }

        const $ul = $("ul")

        for (book of books) {
            let $li = $("<li>")
            $li.text(book)
            $ul.append($li)
        }

        let $li =$("li")

        $li.on("click", (event) => {
            alert("Hello")
        })
    })
})