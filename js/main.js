$.fn.Slider=function(){
    var modal = $('.modal');
    var active_img = {};
    var self = this;


    this.click(function(ev){
        ev.preventDefault();
        active_img = $(this);
        changeImage($(this).attr('href'));
    });

    modal.find('.right').click(function(){
        changeRight();
    })

    modal.find('.left').click(function(){
        changeLeft();
    });

    modal.find('.close').click(function(){
          modal.css('display', 'none')
          removeImg();
    })

    $('body').on({
        keydown:function(ev){
            if (ev.which == 27 && modal.css('display') == 'block') {
                modal.css('display', 'none')
                removeImg();
            }

            if (ev.which == 39 && modal.css('display') == 'block') {
                changeRight();
            }

            if (ev.which == 37 && modal.css('display') == 'block') {
                changeLeft();
            }
        },
       click:function(ev){
            if ($(ev.target).hasClass('modal')) {
                modal.css('display', 'none')
                removeImg();
            }
       }
    });
    

    function changeImage(href){
        modal.css('display', 'block').find('.modal_inner').append('<img class="main_img" src="'+href+'">')
    }

    function removeImg() {
        modal.find('.main_img').remove();
    }

    function changeRight() {
        var href=''
        if (active_img.next().length !== 0) {
            href = active_img.next().attr('href');
            active_img = active_img.next();
        } else {
            href =  $(self[0]).attr('href');
            active_img = $(self[0]);
        }
       removeImg();
       changeImage(href);
    }

    function changeLeft() {
        var href=''
        if (active_img.prev().length !== 0) {
            href = active_img.prev().attr('href');
            active_img = active_img.prev();
        } else {
            href =  $(self[self.length - 1]).attr('href');
            active_img = $(self[self.length - 1]);
        }
       removeImg();
       changeImage(href);
    }

}

$(document).ready(function(){
    $('.gallery').Slider();
});