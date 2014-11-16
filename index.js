
// % are always between 0.0 and 1.0
;(function () {

  var canvas = document.getElementById('c')
    , ctx = canvas.getContext('2d')

  var W = canvas.width = window.innerWidth
    , H = canvas.height = window.innerHeight

  /**
   * @param Width - overall width in pixels
   * @param gutterP - % gutter width relative to bar width
   * @param barCount - number of bars
   *
   * @note (barCount - 1) gutters are only between bars
   */
  function getSizes (Width, gutterP, barCount) {

    var gutterWidth = Math.floor((Width * gutterP) / (barCount - 1))
    var barWidth = Math.floor((Width * (1 - gutterP)) / barCount)
    var padding = (Width - ((gutterWidth + barWidth) * barCount)) / 2

    return {
      gutterWidth: gutterWidth,
      barWidth: barWidth,
      paddingLeft: Math.floor(padding),
      paddingRight: Math.ceil(padding),
      barCount: barCount
    }
  }

  /**
   * @param sizes
   *
   * @todo remove H global dep
   */
  function drawBars (sizes) {

    if(!sizes) return
    else console.log(sizes)

    for(var i=0; i<sizes.barCount; i++) {
      ctx.fillRect(
          sizes.paddingLeft + ((sizes.barWidth + sizes.gutterWidth) * i)
        , H
        , sizes.barWidth
        , -H
      )
    }
  }

  drawBars(getSizes(W, 0.30, 80))

})()