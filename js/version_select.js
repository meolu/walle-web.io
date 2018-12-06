(function(){
    'use strict';
  
    function changeVersion(){
      var version = this.value;
      version = version == 2 ? 'docs/2/' : 'docs/'
      var pathname=window.location.pathname
      window.location.pathname = pathname.replace(/docs\/2?/g, version).replace('//', '/');
    }
  
    document.getElementById('version-select').addEventListener('change', changeVersion);
  })();