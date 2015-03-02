(function ($) {

    $.fn.extend({
        ExpanderList: function (options) {
            var el = $(this);
            el.addClass('expando-list');
            el.children().each(function () {
                var child = $(this);
                child.Expander(options);
            });
        },

        Expander: function (options) {
            var expando = $(this).addClass('expando');

            var link = expando.children().first().addClass('expando-head');
            var content = link.next().addClass('expando-body').hide();

            link.click(function(e){
                e.preventDefault();
                content.slideToggle();
            });

        }
    });

    $(document).ready(function(){
        $('title').text($('#html-title').text());  
    });

})(jQuery);
