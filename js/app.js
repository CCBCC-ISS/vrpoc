var CCBCC_VR_APP = CCBCC_VR_APP || {};

(function (app) {
    // Public properties
    
    app.scene;
    app.requestFullscreen;
    app.init;
    app.render; // needs to be public so that getMaxAnisotropy is available for other methods to call

    
    // Private objects
    
    let _camera,
        _effect,
        _controls,
        _rootElement,
        _container,
        __clock = new THREE.Clock();

        
    // Private functions
    
    const _setOrientationControls = (e) => {
        if (!e.alpha) {
            return;
        }
        
        _controls = new THREE.DeviceOrientationControls(_camera, true);
        _controls.connect();
        _controls.update();
        
        _rootElement.addEventListener('click', app.requestFullscreen, false);
        
        window.removeEventListener('deviceorientation', _setOrientationControls, true);
    };

    const _resize = () => {
        let width = _container.offsetWidth;
        let height = _container.offsetHeight;
        
        _camera.aspect = width / height;
        _camera.updateProjectionMatrix();
        app.renderer.setSize(width, height);
    };

    const _update = (dt) => {
        _resize();
        
        _camera.updateProjectionMatrix();
        _controls.update(dt);
    }

    const _render = (dt) => {
        app.renderer.render(app.scene, _camera);
    };

    const _animate = (t) => {
        window.requestAnimationFrame(_animate);
        
        _update(__clock.getDelta());
        _render(__clock.getDelta());
    };

    const _setup = () => {
        app.renderer = new THREE.WebGLRenderer({alpha: true});
        _rootElement = app.renderer.domElement;
        _container = document.getElementById('container');
        _container.appendChild(_rootElement);
        
        _camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        _camera.position.z = 6;
        _camera.position.y = 2.5;
        _camera.position.x = 0;
        
        _controls = new THREE.OrbitControls(_camera, _rootElement);
        
        app.scene = new THREE.Scene();
        app.scene.add(_camera);
        
        let light = new THREE.HemisphereLight(0x777777, 0x000000, 0.6);
        app.scene.add(light);
    };

    
    // Property initialization

    app.requestFullscreen = () => {
        if (_container.requestFullscreen) {
            _container.requestFullscreen();
        } else if (_container.msRequestFullscreen) {
            _container.msRequestFullscreen();
        } else if (_container.mozRequestFullScreen) {
            _container.mozRequestFullScreen();
        } else if (_container.webkitRequestFullscreen) {
            _container.webkitRequestFullscreen();
        }
    };

    app.init = (floorImage, skyImage, leftImage, rightImage, frontImage, backImage) => {
        _setup();
        
        window.addEventListener('resize', _resize, false);
        window.addEventListener('deviceorientation', _setOrientationControls, true);
        
        app.buildEnvironment(floorImage, skyImage, leftImage, rightImage, frontImage, backImage);
        
        _animate();
    };
})(CCBCC_VR_APP);

