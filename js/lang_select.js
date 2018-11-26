(function(){
  'use strict';

  function changeLang(){
    var lang = this.value;
    if (lang === 'zh-cn') lang = '';
    if (window.location.pathname == '/' && lang.length) {
        return window.location.pathname = '/en';
    }
    if(/(zh-cn|en)/.test(window.location.pathname)){
      window.location.pathname = window.location.pathname.replace(/(zh-cn|en)/g, lang).replace('//', '/');
    } else {
      window.location.pathname=(window.location.pathname+lang).replace('//', '/');
    }
  }

  document.getElementById('lang-select').addEventListener('change', changeLang);
  document.getElementById('mobile-lang-select').addEventListener('change', changeLang);
})();