<script src="http://nodeassets.nbcnews.com/scripts/vendor/e13156bf.modernizr.js"></script>

<script type="text/javascript">
var console = window.console || { log: function() {} };
var xfinityShell={referer:document.referrer,isXfinity:false,validDomains:[],validReferers:[],isValidDomain:false,init:function(){this.validDomains=xfinityShell.loadValidDomains();this.validReferers=["xfinity.comcast.net","xfinity.today.com","xfinity.nbcnews.com","my.xfinity.com"];this.isXfinity=xfinityShell.checkForXfinity()},loadValidDomains:function(){return["assets.nbcnews.com","assets.today.com"]},checkForXfinity:function(){var e=xfinityShell.readCookie("P7");if(e==="X")return true;else{var t=this.isValidReferer();if(t){for(var n in xfinityShell.validDomains){var r=new Image;r.src="http://"+xfinityShell.validDomains[n]+"/rendering/crossdomaincookiepush.ashx/X"}return true}}return false},isValidDomain:function(){if(this.referer.length==0)return true;for(var e in xfinityShell.validDomains)if(this.referer.indexOf(validDomains[e])>-1)return true;return false},isValidReferer:function(){if(this.referer.length==0)return false;for(var e in xfinityShell.validReferers)if(this.referer.indexOf(xfinityShell.validReferers[e])>-1)return true;return false},readCookie:function(e){var t=document.cookie,n=t.toUpperCase().indexOf(e.toUpperCase()+"="),r="";if(n!=-1){var i=n+e.length+1,s=t.indexOf(";",i);if(s==-1)s=t.length;r=t.substring(i,s);r=unescape(r)}return r},deleteXfinityCookie:function(){document.cookie="P7=X;expires=Thu, 01-Jan-1970 00:00:01 GMT"}}

if(document.documentElement.clientWidth >= 992) {xfinityShell.init();}
</script>
<script type="text/javascript">
  var screenWidth = {'small': 768, 'medium':1000, 'large':1230}

  var mpsapp = {
    currentBreakpoint: "",
    breakpointSizes: {'xs':'xs', 'sm':'sm', 'md':'md', 'lg':'lg'},
    init: function(){
      this.currentBreakpoint = this.getBreakpoint();
      this.isPixelmanEnabled = this.getPixelmanEnabled();
    },
    getBreakpoint: function(){
      var width = document.documentElement.clientWidth;

      if(width < screenWidth.small) {
        return this.breakpointSizes.xs;
      }
      else if(width >= screenWidth.small && width < screenWidth.medium) {
        return this.breakpointSizes.sm;
      }
      else if(width >= screenWidth.medium && width < screenWidth.large) {
        return this.breakpointSizes.md;
      }
      else if(width >= screenWidth.large) {
        return this.breakpointSizes.lg;
      }
      return this.breakpointSizes.lg;
    },
    isPixelmanEnabled: false,
    getPixelmanEnabled: function(){
      if (this.currentBreakpoint === this.breakpointSizes.lg || this.currentBreakpoint === this.breakpointSizes.md){
        return true;
      }
      return false;
    }
  }
  mpsapp.init();

  var ads = {
    site: 'nbcnews.com',
    mpscall: {
      site: 'nbcnews-web',
      path: '/cover',
      cat: 'cover',
      type: 'cover',
      articleIndex: 1,
    },
    videoPlayer: {
      freewheelValue: 'nbcnews_fallbacksitesection',
      sect:'',
      topic:'',
      show:'',
      storyline:'',
      feature:''
    },
    init: function(){

    },
    getFreewheelValue: function(){

      if(mps && mps.pagevars){
        return mps.pagevars.freewheel_section
      }
      return 'nbcnews_fallbacksitesection';
    },
    getVideoPlayerConfig: function(){

      if (mps && mps.pagevars){
        this.videoPlayer.freewheelValue = mps.pagevars.freewheel_section;

        if(mps.pagevars.cats){
          var mpsSection = mps.pagevars.cats[0];
          this.videoPlayer.sect = mpsSection;
          this.videoPlayer.show = mpsSection;
        }
      }

      return this.videoPlayer;
    }
  }
  ads.init();

</script>

<script type="text/javascript">
  var mpsopts = {'host':'mps.nbcnews.com'};
  mpsopts.isHostStage = function(){
    if (window.location.href.indexOf('prodads=true') > -1 || window.location.host.indexOf('sys02') === 0){return false;}
    if (window.location.href.indexOf('stageads=true') > -1 || window.location.host.indexOf('sys') === 0 || window.location.host.indexOf('local.nbcnews.com:9001') === 0  || window.location.host.indexOf('nbcnews.com') === -1){return true;}
    return false;
  };
  if (mpsopts.isHostStage()) {mpsopts.host = 'stage.mps.nbcnews.com';}
  var mpscall = {};
  mpscall.site = ads.mpscall.site;
  mpscall.path = ads.mpscall.path;
  mpscall.cat = ads.mpscall.cat;
  mpscall.type = ads.mpscall.type;
  mpscall['cag[entryno]'] = ads.mpscall.articleIndex;
  var mps = mps || {};
  document.write('<scr'+'ipt id="mps-ext-load" src="//'+mpsopts.host+'/fetch/ext/load-'+mpscall.site+'.js"></scr'+'ipt>');
</script>

<script type='text/javascript'>
  DY = {
    scsec: 8765428, API: function () {
      (DY.API.actions = DY.API.actions || []).push(arguments)
    }
  };
</script>
<script>
  window._breakpoints = [0, 440, 768, 1000, 1230];
  function adaptImages(e, t, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r], s = r + 1, o = "99999";
      if (n[s]) {
        o = n[s]
      }
      if (e >= i && e < o) {
        var u = document.querySelectorAll(t);
        for (var a = 0; a < u.length; a++) {
          u[a].setAttribute("src", u[a].getAttribute("data-bp" + r))
        }
      }
    }
  }
  function viewport() {
    var e = window, t = "inner";
    if (!("innerWidth"in window)) {
      t = "client";
      e = document.documentElement || document.body
    }
    return {width: e[t + "Width"], height: e[t + "Height"]}
  }
  setTimeout(function () {
    adaptImages(viewport().width, '.js-adaptive-img', _breakpoints);
  }, 0)
</script>
<div id='DYSCR'></div>
<script type='text/javascript'>
  (function () {
    var d = document, e = 'createElement', a = 'appendChild', g = 'getElementsByTagName', m = 'getElementById', i = d[e]('iframe'), l = 'localStorage';
    try {
      window[l]
    } catch (ex) {
      l = ''
    }
    ;
    i.id = i.name = 'DY-iframe';
    i.style.display = 'none';
    i.width = i.height = '1px';
    d[m]('DYSCR')[a](i);
    DY.x = function (w) {
      var d = w.document, s = d[e]('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = ('https:' == d.location.protocol ? 'http://st.dynamicyield.com'.replace('http:', 'https:') : 'http://st.dynamicyield.com') + '/ast?sec=' + DY.scsec + '&id=' + (w[l] && w[l].getItem('_dyid') || '');
      d[g]('head')[0][a](s);
    };
    var c = i.contentWindow.document;
    c.open().write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"><body onload="parent.DY.x(window)" style="margin:0"></' + 'body></html>');
    c.close();
  })();
</script>

<script src="http://nodeassets.nbcnews.com/scripts/44a96b70.vendor.js"></script>
<script>

    var stylesheets = [
        'http://nodeassets.nbcnews.com/styles/658e3d49.fonts.css',
        'http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css',
        'http://cdnjs.cloudflare.com/ajax/libs/weather-icons/1.2/css/weather-icons.min.css',
        'http://nvcdn.nbcnews.com/_elliott/jenga_css?widgets=zinger2'
    ];
    function onloadCSS( ss, callback ) {ss.onload = function() {ss.onload = null;if( callback ) {callback.call( ss );}};if( "isApplicationInstalled" in navigator && "onloadcssdefined" in ss ) {ss.onloadcssdefined( callback );}}

    setTimeout(function () {
        if(!getCookie('fonts_cached')){
            var fonts = loadCSS(stylesheets[0]);
            onloadCSS(fonts, function() {
                $.cookie('fonts_cached','Y', {path:'/', expires: 14});
            });
        }
        loadCSS(stylesheets[1]);loadCSS(stylesheets[2]);loadCSS(stylesheets[3]);
    }, 1);

  window.DTM = {
    routedata:{},
    routename: 'cover',
    taxonomy: 'cover',
    taxonomy_parent: '',
    social_share : {}
  };

  window.analyticsDataLayer = {};
</script>

  <script src="http://assets.adobedtm.com/cd771b0aa897f931a306d7ab6af0d448836b5fd1/satelliteLib-d7647ef38f862ffb17587d65d0a95182256c1765.js"></script>
<script async src="http://nvcdn.nbcnews.com/_elliott/jenga?widgets=newsletter,zinger2"></script>
<script>
  $(function () {
    if (!Modernizr.svg) {
      $('.svg-fallback').attr('src', function () {
        return $(this).attr('src').replace(/\.(svg)$/i, '.png');
      });
    }
  });
</script>
<script src="http://nodeassets.nbcnews.com/scripts/733d4c50.main.js"></script>




<script type="text/javascript">_satellite.pageBottom();</script>
<script type="text/javascript"> 
	if (mps && typeof(mps.writeFooter) === 'function'){
		mps.writeFooter();
	} 
</script>
