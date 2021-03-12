

class Animation {


    constructor(_frames, _pixels,_color) {
 
        this.numberOfFrames = _frames;    // how many frames the animation has 
        this.pixels = _pixels;            // how wide the animation is
        this.animation = new Array(this.numberOfFrames); //Stores
        this.currentFrameCount = -1;       // this tracks what frame we are currently reading
    


        //||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\|| Animation begins
        
        let k = 0;

        // Build up the array in this for loop
        for (let i = 0; i < this.numberOfFrames; i++) {
            
            // since javascript can't initialize a 2D array, we need to do this
            this.animation[i] = new Array(this.pixels); //filling an array with arrays of pixels
            
            // populate array with empty/black pixels
            for (let j = 0; j < this.pixels; j++) {
                this.animation[i][j] = color(0, 0, 0);
            }
        
        //Animation
        
        // Start from the center
        //let center = 0;
        // Animate to the right
        this.animation[i][k+4] = _color;
        // Animate to the left
        this.animation[i][30-k] = _color;
        this.animation[i][17] = this.activePixel;
        // Increment animation pixel
        k = k+1;
    } // at the end of this loop the i-th entry in animation has the pixel array.

    }

    // This function advances animation to next frame and returns current frame number
    currentFrame() {

        this.currentFrameCount = this.currentFrameCount + 1;

        if (this.currentFrameCount >= this.numberOfFrames) {
            this.currentFrameCount = 0;
        }

        return this.currentFrameCount;
    }

    // Returns one pixel at a time
    grabPixel(_index) {

        return this.animation[this.currentFrameCount][_index];
    }

    setActive(_color){
        this.activePixel = _color;
    }

}
