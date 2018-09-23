$(function () {

    var progress           = 0;
    var inputNameLast      = document.querySelector('#name-last');
    var inputNameFirst     = document.querySelector('#name-first');
    var inputNamePatronmic = document.querySelector('#name-patronymic');
    var inputNumber        = document.querySelector('#number');

    function progressBar() {

        var res    = 0;
        var nl     = 0;
        var nf     = 0;
        var np     = 0;
        var cssVal = {};

        if (inputNameLast.value !== '') {
            nl = 33.33;
        }

        if (inputNameFirst.value !== '') {
            nf = 33.33;
        }

        if (inputNamePatronmic.value !== '') {
            np = 33.33;
        }

        res = nl + nf + np;

        if (res == 33.33) {
            cssVal = {
                'width': res + '%',
                'background': '#00ff14'
            }
        } else if (res == 66.66) {
            cssVal = {
                'width': res + '%',
                'background': '#00c30f'
            }
        } else {
            cssVal = {
                'width': res + '%',
                'background': '#006a08'
            }
        }
        ;

        console.log(res);

        $('.my-progress-bar').css(cssVal).attr('aria-valuenow', res);
        //$('.progress-bar').attr('aria-valuenow', res);

        return res;

    }

    $('#name-last').focusout(function () {
        progressBar();
    });

    $('#name-first').focusout(function () {
        progressBar();
    });

    $('#name-patronymic').focusout(function () {
        progressBar();
    });

    $('#submit').on('click', function () {
        $('.my-progress-bar-2').css('width', inputNumber.value + '%').attr('aria-valuenow', inputNumber.value);
    });

    $('.resume').on('click', function(){
        window.location = "https://www.weblancer.net/users/ababiy/";
    });

});
