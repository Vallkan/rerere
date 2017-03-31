
$(document).ready(function(){
    $('#myTable').tablesorter( {sortList: [[0,0], [1,0]]} );
    $('#button').click(function(){
        var name = $('input[name=login]').val();
        var number = $('input[name=number]').val();
        var email = $('input[name=email]').val();
        if (name==0 || number==0) {
            alert('Заполните обязательные поля!');
        }
        if (name!=0 && number!=0 && email==0) {
            $('#myTable').tablesorter().append('<tr role="row">' + '<td class="name">'+ name + '</td>'
                + '<td class="number">'+ number + '</td>' + '</tr>');
            $('#form')[0].reset();

            var tbody = $('#tbody').html();

            localStorage.setItem('tbody', tbody);

            return false;
        } else if (name!=0 && number!=0 && email!=0) {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if(reg.test(email) == false) {
                alert('Введите корректный e-mail');
                return false;
            } else {
                $('#myTable').tablesorter( {sortList: [[0,0], [1,0]]} ).append('<tr role="row">' + '<td class="name">'+ name + '</td>'
                    + '<td class="number">'+ number + '</td>' + '<td class="email">'+ email + '</td>' + '</tr>');
                $('#form')[0].reset();

                var tbody = $('#tbody').html();

                localStorage.setItem('tbody', tbody);

                return false;
            }
        }
    });


    if(localStorage.getItem('tbody')) {

        $('#tbody').html(localStorage.getItem('tbody'));

    }
    $('#clear').click( function() {

        window.localStorage.clear();

        location.reload();

        return false;

    });
    $('a').click(function(){
        $(this).toggleClass("down");
    });

    $('.namefilter').click(function(){
        $('.name').toggleClass('hide');
    });
    $('.numberfilter').click(function(){
        $('.number').toggleClass('hide');
    });
    $('.emailfilter').click(function(){
        $('.email').toggleClass('hide');
    });
});


