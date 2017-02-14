var shapes = [{
    id: 1402, type: 'clipart', tags: 'nariz,oink', width: 300, height: 300, scale: 0.5, src: 'clipart/Nariz_Oink_Up_Rosa.png'
}];

var propertySettings = [{
    type: 'shadow', grouped: true, items: [{
        type: 'ShadowColor', title: 'Color', data: { type: 'color', range: 'basic', transparent: true }
    }, {
        type: 'ShadowBlur', title: 'Blur', data: { type: 'range', min: 0, max: 40, step: 1, start: 4, tip: 'Change the shadow blurriness by moving the slider' }
    }, {
        type: 'ShadowOffset', title: 'Offst', data: { type: 'double-range', min: -50, max: 50, step: 1, start: 4, tip: 'Change showdow x, y offset by moving the sliders' }
    }, {
        type: 'ShadowOpacity', title: 'Opacity', data: { type: 'range', min: 0, max: 1, step: 0.1, start: 0.4, tip: 'Change the shadow opacity by moving the slider' }
    }]
}, {
    type: 'Filter', data: [{
        id: 1, title: 'None', value: { name: 'none' },
    }, {
        id: 2, title: 'Vintage', value: { name: 'vintage' },
    }, {
        id: 3, title: 'Lomo', value: { name: 'lomo' }
    }, {
        id: 4, title: 'Clarity', value: { name: 'clarity' }
    }, {
        id: 5, title: 'Sin City', value: { name: 'sinCity' }
    }, {
        id: 6, title: 'Sunrise', value: { name: 'sunrise' }
    }, {
        id: 7, title: 'Cross Process', value: { name: 'crossProcess' }
    }, {
        id: 8, title: 'Orange Peel', value: { name: 'orangePeel' }
    }, {
        id: 9, title: 'Love', value: { name: 'love' }
    }, {
        id: 10, title: 'Grungy', value: { name: 'grungy' }
    }, {
        id: 11, title: 'Jarques', value: { name: 'jarques' }
    }, {
        id: 12, title: 'Pinhole', value: { name: 'pinhole' }
    }, {
        id: 13, title: 'Old Boot', value: { name: 'oldBoot' }
    }, {
        id: 14, title: 'Glowing Sun', value: { name: 'glowingSun' }
    }, {
        id: 15, title: 'Hazy Days', value: { name: 'hazyDays' }
    }, {
        id: 16, title: 'Her Majesty', value: { name: 'herMajesty' }
    }, {
        id: 17, title: 'Nostalgia', value: { name: 'nostalgia' }
    }, {
        id: 18, title: 'Hemingway', value: { name: 'hemingway' }
    }, {
        id: 19, title: 'Concentrate', value: { name: 'concentrate' }
    }]
}, {
    type: 'frameGroup', items: [{
        type: 'Frame', title: 'Simple', data: [{
            id: 1, title: 'No Frame', value: null
        }, {
            id: 2, title: 'Oink', value: 'frame/oink.png'
        }]
    }]
}, {
    type: 'style', items: [{
        type: 'TextFill', title: 'Text Fill', data: { type: 'color' }
    }, {
        type: 'FontSize', title: 'Text Size', data: { type: 'range', min: 8, max: 120, step: 1, start: 28, tip: 'Change the font size by moving the slider to left and right:' }
    }, {
        type: 'TextAlign', title: 'Text Align', data: [{
            id: 1, title: 'Left', value: 'left'
        }, {
            id: 2, title: 'Center', value: 'center'
        }, {
            id: 3, title: 'Right', value: 'right' 
        }]
    }, {
        type: 'LineHeight', title: 'Line Height', data: { type: 'range', min: 0.6, max: 4, step: 0.1, start: 2, tip: 'Change the line height by moving the slider to left and right:' }
    }]
}, {
    type: 'border', items: [{
        type: 'BorderWidth', title: 'Border Width', data: { type: 'range', min: 0, max: 100, step: 10, start: 0, tip: 'Move the slider ro <strong>resize the border width</strong>:' }
    }, {
        type: 'BorderColor', title: 'Border Color', data: { type: 'color' }
    }, {
        type: 'CornerRadius', title: 'Corner Radius', data: { type: 'range', min: 0, max: 800, step: 10, start: 0, tip: 'Change the roundness of the border by moving the slider' }
    }]
}, {
    type: 'stroke', items: [{
        type: 'StrokeWidth', title: 'Stroke Width', data: { type: 'range', min: 0, max: 40, step: 1, start: 0, tip: 'Change text stroke width by moving the slider' }
    }, {
        type: 'StrokeColor', title: 'Stroke Color', data: { type: 'color' }
    }]
}, {
    type: 'fontFamilyGroup', items: [{
        type: 'FontFamily', title: 'Sans Serif', data: [{
            id: 1, title: 'Open Sans', value: 'Open Sans'
        }, {
            id: 2, title: 'Oswald', value: 'Oswald'
        }, {
            id: 3, title: 'Ubuntu', value: 'Ubuntu'
        }, {
            id: 4, title: 'Roboto Condensed', value: 'Roboto Condensed'
        }, {
            id: 5, title: 'Nunito', value: 'Nunito'
        }, {
            id: 6, title: 'Raleway', value: 'Raleway'
        }, {
            id: 7, title: 'Cuprum', value: 'Cuprum'
        }, {
            id: 8, title: 'Cabin', value: 'Cabin'
        }, {
            id: 9, title: 'Abel', value: 'Abel'
        }, {
            id: 10, title: 'Orbitron', value: 'Orbitron'
        }]
    }, {
        type: 'FontFamily', title: 'Serif', data: [{
            id: 1, title: 'Droid Serif', value: 'Droid Serif'
        }, {
            id: 2, title: 'Rokkitt', value: 'Rokkitt'
        }]
    }, {
        type: 'FontFamily', title: 'Display', data: [{
            id: 1, title: 'Lobster', value: 'Lobster'
        }, {
            id: 2, title: 'Unkempt', value: 'Unkempt'
        }, {
            id: 3, title: 'Special Elite', value: 'Special Elite'
        }, {
            id: 4, title: 'Changa One', value: 'Changa One'
        }, {
            id: 5, title: 'Anton', value: 'Anton'
        }, {
            id: 6, title: 'Chewy', value: 'Chewy'
        }, {
            id: 7, title: 'Righteous', value: 'Righteous'
        }, {
            id: 8, title: 'Black Ops One', value: 'Black Ops One'
        }, {
            id: 9, title: 'Fredoka One', value: 'Fredoka One'
        }, {
            id: 10, title: 'Abril Fatface', value: 'Abril Fatface'
        }]
    }, {
        type: 'FontFamily', title: 'Handwriting', data: [{
            id: 1, title: 'The Girl Next Door', value: 'The Girl Next Door'
        }, {
            id: 2, title: 'Crafty Girls', value: 'Crafty Girls'
        }, {
            id: 3, title: 'Pacifico', value: 'Pacifico'
        }, {
            id: 4, title: 'Dancing Script', value: 'Dancing Script'
        }, {
            id: 5, title: 'Shadows Into Light', value: 'Shadows Into Light'
        }, {
            id: 6, title: 'Calligraffitti', value: 'Calligraffitti'
        }, {
            id: 7, title: 'Rock Salt', value: 'Rock Salt'
        }, {
            id: 8, title: 'Tangerine', value: 'Tangerine'
        }]
    }]
}, {
    type: 'photoGroup', items: [{
        type: 'Photo', title: 'Abstract', thumb: true, data: [{
            id: 1, title: 'Paint', value: 'background/paint.jpg'
        }, {
            id: 2, title: 'Old', value: 'background/old.jpg'
        }, {
            id: 3, title: 'Notebook', value: 'background/notebook.png'
        }, {
            id: 4, title: 'Orange', value: 'background/orange.jpg'
        }, {
            id: 5, title: 'Diamond', value: 'background/diamond.jpg'
        }, {
            id: 6, title: 'Green Clircles', value: 'background/abstract_circles_green.png'
        }, {
            id: 7, title: 'Red Clircles', value: 'background/abstract_circles_red.png'
        }, {
            id: 8, title: 'Pink Clircles', value: 'background/abstract_circles_pink.png'
        }, {
            id: 9, title: 'Blue Clircles', value: 'background/abstract_circles_blue.png'
        }, {
            id: 10, title: 'Glossy Burst', value: 'background/glossy_burst.png'
        }, {
            id: 11, title: 'Geometric Green', value: 'background/geometric_green.png'
        }, {
            id: 12, title: 'Blue Bokeh', value: 'background/blue_bokeh.jpg'
        }, {
            id: 13, title: 'Stars', value: 'background/stars.jpg'
        }, {
            id: 14, title: 'Splatter Art', value: 'background/splatter_art.jpg'
        }, {
            id: 15, title: 'Halftone Poster', value: 'background/halftone_poster.png'
        }, {
            id: 16, title: 'Sky', value: 'background/sky.jpg'
        }, {
            id: 17, title: 'Starburst', value: 'background/starburst.jpg'
        }, {
            id: 18, title: 'Paper', value: 'background/paper.png'
        }, {
            id: 19, title: 'Stripes', value: 'background/stripes.png'
        }, {
            id: 20, title: 'Pink Stripes', value: 'background/pink_stripes.png'
        }, {
            id: 21, title: 'Butterflies', value: 'background/butterflies.jpg'
        }, {
            id: 22, title: 'Lovely', value: 'background/lovely.jpg'
        }, {
            id: 23, title: 'Valentine', value: 'background/valentine.png'
        }, {
            id: 24, title: 'Daisy', value: 'background/daisy.jpg'
        }, {
            id: 25, title: 'Cherry Blossom', value: 'background/cherry_blossom.jpg'
        }, {
            id: 26, title: 'Tiny Flowers', value: 'background/tiny_flowers.jpg'
        }, {
            id: 27, title: 'Green Grass', value: 'background/green_grass.png'
        }, {
            id: 28, title: 'Spring Plants', value: 'background/spring_plants.jpg'
        }, {
            id: 29, title: 'Yellow Orange', value: 'background/yellow_orange.jpg'
        }, {
            id: 30, title: 'Fabric', value: 'background/fabric.jpg'
        }, {
            id: 31, title: 'Digital Wave', value: 'background/digital_wave.jpg'
        }, {
            id: 32, title: 'Ubuntu', value: 'background/ubuntu.jpg'
        }, {
            id: 33, title: 'Old Paper', value: 'background/old_paper_two.jpg'
        }, {
            id: 34, title: 'Angel Pink', value: 'background/angel_pink.jpg'
        }, {
            id: 35, title: 'Crazy Lines', value: 'background/crazy_lines.jpg'
        }, {
            id: 36, title: 'Pink Wall', value: 'background/pink_wall.jpg'
        }, {
            id: 37, title: 'Pink Stripes', value: 'background/pink_stripes_two.jpg'
        }, {
            id: 38, title: 'Photograph', value: 'background/photograph.jpg'
        }, {
            id: 39, title: 'Blue Swirls', value: 'background/blue_swirls.jpg'
        }, {
            id: 40, title: 'Pink Paper', value: 'background/paper_pink.jpg'
        }, {
            id: 41, title: 'Luxury Blue', value: 'background/luxury_blue.jpg'
        }, {
            id: 42, title: 'Leaves', value: 'background/leaves.jpg'
        }, {
            id: 43, title: 'Pink Simple', value: 'background/simple_pink.jpg'
        }, {
            id: 44, title: 'Lightness', value: 'background/lightness.jpg'
        }, {
            id: 45, title: 'Grunge Green', value: 'background/grunge_paper_green.jpg'
        }, {
            id: 46, title: 'Grunge Paper Brown', value: 'background/grunge_paper_two.jpg'
        }, {
            id: 47, title: 'Grunge Paper Black', value: 'background/grunge_paper.jpg'
        }, {
            id: 48, title: 'Colorful Green', value: 'background/colorful_green.jpg'
        }, {
            id: 49, title: 'Colorful Red', value: 'background/colorful.jpg'
        }, {
            id: 50, title: 'Blendlines', value: 'background/blendlines.jpg'
        }, {
            id: 51, title: 'Space', value: 'background/space.jpg'
        }, {
            id: 52, title: 'Romantic Sparkling', value: 'background/romantic_sparkling.jpg'
        }, {
            id: 53, title: 'Blue Wallwuzz', value: 'background/blue_wallwuzz.jpg'
        }, {
            id: 54, title: 'Blue Pink', value: 'background/blue_pink.jpg'
        }, {
            id: 55, title: 'Photofolic', value: 'background/photofolic.jpg'
        }, {
            id: 56, title: 'Abstract Opera', value: 'background/abstract_opera.jpg'
        }, {
            id: 57, title: 'Old Paper', value: 'background/old_paper.jpg'
        }, {
            id: 58, title: 'Water', value: 'background/abstract_water.jpg'
        }, {
            id: 59, title: 'Lightness', value: 'background/abstract_blue.jpg'
        }, {
            id: 60, title: 'Blue Cloud', value: 'background/blue_cloud.jpg'
        }, {
            id: 61, title: 'Vintage Blue', value: 'background/vintage.jpg'
        }, {
            id: 62, title: 'Mixed Colors', value: 'background/mixed_colors.jpg'
        }]
    }, {
        type: 'Photo', title: 'Gradient', thumb: true, data: [{
            id: 1, title: 'Gold', value: 'background/yellow_gradient.png'
        }, {
            id: 2, title: 'Green', value: 'background/green_gradient.png'
        }, {
            id: 3, title: 'Green', value: 'background/green_gradient_two.png'
        }, {
            id: 4, title: 'Gray', value: 'background/gray_gradient.png'
        }, {
            id: 5, title: 'Rainbow', value: 'background/gradient.jpg'
        }, {
            id: 6, title: 'Brown', value: 'background/brown_gradient.png'
        }]
    }, {
        type: 'Photo', title: 'Plain', thumb: true, data: [{
            id: 1, title: 'White', value: 'background/white.png'
        }, {
            id: 5, title: 'Black', value: 'background/black.png'
        }, {
            id: 2, title: 'Light Gray', value: 'background/gray_light.png'
        },  {
            id: 3, title: 'Gray', value: 'background/gray.png'
        }, {
            id: 4, title: 'Dark Gray', value: 'background/gray_dark.png'
        }, {
            id: 6, title: 'Lime', value: 'background/lime.png'
        }, {
            id: 7, title: 'Green', value: 'background/green.png'
        }, {
            id: 8, title: 'Emerald', value: 'background/emerald.png'
        }, {
            id: 9, title: 'Teal', value: 'background/teal.png'
        }, {
            id: 10, title: 'Cyan', value: 'background/cyan.png'
        }, {
            id: 11, title: 'Cobalt', value: 'background/cobalt.png'
        }, {
            id: 12, title: 'Indigo', value: 'background/indigo.png'
        }, {
            id: 13, title: 'Violet', value: 'background/violet.png'
        }, {
            id: 14, title: 'Pink', value: 'background/pink.png'
        }, {
            id: 15, title: 'Magenta', value: 'background/magenta.png'
        }, {
            id: 16, title: 'Crimson', value: 'background/crimson.png'
        }, {
            id: 17, title: 'Red', value: 'background/red.png'
        }]
    }]
}, {
    type: 'Brightness', title: 'Brightness', data: { type: 'range', min: -100, max: 100, step: 1, start: 0, serialize: true, tip: 'Change brightness by moving the slider' }
}, {
    type: 'Contrast', title: 'Contrast', data: { type: 'range', min: -100, max: 100, step: 1, start: 0, serialize: true, tip: 'Change contrast by moving the slider' }
}, {
    type: 'Opacity', title: 'Opacity', data: { type: 'range', min: 0, max: 1, step: 0.01, start: 1, tip: 'Change opacity by moving the slider' }
}, {
    type: 'Upload', title: 'Upload Photo', data: { type: 'user-photo' }
}, {
    type: 'FillColor', title: 'Color', data: { type: 'color', range: 'basic', transparent: true }
}];