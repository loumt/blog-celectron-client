const path = require('path');
const { nativeImage } = require('electron')
const fs = require('fs');
const _ = require('lodash');
const Common = require('./../configs/Common');
const logger = require('./logger').app();


const IMAGE_DIR = "./../statics/images";

let imageResources = [];


class ImageFactory {
    constructor() {}

    static pushImage(imgName, imgSize, imgFormat, imgResource) {
        imageResources.push({
            name: imgName,
            size: imgSize,
            format: imgFormat,
            resource: imgResource
        })
    }

    static getImage(name, size, format) {
        return _.find(imageResources, { name: name, size: size, format: format });
    }

    static getImageResource(name, size, format) {
        return _.find(imageResources, { name: name, size: size, format: format }).resource;
    }

    static showImages() {
        logger.info('' + _.find(imageResources, { name: 'icon', size: '256', format: 'png' }));
    }

    static init() {
        let imageDir = path.join(__dirname, IMAGE_DIR);

        if (fs.existsSync(imageDir)) {
            fs.readdirSync(imageDir).forEach(imageFileName => {
                let params = imageFileName.split('.');
                ImageFactory.pushImage(params[0], params[1], params[2], nativeImage.createFromPath(path.join(imageDir, imageFileName)));
            })
        } else {
            logger.info('[error : image init error,image dir [' + imageDir + ']not found!]');
        }
    }

}

ImageFactory.init();
module.exports = ImageFactory;