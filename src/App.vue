<script>
import Game from './game/game.js'
export default {
  mounted(){

    const game = new Game()
    game.createGame()

  }
}

// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

</script>

<template>
    <div class="content">
      <div class="scene" id="scene" style="display: none;">
        <div class="choose" id="choose">
          <i id="cross" class="iconfont iconcross cross element"></i>
          <span class="info">try to get five in a row!</span>
          <i id="circle" class="iconfont iconcircle circle element"></i>
        </div>
        <!-- <div class="loading">
          <div class="loading-info"></div>
          <div class="loading-bar"></div>
        </div> -->
        <!-- 30x15+1X14=464 + 空隙 -->
        <canvas id="canvas" class="board">
            Your browser does not support HTML5 canvas.
        </canvas>
        <div class="resize" id="resize">
          <i id="zoomout" class="iconfont iconzoomin zoomin element"></i>
          <i id="zoomin" class="iconfont iconzoomout zoomout element"></i>
        </div>
      </div>
    </div>
</template>

<style>

</style>
