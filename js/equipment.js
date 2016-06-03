var CCBCC_VR_APP = CCBCC_VR_APP || {};

(function (app) {
    class _3DRectangle {
        static create(width, height, depth, color) {
            let meshColor = color || 0x7b7b7b;
            
            const boxMaterial =  new THREE.MeshFaceMaterial([
                new THREE.MeshBasicMaterial({ color: meshColor }),
                new THREE.MeshBasicMaterial({ color: meshColor }),
                new THREE.MeshBasicMaterial({ color: meshColor }),
                new THREE.MeshBasicMaterial({ color: meshColor }),
                new THREE.MeshBasicMaterial({ color: meshColor }),
                new THREE.MeshBasicMaterial({ color: meshColor })
            ]);
            const boxGeo = new THREE.BoxGeometry(width, height, depth);
            const box = new THREE.Mesh(boxGeo, boxMaterial);
            return box;
        }
    }
    
/*
    const _add7WideCooler = () => {
        const frontImage = THREE.ImageUtils.loadTexture( 'textures/images/7-wide.jpg')
        const boxMaterial =  new THREE.MeshFaceMaterial([
            new THREE.MeshBasicMaterial({ color: 0x7b7b7b }),
            new THREE.MeshBasicMaterial({ color: 0x7b7b7b }),
            new THREE.MeshBasicMaterial({ color: 0x7b7b7b }),
            new THREE.MeshBasicMaterial({ color: 0x7b7b7b }),
            new THREE.MeshBasicMaterial({ color: 0xffffff, map: frontImage }),
            new THREE.MeshBasicMaterial({ color: 0x7b7b7b })
        ]);
        const box = new THREE.BoxGeometry(1, 3, 1);
        const cooler = new THREE.Mesh(box, boxMaterial);
        cooler.position.y = 1.5;
        
        app.scene.add(cooler);
    };
*/
})(CCBCC_VR_APP);