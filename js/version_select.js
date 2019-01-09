(function(){
    'use strict';
  
    function changeVersion(){
      var version = this.value;
      version = version == 1 ? 'docs/1/' : 'docs/'
      var pathname=window.location.pathname
      window.location.pathname = pathname.replace(/docs\/1?/g, version).replace('//', '/');
    }
  
    document.getElementById('version-select').addEventListener('change', changeVersion);
  })();