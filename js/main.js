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
                link.toggleClass('active');
            });
        }
    });
    

    $(document).ready(function(){
        $('title').text($('#html-title').text());
        
        var input = {
            'ContentId': 'hlp_bam_conc_faq1.htm',
            'Project': 'bing_ads_mobile',
            'Language': 'en-us',
            'Query': 'help',
            'Queries': 'hlp_bam_conc_faq1.htm',
            'Market': 'en-us',
            'Method': 'GetContent'
        };
        
        var url = 'http://help.bingads.microsoft.com' + "/ApexContentHandler.ashx";
        $.ajax({
          url: url,
          data: input,
          crossDomain: true,
          dataType: 'jsonp',
          cache: false,
          timeout: 60000,
          jsonpCallback: 'GetHTMLHelpContent'
        });
    });

})(jQuery);
    
function GetHTMLHelpContent (object) {
    if (object && object.Contents) {
        document.getElementById('html-content').innerHTML = object.Contents;
        jQuery("div[id^='explist']:first").ExpanderList({Multiple:true});
        jQuery('#html-title').html(jQuery('h4:first').html());
        jQuery('h4:first').remove();
    }
}