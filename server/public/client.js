console.log('js');

$(document).ready(readyNow);

function addQuotes(){
    console.log('in addQuotes');
    let objectToSend = {
        author: $('#authorOut').val(),
        quote: $('#quoteOut').val()
    };
    console.log('sending:', objectToSend);
    $.ajax({
        method: 'POST',
        url: '/quotes',
        data: objectToSend
    }).then(function(response){
        console.log('back from the server with:', response);
        getQuotes(); 
    })
}

function displayQuotes (quotes){
    let element = $('#quotesOut')
    element.empty();
    for (quote of quotes){
        console.log(quote);
        
        // element.append('<li>'+quote.quote+'</li>')
        element.append('<li>'+quote.author+ ': '+ quote.quote+'</li>')

    }
}

function getQuotes(){
    console.log('in getQuotes');
    $.ajax({
        method: 'GET',
        url: '/quotes',
    }).then(function(response){
        console.log('back from the server with', response);
        displayQuotes(response)
    });
}

function readyNow(){
    getQuotes();
    $('#submitButton').on('click', addQuotes)
}