import { createApp } from 'vue'
import App from './App.vue'
// 导入游戏模块
import Game from './game.js'

// css文件可以直接引入
import '../asset/style/index.css'
import '../asset/iconfont/iconfont.css'

// ; (() => {
//     window.onload = () => {
//         // 创建游戏
//         const game = new Game()
//         game.createGame()
//     }
// })()
createApp(App).mount('#app')
