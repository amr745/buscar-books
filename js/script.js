APIKEY = "AIzaSyCkOlGAGRa1NLiz6t0P22ioh1xbbeY2YCw"
const $input = $("input")
const $button = $("button")

$button.on("click", () =>{
    let bookTitle = $input.val()
    $.ajax({
        url: `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}:keyes&${APIKEY}`
    }).then((data) => {
        console.log(data)
    })
})