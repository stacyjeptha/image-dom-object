'use strict';
var http = require('http'),
	url = require('url'),
	util = require('util'),
	EventEmitter = require('events'),
	sizeOf = require('image-size');


function ImageDom(){
	this.width = 0;
	this.height = 0;
	EventEmitter.call(this);
};

util.inherits(ImageDom, EventEmitter);


ImageDom.prototype.onload = function(){};

ImageDom.prototype.src = function(url){
	var self = this;
	this.on('onload',this.onload.bind(this));
	http.get(url,function(res){
		var chunks = [];
		res.on('data', function (chunk) {
			chunks.push(chunk);
		}).on('end', function() {
			var buffer = Buffer.concat(chunks);
			var dim = sizeOf(buffer);
			self.width = dim.width;
			self.height = dim.height;
			self.emit('onload');
		})
	});
};

module.exports = (typeof Image === 'undefined') ? ImageDom : Image ;