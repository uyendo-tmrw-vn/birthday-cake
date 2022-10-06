
$(document).ready(function () {
    console.log("ready!");
    ChooseMenu()
    ColorCake()
});


function ColorCake() {
    let array = [
        '#fff',
        'blue',
        'green',
        'yellow'
    ];

    let result = '';
    array.forEach(element => {
        result += '<span data-name="' + element + '" class="color bg-[' + element + ']"></span>'
    });
    $('.config__colors').html(result)

    let x = $('.config__colors')
    console.log({ x });


    if ($('.config__colors')[0].children.length > 0) {
        $('.config__colors .color').click(function (params) {
            console.log($(this).data('name'));
            let color = $(this).data('name')
            $('.cake .top').css({
                backgroundColor: color
            })
            $('.cake .body').css({
                backgroundColor: color
            })
        })
    }
}


function ChooseMenu() {
    $('.config__menu .item').click(function (params) {
        let type = $(this).data('type')

        $('.config__menu .item').removeClass('active')
        $('.config__hidden').removeClass('active')

        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            $('.config__' + type).removeClass('active')
        } else {
            $(this).addClass('active')
            $('.config__' + type).addClass('active')

        }
    })
}