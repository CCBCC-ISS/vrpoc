var CCBCC_VR_APP = CCBCC_VR_APP || {};

(function (app) {
    document.addEventListener("DOMContentLoaded", function () {
        app.init('checker.png')
        
        let sevenWideCooler = app.Cooler.SevenWide();
        sevenWideCooler.position.y = 1.5;
        app.scene.add(sevenWideCooler);
        
    });
})(CCBCC_VR_APP);