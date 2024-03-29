APIKEY = "AIzaSyCkOlGAGRa1NLiz6t0P22ioh1xbbeY2YCw"
const $input = $("input")
const $button = $(".butBox")
const $aside = $("aside")
let $li = $("li")
const $ul = $("ul")

$('#box').hide()
$('#bookContainer').hide()

let books = []
$button.on("click", () => {
    let bookTitle = $input.val()
    books.splice(0, books.length)
    $ul.empty()
    $('#box').hide()

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
            $('#bookContainer').show()
            $("#bookContainer")[0].scrollIntoView({inline: "end"})
            }

        for(let i = 0; i < books.length; i++) {
            $(document).ready(function() {
                $('li').click(function() {
                    // $('#box').show()
                    var index = $(this).index();
                    
                    $('#title1').html(`Title: ${books[index].volumeInfo.title}`);
                    
                    if (`${books[index].volumeInfo.imageLinks.smallThumbnail}` !== undefined){
                        $("#pic").html(`<img src=${books[index].volumeInfo.imageLinks.smallThumbnail}/>`)
                        console.log("we have a picture")
                    } else {
                        $("#pic").html("<p>N/A</p>")
                        console.log("empty")
                    }

                    $('#author').html(`Author(s): ${books[index].volumeInfo.authors}`);
                // if (books[index].volumeInfo.authors == null) {
                //     two.innerHTML = ""
                // }

                    $('#summary').html(`Book Info: ${books[index].volumeInfo.description}`);
                // if (books[index].volumeInfo.description == null) {
                //     three.innerHTML = ""
                // }

                    
                    $('#box').show()
                    $("#box")[0].scrollIntoView($("#box")[0].scrollHeight)
                })
            })
        }
    })
    
const remove = (event) => {
}

$button.on("click", remove)
$input.val("")
})