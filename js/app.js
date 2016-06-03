var CCBCC_VR_APP = CCBCC_VR_APP || {};

(function (app) {
     app.scene;

     app._camera;
     app._renderer;
     app._effect;
     app._controls;
     app._rootElement;
     app._container;

     let  __clock = new THREE.Clock();

    const _setOrientationControls = (e) => {
        if (!e.alpha) {
            return;
        }
        
        app._controls = new THREE.DeviceOrientationControls(app._camera, true);
        app._controls.connect();
        app._controls.update();
        
        app._rootElement.addEventListener('click', app.requestFullscreen, false);
        
        window.removeEventListener('deviceorientation', _setOrientationControls, true);
    };

    const _resize = () => {
        let width = app._container.offsetWidth;
        let height = app._container.offsetHeight;
        
        app._camera.aspect = width / height;
        app._camera.updateProjectionMatrix();
        app._renderer.setSize(width, height);
    };

    const _update = (dt) => {
        _resize();
        
        app._camera.updateProjectionMatrix();
        app._controls.update(dt);
    }

    const _render = (dt) => {
        app._renderer.render(app.scene, app._camera);
    };

    app.animate = (t) => {
        requestAnimationFrame(app.animate);
        
        _update(__clock.getDelta());
        _render(__clock.getDelta());
    };

    app.requestFullscreen = () => {
        if (app._container.requestFullscreen) {
            app._container.requestFullscreen();
        } else if (app._container.msRequestFullscreen) {
            app._container.msRequestFullscreen();
        } else if (app._container.mozRequestFullScreen) {
            app._container.mozRequestFullScreen();
        } else if (app._container.webkitRequestFullscreen) {
            app._container.webkitRequestFullscreen();
        }
    };

    const _setup = () => {
        app._renderer = new THREE.WebGLRenderer({alpha: true});
        app._rootElement = app._renderer.domElement;
        app._container = document.getElementById('container');
        app._container.appendChild(app._rootElement);
        
        app._camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        app._camera.position.z = 6;
        app._camera.position.y = 2.5;
        app._camera.position.x = 0;
        
        app._controls = new THREE.OrbitControls(app._camera, app._rootElement);
        
        app.scene = new THREE.Scene();
        app.scene.add(app._camera);
        
        let light = new THREE.HemisphereLight(0x777777, 0x000000, 0.6);
        app.scene.add(light);
    };

    app._init = () => {
        _setup();
        
        window.addEventListener('resize', _resize, false);
        window.addEventListener('deviceorientation', _setOrientationControls, true);
        
        app.buildEnvironment();
        app.animate();
    };
    
    document.addEventListener("DOMContentLoaded", app._init, true);
})(CCBCC_VR_APP);

