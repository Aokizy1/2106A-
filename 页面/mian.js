
function change() {
    document.documentElement.style.fontSize = ( document.documentElement.clientWidth ||  document.body.clientWidth) * 100 / 750 + 'px'
  }
   
  change()
   
  // 窗口大小监听改变
  window.onresize = function() {
    change()
  }
