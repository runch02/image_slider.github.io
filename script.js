import { imageData } from "./image.js"

class ImageSlider {
    constructor() {
        this.initialImageNumber = 0
        this.setRandomImageInitially()
    }

    setRandomImageInitially() {
        this.randomNumber = Math.floor(Math.random() * imageData.length)
        document.querySelector(".image-container img").src = imageData[this.randomNumber]
        this.initialImageNumber = this.randomNumber
    }

    leftArrowImage() {
        if (this.initialImageNumber <= 0) {
            this.initialImageNumber = imageData.length - 1
        } 
        
        document.querySelector(".image-container img").src = imageData[this.initialImageNumber -= 1]
        // console.log(this.initialImageNumber)
    }
    
    rightArrowImage() {
        if (this.initialImageNumber >= imageData.length - 1) {
            this.initialImageNumber = 0
        } 

        document.querySelector(".image-container img").src = imageData[this.initialImageNumber += 1]
        // console.log(this.initialImageNumber)
    }
}

let imageSliderFirstInstance = new ImageSlider()

document.querySelector(".left-arrow").addEventListener("click", () => imageSliderFirstInstance.leftArrowImage())

document.querySelector(".right-arrow").addEventListener("click", () => imageSliderFirstInstance.rightArrowImage())
