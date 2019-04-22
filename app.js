$(document).ready(function () {
    let quote;
    let author;

    function getNewQuote() {
        $.ajax({
            url: '//api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
            success: function (response) {
                //console.log(response);
                quote = response.quoteText;
                author = response.quoteAuthor;
                // console.log(quote, author);
                $('#quote').text(`" ${quote}"`);
                if (author) {
                    $('#author').text(`- ${author} -`);
                } else {
                    $('#author').text('- unknown');
                }
            }
        });
    }
    getNewQuote();

    $('.get-quote').on('click', function (event) {
        event.preventDefault(); // to make the browser "not" jump to the top
        getNewQuote();
    });

    $('.share-quote').on('click', function (event) {
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(`${quote}- ${author} -`))
    });

});
