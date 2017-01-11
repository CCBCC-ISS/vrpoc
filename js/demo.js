var CCBCC_VR_APP = CCBCC_VR_APP || {};

(function (app) {
    document.addEventListener("DOMContentLoaded", function () {
        app.init('checker.png')
        
        let sevenWideCooler = app.Cooler.SevenWide();
        sevenWideCooler.position.y = 1.5;
        app.scene.add(sevenWideCooler);
        
        let eightWideCooler = app.Cooler.EightWide();
        eightWideCooler.position.y = 1.5;
        eightWideCooler.position.x = 5;
        eightWideCooler.position.z = 2;
        app.scene.add(eightWideCooler);

        let nineWideCooler = app.Cooler.NineWide();
        nineWideCooler.position.y = 1.5;
        nineWideCooler.position.x = -5;
        nineWideCooler.position.z = 2;
        app.scene.add(nineWideCooler);

        eightWideCooler.rotateY(-60 * Math.PI / 180);
        nineWideCooler.rotateY(60 * Math.PI / 180);
    });
})(CCBCC_VR_APP);