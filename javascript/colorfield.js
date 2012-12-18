(function($) {
    var ColorFieldHandler = function(){	
	    this.initAll = function(){
		    var fnc = this.initById;
		    $('.ColorPickerInput').each(function(){
			    fnc('#' + $(this).attr('id'));
		    });
	    }
	
	    this.initById = function(id){
		    $(id).ColorPicker({
			    onSubmit: function(hsb, hex, rgb) {
				    var mid = (rgb.r + rgb.g + rgb.b) / 3;
				    var col = mid > 127 ? '#000000' : '#ffffff';
				    $(id).val(hex).css({color:col, backgroundColor:'#' + hex});
			    },
			    onBeforeShow: function () {
				    $(this).ColorPickerSetColor(this.value);
			    }
		    }).bind('keyup', function(){
			    $(this).ColorPickerSetColor(this.value);
		    });
	    }
    }

    $.entwine('cf', function($){
        $('input.ColorPickerInput').entwine({
            // Constructor: onmatch
		    onmatch : function() {
			    CFHandler = new ColorFieldHandler();
			    CFHandler.initById('#' + $(this).attr('id'));
				this._super();
		    },
			onunmatch: function() {
				this._super();
			},
        });
    });
}(jQuery));
