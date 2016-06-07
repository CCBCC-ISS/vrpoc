var CCBCC_VR_APP = CCBCC_VR_APP || {};

(function (app) {
    // Public properties
    
    app.buildEnvironment;

    // Private functions
    
    const _planeGeometry = (image) => {
        const texture = app.Pattern(image);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat = new THREE.Vector2(50, 50);
        texture.anisotropy = app.renderer.getMaxAnisotropy();

        const material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            specular: 0xffffff,
            shininess: 20,
            shading: THREE.FlatShading,
            map: texture
        });
        const geometry = new THREE.PlaneGeometry(100, 100);
        const mesh = new THREE.Mesh(geometry, material);
        
        return mesh;
    };
    
    const _addBaseBarrier = (image) => {
        if (!image) {
            return;
        }
        
        let mesh = _planeGeometry(image);
        mesh.rotation.x = -Math.PI / 2;
        app.scene.add(mesh);
    };
    
    const _addTopBarrier = (image) => {
        if (!image) {
            return;
        }
        
        let mesh = _planeGeometry(image);
        mesh.rotation.x = Math.PI / 2;
        app.scene.add(mesh);
    };
    
    const _addLeftBarrier = (image) => {
        if (!image) {
            return;
        }
        
        let mesh = _planeGeometry(image);
        mesh.rotateY(90 * Math.PI / 180);
        app.scene.add(mesh);
    };
    
    const _addRightBarrier = (image) => {
        if (!image) {
            return;
        }
        
        let mesh = _planeGeometry(image);
        mesh.rotateY(-90 * Math.PI / 180);
        app.scene.add(mesh);
    };
    
    const _addFrontBarrier = (image) => {
        if (!image) {
            return;
        }
        
        let mesh = _planeGeometry(image);
        mesh.rotateY(180 * Math.PI / 180);
        app.scene.add(mesh);
    };
    
    const _addRearBarrier = (image) => {
        if (!image) {
            return;
        }
        
        let mesh = _planeGeometry(image);
        // no need to rotate the rear barrier
        app.scene.add(mesh);
    };
    
    // Property initialization
    
    app.buildEnvironment = (floorImage, skyImage, leftImage, rightImage, frontImage, backImage) => {
        _addBaseBarrier(floorImage);
        _addTopBarrier(skyImage);
        _addLeftBarrier(leftImage);
        _addRightBarrier(rightImage);
        _addFrontBarrier(frontImage);
        _addRearBarrier(backImage);
    };
    
})(CCBCC_VR_APP);

