var CCBCC_VR_APP = CCBCC_VR_APP || {};

(function (app) {
/*
    const _buildWalls = () => {
        const wallMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xcd853f,
            shading: THREE.FlatShading
        });
        const wallGeo = new THREE.PlaneGeometry(50, 50);
        const ceiling = new THREE.Mesh(wallGeo, wallMaterial);
        ceiling.position.x = 0;
        ceiling.position.y = 50;
        ceiling.rotateX(90 * Math.PI / 180);
        
        const leftWall = new THREE.Mesh(wallGeo, wallMaterial);
        leftWall.position.x = -25;
        leftWall.position.y = 25;
        leftWall.rotateY(90 * Math.PI / 180);
        
        const rightWall = new THREE.Mesh(wallGeo, wallMaterial);
        rightWall.position.x = 25;
        rightWall.position.y = 25;
        rightWall.rotateY(-90 * Math.PI / 180);
        
        const backWall = new THREE.Mesh(wallGeo, wallMaterial);
        backWall.position.y = 25;
        backWall.position.z = -25;
        
        const frontWall = new THREE.Mesh(wallGeo, wallMaterial);;
        frontWall.position.y = 25;
        frontWall.position.z = 25;
        frontWall.rotateY(180 * Math.PI / 180);
        
        app.scene.add(ceiling);
        app.scene.add(leftWall);
        app.scene.add(rightWall);
        app.scene.add(backWall);
        app.scene.add(frontWall);
        };
*/
    
    const _addFloor = () => {
        const texture = THREE.ImageUtils.loadTexture('textures/patterns/checker.png');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat = new THREE.Vector2(50, 50);
        texture.anisotropy = app._renderer.getMaxAnisotropy();

        const material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            specular: 0xffffff,
            shininess: 20,
            shading: THREE.FlatShading,
            map: texture
        });
        const geometry = new THREE.PlaneGeometry(100, 100);
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2;
        
        app.scene.add(mesh);
    };

    app.buildEnvironment = () => {
        _addFloor(); 
    };
})(CCBCC_VR_APP);

