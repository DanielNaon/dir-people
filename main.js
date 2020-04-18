function extractingData(){
    $.get('http://jsonplaceholder.typicode.com/users', function(results){
        render(results)
    })
}
function render(results){
    const source = $('#people-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template({result: results});
    $("#peopleContainer").append(newHTML)
}
extractingData()