var CCBCC_VR_APP = CCBCC_VR_APP || {};

(function (app) {
    // Loads an image from the textures/images directory.
    const _loadImage = (image) => {
        const texture = THREE.ImageUtils.loadTexture(`textures/images/${image}`);
        return texture;
    };
    
    // Loads a texture for use as a repeating pattern from teh textures/patterns directory.
    const _loadPattern = (image) => {
        const texture = THREE.ImageUtils.loadTexture(`textures/patterns/${image}`);
        return texture;
    }
    
    // Property initialization
    
    app.Image = _loadImage;
    app.Pattern = _loadPattern;
    
})(CCBCC_VR_APP);