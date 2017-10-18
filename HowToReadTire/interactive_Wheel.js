(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"interactive_Wheel_atlas_", frames: [[728,0,960,482],[0,0,726,752],[1910,923,135,55],[1959,2102,87,122],[0,1985,253,254],[224,930,290,218],[255,1985,290,218],[0,1836,612,147],[224,1150,408,146],[1522,2478,504,172],[1522,2244,524,232],[1524,1807,472,293],[0,2244,761,432],[224,754,440,174],[762,1807,760,435],[763,2244,757,432],[1145,484,821,437],[1690,0,251,439],[0,754,222,524],[1524,2102,307,136],[728,484,415,912],[0,1398,760,436],[1145,1367,760,438],[762,1398,178,404],[1145,923,763,442],[942,1398,175,403],[0,1298,346,75],[1968,0,64,119],[1833,2102,124,131]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.arrow158377_960_720 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap31 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap37 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap38 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap39 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap40 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap45 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap46 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap47 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap48 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["interactive_Wheel_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yazran = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.858,0.858);

	this.instance_1 = new lib.Bitmap26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-144,-9,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:0,y:0}}]}).to({state:[{t:this.instance_1},{t:this.instance,p:{x:-3,y:3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.5,112.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap21();
	this.instance.parent = this;

	this.instance_1 = new lib.Bitmap20();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Bitmap22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-78.1,-5.5,0.834,0.834,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance,p:{x:0,y:0}}]}).to({state:[{t:this.instance_2},{t:this.instance,p:{x:2,y:-3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,290,218);


(lib.madbeka00 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.madbeka00, null, null);


(lib.madbaka_sound03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap40();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.472,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145,61.2);


(lib.madbaka_mazag01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap39();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.29,0.29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.4,152);


(lib.madbaka_delek02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap38();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.327,0.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,153.7);


(lib.madbaka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.madbaka, null, null);


(lib.kodomes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap12();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.858,0.858);

	this.instance_1 = new lib.Bitmap23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12,-6,0.837,0.837);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:0}}]}).to({state:[{t:this.instance,p:{x:5}},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.7,104.7);


(lib.kivon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap10();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.858,0.858);

	this.instance_1 = new lib.Bitmap24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-29.9,-2,0.778,0.809,0,15.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:0,y:0}}]}).to({state:[{t:this.instance,p:{x:6,y:6}},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.9,47.2);


(lib.date = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.858,0.858);

	this.instance_1 = new lib.Bitmap27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-185,-105,0.832,0.832);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:0,y:0}}]}).to({state:[{t:this.instance,p:{x:-3,y:-2}},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,102.2);


(lib.close_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap18();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.5,107.9);


(lib.test001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.madbeka00 = new lib.madbeka00();
	this.madbeka00.parent = this;
	this.madbeka00.setTransform(0.1,20);

	this.timeline.addTween(cjs.Tween.get(this.madbeka00).wait(1));

}).prototype = getMCSymbolPrototype(lib.test001, null, null);


(lib.omes_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.close_mc = new lib.close_mc();
	this.close_mc.parent = this;
	this.close_mc.setTransform(808.8,56.7,1,1,0,0,0,53.7,53.9);
	new cjs.ButtonHelper(this.close_mc, 0, 1, 1);

	this.instance = new lib.kodomes();
	this.instance.parent = this;
	this.instance.setTransform(760.1,265,0.634,0.634,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(579,105,0.382,0.382);

	this.instance_2 = new lib.Bitmap31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1.161,1.149);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.close_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.omes_info, new cjs.Rectangle(0,0,968.7,500), null);


(lib.midot_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.close_mc = new lib.close_mc();
	this.close_mc.parent = this;
	this.close_mc.setTransform(806.7,53.9,1,1,0,0,0,53.7,53.9);
	new cjs.ButtonHelper(this.close_mc, 0, 1, 1);

	this.midot = new lib.Symbol1();
	this.midot.parent = this;
	this.midot.setTransform(739.6,198.7,0.655,0.655,0,0,0,145,109);
	new cjs.ButtonHelper(this.midot, 0, 1, 1);

	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(574,100,0.395,0.395);

	this.instance_1 = new lib.Bitmap29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-4,1.16,1.16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.midot},{t:this.close_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.midot_info, new cjs.Rectangle(0,-4,932.3,501), null);


(lib.madbaka_sound_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.close_mc = new lib.close_mc();
	this.close_mc.parent = this;
	this.close_mc.setTransform(802.7,53.9,1,1,0,0,0,53.7,53.9);
	new cjs.ButtonHelper(this.close_mc, 0, 1, 1);

	this.instance = new lib.Bitmap47();
	this.instance.parent = this;
	this.instance.setTransform(577,40,1.149,1.099);

	this.instance_1 = new lib.Bitmap46();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.157,1.157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.close_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.madbaka_sound_info, new cjs.Rectangle(0,0,883,511.5), null);


(lib.madbaka_mazag_info01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.close_mc = new lib.close_mc();
	this.close_mc.parent = this;
	this.close_mc.setTransform(804.1,56.1,1,1,0,0,0,53.7,53.9);
	new cjs.ButtonHelper(this.close_mc, 0, 1, 1);

	this.instance = new lib.Bitmap45();
	this.instance.parent = this;
	this.instance.setTransform(577,42,1.238,1.097);

	this.instance_1 = new lib.Bitmap44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.161,1.161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.close_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.madbaka_mazag_info01, new cjs.Rectangle(0,0,882,508.3), null);


(lib.madbaka_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.close_mc = new lib.close_mc();
	this.close_mc.parent = this;
	this.close_mc.setTransform(849.5,62,1,1,0,0,0,53.7,53.9);
	new cjs.ButtonHelper(this.close_mc, 0, 1, 1);

	this.instance = new lib.Bitmap30();
	this.instance.parent = this;
	this.instance.setTransform(608,144,0.632,0.632);

	this.instance_1 = new lib.Bitmap37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-16,1.121,1.121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.close_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.madbaka_main, new cjs.Rectangle(0,-16,920.4,489.9), null);


(lib.madbaka_delek_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.close_mc = new lib.close_mc();
	this.close_mc.parent = this;
	this.close_mc.setTransform(804.5,53.9,1,1,0,0,0,53.7,53.9);
	new cjs.ButtonHelper(this.close_mc, 0, 1, 1);

	this.instance = new lib.Bitmap42();
	this.instance.parent = this;
	this.instance.setTransform(581,29,0.487,0.487);

	this.instance_1 = new lib.Bitmap43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.159,1.141);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.close_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.madbaka_delek_info, new cjs.Rectangle(0,0,880.9,497.3), null);


(lib.date_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.date();
	this.instance.parent = this;
	this.instance.setTransform(557.1,233.3,0.618,0.618,0,0,0,-56.3,51.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(584,106,0.373,0.373);

	this.close_mc = new lib.close_mc();
	this.close_mc.parent = this;
	this.close_mc.setTransform(805.8,63.4,1,1,0,0,0,53.7,53.9);
	new cjs.ButtonHelper(this.close_mc, 0, 1, 1);

	this.instance_2 = new lib.Bitmap32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1.165,1.157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.close_mc},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.date_info, new cjs.Rectangle(0,0,882,500), null);


// stage content:
(lib.interactive_Edit_testing2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.madbaka_main.alpha=0;
		this.date_info.alpha=0;
		this.omes_info.alpha=0;
		this.midot_info.alpha=0;
		this.madbaka_mazag_info01.alpha=0;
		this.madbaka_delek_info.alpha=0;
		this.madbaka_sound_info.alpha=0;
		
		
		
		/*
		
		this.change_wheel.addEventListener("click", fl_Mouse1.bind(this));
		
		function fl_Mouse1(event)
		{
			this.madbaka_main.alpha=1;
			
		}
		
		
		this.madbaka_main.close_mc.addEventListener("click", fl_close_6.bind(this));
		
		function fl_close_6()
		{
			this.madbaka_main.alpha=0;
			
			
		}
		
		
		*/
		
		
		
		
		
		this.date_01.addEventListener("click", fl_Mouse_3.bind(this));
		
		function fl_Mouse_3(event)
		{
			this.date_info.alpha=1;
			
		}
		
		
		this.date_info.close_mc.addEventListener("click", fl_close.bind(this));
		
		function fl_close()
		{
			this.date_info.alpha=0;
			
			
		}
		
		
		
		this.omes_01.addEventListener("click", fl_Mouse.bind(this));
		
		function fl_Mouse(event)
		{
			this.omes_info.alpha=1;
			
		}
		
		
		this.omes_info.close_mc.addEventListener("click", fl_close_1.bind(this));
		
		function fl_close_1()
		{
			this.omes_info.alpha=0;
			
			
		}
		
		
		this.midot.addEventListener("click", fl_Mouse_2.bind(this));
		
		function fl_Mouse_2(event)
		{
			this.midot_info.alpha=1;
			
		}
		
		
		this.midot_info.close_mc.addEventListener("click", fl_close_2.bind(this));
		
		function fl_close_2()
		{
			this.midot_info.alpha=0;
			
			
		}
		
		
		
		
		this.madbaka_mazag01.addEventListener("click", fl_Mouse_200.bind(this));
		
		function fl_Mouse_200(event)
		{
			this.madbaka_mazag_info01.alpha=1;
			
		}
		
		
		this.madbaka_mazag_info01.close_mc.addEventListener("click", fl_close_201.bind(this));
		
		function fl_close_201()
		{
			this.madbaka_mazag_info01.alpha=0;
			
			
		}
		
		
		
		
		this.madbaka_delek02.addEventListener("click", fl_Mouse_204.bind(this));
		
		function fl_Mouse_204(event)
		{
			this.madbaka_delek_info.alpha=1;
			
		}
		
		
		this.madbaka_delek_info.close_mc.addEventListener("click", fl_close_205.bind(this));
		
		function fl_close_205()
		{
			this.madbaka_delek_info.alpha=0;
			
			
		}
		
		
		
		this.madbaka_sound03.addEventListener("click", fl_Mouse_202.bind(this));
		
		function fl_Mouse_202(event)
		{
			this.madbaka_sound_info.alpha=1;
			
		}
		
		
		this.madbaka_sound_info.close_mc.addEventListener("click", fl_close_203.bind(this));
		
		function fl_close_203()
		{
			this.madbaka_sound_info.alpha=0;
			
			
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		/*this.madbaka_sound.addEventListener("click", fl_Mouse_31.bind(this));
		
		function fl_Mouse_31(event)
		{
			this.madbaka_sound_info.alpha=1;
			
		
		}
		
		this.madbaka_delek.addEventListener("click", fl_Mouse_30.bind(this));
		
		function fl_Mouse_30(event)
		{
			this.madbaka_delek_info.alpha=1;
			
		
		}*/
		
		
		//  mdbekot ארוע לסגירת תיבת הטקסט
		
		/*this.madbaka_delek_info.close_mc.addEventListener("click", fl_close_23.bind(this));
		
		function fl_close_23()
		{
			this.madbaka_delek_info.alpha=0;
			
			
		}
		
		
		this.madbaka_sound_info.close_mc.addEventListener("click", fl_close_21.bind(this));
		
		function fl_close_21()
		{
			this.madbaka_sound_info.alpha=0;
			
			
		}*/
		
		
		
		
		
		
		//this.main_tzamig.change_wheel2.addEventListener("click", fl_close.bind(this));
		
		//function fl_close()
		//{
		//	this.main_tzamig.alpha=0;
		//	wasclicked=0
		//	 console.log(wasclicked);
		//	
		//}
		
		
		////איך בוחרים צמיג קוד עומס יצור מידות
		
		
		//this.midot.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		//function fl_MouseClickHandler(event)
		//{
		//	this.midot_info.alpha=1;
		//	wasclicked=1
		//	  console.log(wasclicked);
		
		//}
		
		//this.date_01.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		//function fl_MouseClickHandler(event)
		//{
		//	this.date_info.alpha=1;
		//	wasclicked=1
		//	  console.log(wasclicked);
		
		//}
		
		//this.omes_01.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		//function fl_MouseClickHandler(event)
		//{
		//	this.omes_info.alpha=1;
		//	wasclicked=1
		//	  console.log(wasclicked);
		
		//}
		
		////  איך בוחרים צמיג קוד עומס יצור מידות סגירה חלון
		
		
		//this.omes_info.close_mc.addEventListener("click", fl_close.bind(this));
		
		//function fl_close()
		//{
		//	this.omes_info.alpha=0;
		//	wasclicked=0
		//	 console.log(wasclicked);
		//	
		//}
		
		/*
		this.date_info.close_mc.addEventListener("click", fl_close.bind(this));
		
		function fl_close()
		{
			this.date_info.alpha=0;
			wasclicked=0
			 console.log(wasclicked);
			
		}*/
		
		//this.midot_info.close_mc.addEventListener("click", fl_close.bind(this));
		
		//function fl_close()
		//{
		//	this.midot_info.alpha=0;
		//	wasclicked=0
		//	 console.log(wasclicked);
		//	
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.date_info = new lib.date_info();
	this.date_info.parent = this;
	this.date_info.setTransform(474.5,349.4,0.845,0.847,0,0,0,444.8,252.7);

	this.omes_info = new lib.omes_info();
	this.omes_info.parent = this;
	this.omes_info.setTransform(474.5,349.3,0.845,0.847,0,0,0,444.8,252.6);

	this.midot_info = new lib.midot_info();
	this.midot_info.parent = this;
	this.midot_info.setTransform(474.2,349.3,0.845,0.847,0,0,0,445,251);

	this.madbaka_mazag_info01 = new lib.madbaka_mazag_info01();
	this.madbaka_mazag_info01.parent = this;
	this.madbaka_mazag_info01.setTransform(471.2,350,0.845,0.845,0,0,0,440.9,254.2);

	this.madbaka_delek_info = new lib.madbaka_delek_info();
	this.madbaka_delek_info.parent = this;
	this.madbaka_delek_info.setTransform(471.3,348.7,0.846,0.846,0,0,0,440.4,248.7);

	this.madbaka_sound_info = new lib.madbaka_sound_info();
	this.madbaka_sound_info.parent = this;
	this.madbaka_sound_info.setTransform(471.3,349,0.844,0.844,0,0,0,441.5,255.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.madbaka_sound_info},{t:this.madbaka_delek_info},{t:this.madbaka_mazag_info01},{t:this.midot_info},{t:this.omes_info},{t:this.date_info}]}).wait(1));

	// Layer 1
	this.text = new cjs.Text("לחץ על חלקי הצמיג והמדבקה לקבלת פרטים", "50px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 58;
	this.text.lineWidth = 911;
	this.text.parent = this;
	this.text.setTransform(901.3,89.7);

	this.madbaka_main = new lib.madbaka_main();
	this.madbaka_main.parent = this;
	this.madbaka_main.setTransform(2852.3,-706.1,1,1,0,0,0,460.2,245);

	this.main_tzamig = new lib.test001();
	this.main_tzamig.parent = this;
	this.main_tzamig.setTransform(1518.6,270.4);

	this.tzamig_01 = new lib.madbaka();
	this.tzamig_01.parent = this;
	this.tzamig_01.setTransform(2513.7,-796.5,1,1,0,0,0,460.2,331.8);

	this.instance = new lib.Bitmap48();
	this.instance.parent = this;
	this.instance.setTransform(284,0,1.218,1.222);

	this.date_01 = new lib.date();
	this.date_01.parent = this;
	this.date_01.setTransform(122.9,296.4,0.845,0.852,0,15.1,8.7,-53.9,53.1);
	new cjs.ButtonHelper(this.date_01, 0, 1, 1);

	this.instance_1 = new lib.yazran();
	this.instance_1.parent = this;
	this.instance_1.setTransform(213.6,433.9,0.853,0.847,0,0,8,56.1,58.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.kivon();
	this.instance_2.parent = this;
	this.instance_2.setTransform(271.9,481.2,0.845,0.87,0,-13.2,0,1.4,1.9);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.omes_01 = new lib.kodomes();
	this.omes_01.parent = this;
	this.omes_01.setTransform(386.8,371.4,0.85,0.847,0,0,6.4,1.3,3.1);
	new cjs.ButtonHelper(this.omes_01, 0, 1, 1);

	this.midot = new lib.Symbol1();
	this.midot.parent = this;
	this.midot.setTransform(366.8,278.8,0.85,0.847,0,0,-6.4,148.3,111.4);
	new cjs.ButtonHelper(this.midot, 0, 1, 1);

	this.instance_3 = new lib.Bitmap1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(157,164,0.509,0.51);

	this.madbaka_sound03 = new lib.madbaka_sound03();
	this.madbaka_sound03.parent = this;
	this.madbaka_sound03.setTransform(801,456.4,1.417,1.417,0,0,0,72.5,30.7);
	new cjs.ButtonHelper(this.madbaka_sound03, 0, 1, 1);

	this.madbaka_mazag01 = new lib.madbaka_mazag01();
	this.madbaka_mazag01.parent = this;
	this.madbaka_mazag01.setTransform(860.2,305.2,1.417,1.417,0,0,0,32.3,76);
	new cjs.ButtonHelper(this.madbaka_mazag01, 0, 1, 1);

	this.madbaka_delek02 = new lib.madbaka_delek02();
	this.madbaka_delek02.parent = this;
	this.madbaka_delek02.setTransform(756.4,306.5,1.417,1.417,0,0,0,41,76.9);
	new cjs.ButtonHelper(this.madbaka_delek02, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.madbaka_delek02},{t:this.madbaka_mazag01},{t:this.madbaka_sound03},{t:this.instance_3},{t:this.midot},{t:this.omes_01},{t:this.instance_2},{t:this.instance_1},{t:this.date_01},{t:this.instance},{t:this.tzamig_01},{t:this.main_tzamig},{t:this.madbaka_main},{t:this.text}]}).wait(1));

	// Layer 3
	this.instance_4 = new lib.arrow158377_960_720();
	this.instance_4.parent = this;
	this.instance_4.setTransform(528,217,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(468.1,-667.1,3324.4,1558.5);
// library properties:
lib.properties = {
	id: 'EA7D567108AB804AA87F3BB67C0A0525',
	width: 960,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/interactive_Wheel_atlas_.png", id:"interactive_Wheel_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EA7D567108AB804AA87F3BB67C0A0525'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;