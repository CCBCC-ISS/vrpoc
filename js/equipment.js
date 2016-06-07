var CCBCC_VR_APP = CCBCC_VR_APP || {};

(function (app) {
    // Public properties
    
    app.Cooler;
    
    // Private classes
    
    class _3DRectangle {
        static create(width, height, depth, image, color) {
            let meshColor = color || 0x7b7b7b,
                front = image ? 
                    { color: meshColor, map: app.Image(image) } : 
                    { color: meshColor };
            
            const boxMaterial =  new THREE.MeshFaceMaterial([
                new THREE.MeshBasicMaterial({ color: meshColor }),
                new THREE.MeshBasicMaterial({ color: meshColor }),
                new THREE.MeshBasicMaterial({ color: meshColor }),
                new THREE.MeshBasicMaterial({ color: meshColor }),
                new THREE.MeshBasicMaterial(front),
                new THREE.MeshBasicMaterial({ color: meshColor })
            ]);
            const boxGeo = new THREE.BoxGeometry(width, height, depth);
            const box = new THREE.Mesh(boxGeo, boxMaterial);
            return box;
        }
    }

    // Property initialization
    
    app.Cooler = {
        SevenWide: () => _3DRectangle.create(1, 3, 1, '7-wide.jpg'),
        EightWide: () => _3DRectangle.create(2, 3, 1, '8-wide.jpg'),
         NineWide: () => _3DRectangle.create(3, 3, 1, '9-wide.jpg'),
    };
    
})(CCBCC_VR_APP);