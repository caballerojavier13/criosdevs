var WinManager = BaseObject.extend({
	init: function(config) {
	    this._super(config);

	    var that = this;

	    $(document).on('click', '.editor-win .editor-cancel', function () { that.close() });

	    $(document).on('click', '.editor-win .thumbnail', function () {
	        that.close();
	        var item = that.card.drawItemById($(this).attr('data-ecc-id'));
	        item.select();
	        return false;
	    });

	    $(document).on('click', '.editor-win-nav a', function () {
	        var win = $(this).parents('.editor-win');
	        win.find('.editor-win-content').removeClass('active').filter($(this).attr('href')).addClass('active');
	        win.find('.editor-win-nav li').removeClass('active')
	        $(this).parents('li').addClass('active');
	        that._lazyLoad();
	        return false;
	    });
	},
	download: function(){

		var photo = new Image();

		var temp_canvas = $('.kineticjs-content').find('canvas')[0];

		photo.src = $('#temp_result_img').attr('src');

		var canvas = $('#result_canvas')[0];

		var width = temp_canvas.width;

		var height = temp_canvas.height;

		console.log(temp_canvas);

		var ctx = canvas.getContext('2d');

		canvas.width = width;
   		canvas.height = height;

		ctx.drawImage(photo, 0, 0, width, height);

		var gradient = this._toasterGradient(width, height);

		var screen = this._blend(ctx, gradient, width, height, function(bottomPixel, topPixel) {
			return 255 - (255 - topPixel) * (255 - bottomPixel) / 255;
		})

		ctx.putImageData(screen, 0, 0);

		var link = document.createElement('a');
		link.href = canvas.toDataURL();  // use realtive url 
		link.download = 'Oink.png';
		document.body.appendChild(link);
		link.click(); 	
	},
	_toasterGradient: function(width, height) {
		var texture = document.createElement('canvas');
		var ctx = texture.getContext('2d');

		texture.width = width;
		texture.height = height;

		// Fill a Radial Gradient
		// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient
		var gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width * 0.6);

		gradient.addColorStop(0, "#ff1e69");
		gradient.addColorStop(1, "#ff1e69");

		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, width, height);

		return ctx;
	},
	_blend: function (background, foreground, width, height, transform) {
		var bottom = background.getImageData(0, 0, width, height);
		var top = foreground.getImageData(0, 0, width, height);

		for (var i = 0, size = top.data.length; i < size; i += 4) {
		 	// red
			 top.data[i + 0] = transform(bottom.data[i + 0], top.data[i + 0]);
			 // green
			 top.data[i + 1] = transform(bottom.data[i + 1], top.data[i + 1]);
			 // blue
			 top.data[i + 2] = transform(bottom.data[i + 2], top.data[i + 2]);
			 // the fourth slot is alpha. We don't need that (so skip by 4)
		}

		return top;
	},
	_lazyLoad: function () {
	    $("img.lazy").lazyload({
	        container: $('.editor-win-contents')
	    });
	},
	_create: function (id, title) {
	    var win = $('<div class="editor-win ' + id + '"></div>').appendTo(this.container);
	    win.append('<div class="editor-win-head"><h3>' + title + '</h3><a class="editor-cancel"><span>Close</span></a></div>');
	    win.append('<div class="editor-win-body"><ul class="editor-win-nav border-box clearfix"></ul><div class="editor-win-contents border-box"></div><div class="editor-win-footer"></div></div>');
	    return win;
	},
	_show: function (win) {
	    win.css('z-index', 22).addClass('editor-win-active');
	    win.find('.editor-win-contents').outerHeight($(this.container).innerHeight() - win.find('.editor-win-head').outerHeight() - win.find('.editor-win-nav').outerHeight() - win.find('.editor-win-footer').outerHeight() - 2);
	},
	close: function () {
	    $('.editor-win').removeClass('editor-win-active');
	},
	cropPhoto: function (src) {
	    var id = 'editor-win-crop';
	    var win = $('.' + id);
	    //var crop = null;
	    //var scale = null;
	    var that = this;
	    this.jcrop = {};
        

	    var displayImage = function (imgSrc) {
	        if (that.jcrop.api) { that.jcrop.api.destroy(); }
	        var contents = win.find('.editor-win-contents');
	        contents.html('');
	        var img = $('<img alt="" />').appendTo(contents).get(0);

	        img.onload = function () {	            
                var cw = contents.width()
                , ch = contents.height()
                , size = getImageSize(getImage());

	            var scale = cw / size.width;

	            if (scale * size.height > ch)
	                scale = ch / size.height;

	            that.jcrop.scale = scale;

	            var nw = Math.floor(scale * size.width);
	            var nh = Math.floor(scale * size.height);

	            img.style.width = nw + 'px';
	            img.style.height = nh + 'px';
	            
	            $(img).Jcrop({
	                setSelect: [0, 0, nw, nh],
	                aspectRatio: 4 / 3,
	                onSelect: function (c) {	                    
	                    that.jcrop.crop = c;
	                }
	            }, function () {
	                that.jcrop.api = this;
	            });
	        };
	        img.src = imgSrc;
	    };

	    var getImage = function () {
	        return $('.' + id + ' img').get(0);
	    };

	    if (win.length == 0) {
	        win = this._create(id, 'Crop your image');
	        var nav = win.find('.editor-win-nav');
	        nav.addClass('editor-win-toolbar');

	        $('<span class="editor-win-crop-tool"><i class="ecc-icon ecc-icon-rotate-right"></i> Rotate right 90&deg;</span>').appendTo(nav).click(function () {
	            displayImage(rotateImage(getImage(), 90));
	        });

	        $('<span class="editor-win-crop-tool"><i class="ecc-icon ecc-icon-rotate-left"></i> Rotate left 90&deg;</span>').appendTo(nav).click(function () {
	            displayImage(rotateImage(getImage(), -90));
	        });

	        $('<span class="editor-win-crop-tool"><i class="ecc-icon ecc-icon-rotate-180"></i> Rotate 180&deg;</span>').appendTo(nav).click(function () {
	            displayImage(rotateImage(getImage(), 180));
	        });

	        $('<span class="editor-win-crop-tool"><i class="ecc-icon ecc-icon-flip-vertical"></i> Flip vertical</span>').appendTo(nav).click(function () {
	            displayImage(flipVertical(getImage()));
	        });

	        $('<span class="editor-win-crop-tool"><i class="ecc-icon ecc-icon-flip-horizontal"></i> Flip horizontal</span>').appendTo(nav).click(function () {
	            displayImage(flipHorizontal(getImage()));
	        });

	        var footer = win.find('.editor-win-footer').addClass('visible');
	        $('<button class="button">Done</button>').appendTo(footer).click(function () {
	            var canvas = document.createElement('canvas');
	            canvas.width = 800;
	            canvas.height = 600;
	            var scale = that.jcrop.scale;
	            var crop = that.jcrop.crop;
	            var context = canvas.getContext('2d');
	            context.drawImage(getImage(), Math.floor(crop.x / scale), Math.floor(crop.y / scale), Math.floor(crop.w / scale), Math.floor(crop.h / scale), 0, 0, 800, 600);
	            var dataUrl = canvas.toDataURL('image/jpeg', 0.84);
	            this.card.getSelected().setPhoto(dataUrl);

	            this.close();
	        }.bind(this));
	    }
	    
	    this._show(win);
	    displayImage(src);
	},
	saveCard: function () {
	    this.shapeSelector('save', 'Save Your Creation');
	},
	shapeSelector: function (type, title) {
	    var id = 'editor-win-' + type;
	    var win = $('.' + id);

	    if (win.length == 0) {

	        if (type == 'save') {

                var canvas = $('.kineticjs-content').find('canvas')[0];
				var ctx=canvas.getContext("2d");
				var imgData=ctx.getImageData(0,0,canvas.width,canvas.height);

				$('#temp_result_img').attr('src', canvas.toDataURL());

				this.download();

	        } else {

	            if (type === 'text') {

                    win = this._create(id, title);

                    var nav = win.find('.editor-win-nav');
                    var contents = win.find('.editor-win-contents');

                    var list = $('<ul></ul>').appendTo(contents);
                    var more = $('<div class="load-more">Load More...</div>').appendTo(contents);
                    var search = $('<input type="text" />');
                    var popular = $('<div class="toolbar-sub"><strong>Popular: </strong></div>').appendTo(nav);

                    win.find('.editor-win-head h3').replaceWith(search).wrap('<div class="editor-win-search border-box"></div>');

	                this._addCustomTextTab(win);
	                popular.append('<span>Love</span><span>Life</span><span>Humor</span><span>Wisdom</span><span>Birthday</span>');
                    search.attr('placeholder', 'Search for Text Quotes...');


                    this._show(win);
                    this._lazyLoad();

	            } else {

                    var shape = this.shapes[0];

                    console.log(shape);

                    var item = this.card.drawItemById(shape.id);

                    item.select();

                    this.close();

	            }
	        }
	    }
        if (type == 'save') {

        }
	},
	_addCustomTextTab: function (win) {
	    var footer = win.find('.editor-win-footer').addClass('visible form');
	    footer.append('<label for="text_custom_input">Add your custom text here</label>');
	    footer.append('<textarea cols="30" rows="5" id="text_custom_input" value="Put your text here..." />');
	    $('<button>Insert Text</button>').appendTo(footer).click(function () {
	        var txt = $('#text_custom_input').val();
	        if (txt !== null && txt !== '') {
	            var cfg = { type: 'text', title: txt, x: 300, y: 250, width: 450, scale: 1 };
	            this.card.drawItem(cfg);
	        }
	        this.close();
	    }.bind(this));
	}
});