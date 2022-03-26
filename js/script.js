APIKEY = "AIzaSyCkOlGAGRa1NLiz6t0P22ioh1xbbeY2YCw"
const $input = $("input")
const $button = $("button")

$button.on("click", () =>{
    let bookTitle = $input.val()
    $.ajax({
        url: `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}:keyes&${APIKEY}`
    }).then((data) => {
        let items = $(data.items)
        let volumeInfo = $(data.volumeInfo)
        let title = $(data.title)
        for(let i = 0; i < items.length; i++)
        console.log(items[i].volumeInfo.title)
    })
})