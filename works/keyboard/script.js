$( document ).ready(function() {
    $( ".key" ).click(function() {
        var value=$(this).text();
        $(this).html(value);

        if (value == 'Backspace') {
            var inputString = $('#area').val();
            value = inputString.substr(0,(inputString.length -1));
            $('#area').val('');   
        }
        if (value == 'Enter') value ="\n" ;
        if (value == 'Ctrl') value ="" ;
        if (value == 'Shift') value ="" ;
       
        $('#area').val($('#area').val()+value); 
        
        var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = 'click.mp3'; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаем
    });

    $( "#clear" ).click(function() {
        $('#area').val('');
    });
});