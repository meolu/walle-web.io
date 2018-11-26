(function(){
    'use strict';
  
    function changeVersion(){
      var version = this.value;
      window.location.pathname = window.location.pathname.replace(/(1|2)/g, version).replace('//', '/');
    }
  
    document.getElementById('version-select').addEventListener('change', changeVersion);
  })();