(function(){
  'use strict';

  function changeLang(){
    var lang = this.value;
    if (lang === 'zh-cn') lang = '';
    location.href = window.location.href.replace(/(zh-cn|en)/g, lang);;
  }

  document.getElementById('lang-select').addEventListener('change', changeLang);
  document.getElementById('mobile-lang-select').addEventListener('change', changeLang);
})();