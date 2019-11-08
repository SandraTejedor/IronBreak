window.onload = () => {
    //Game.init()
    document.getElementById("start-button").onclick = function () {
        Game.init()
    }

    document.getElementById("stop-button").onclick = function () {
        Game.stop()
    }
    document.getElementById("reanudar-button").onclick = function () {
        Game.restart()
    }

}