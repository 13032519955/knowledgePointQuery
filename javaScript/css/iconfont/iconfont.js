;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-up1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M505.215195 141.05355 133.347511 557.252647 333.532002 557.252647 333.532002 882.94645 690.466975 882.94645 690.466975 557.252647 890.651466 557.252647Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-up" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M928.462087 727.187991c-23.431665 27.608801-56.788377 41.797965-90.38045 41.797965-27.075659 0-54.329373-9.272177-76.635401-28.17162L511.98772 528.977673 262.558881 740.814336c-49.856501 42.360783-124.655068 36.288484-167.04655-13.596669C53.151547 677.331489 59.253522 602.561575 109.139699 560.200792L435.292967 283.192827c44.227294-37.592177 109.191888-37.592177 153.419182 0l326.153268 277.007965C964.750571 602.532923 970.853569 677.301813 928.462087 727.187991z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
