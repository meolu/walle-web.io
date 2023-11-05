/*
 * By Julien Gustin : http://www.julien-gustin.be
 * contact@julien-gustin.be
 * 28-03-2018
 * Dependencies : js-cookie : https://github.com/js-cookie/js-cookie
 */
(function($)
{
    $.fn.scrollreminder=function(options)
    {
        var defauts =
            {
                viewName : 'default'
            };
        var params = $.extend(defauts, options);
        if(Cookies.get(params.viewName) != undefined){
            $('html, body').animate({
                scrollTop: Cookies.get(params.viewName)
            }, 500);
        }
        return this.scroll(function(e){
            Cookies.set(params.viewName, $(this).scrollTop());
        });
    };
})(jQuery);
