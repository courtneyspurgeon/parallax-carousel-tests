
		var canvas,
			wrapper,
			stage,
			shape,
			fullWindowState;

		
		function init() {
			canvas = document.getElementById("full-canvas");
			wrapper = document.getElementById("wrapper");
			
			stage = new Stage(canvas);
			
			var g = new Graphics();
			g.setStrokeStyle(1);
			g.beginStroke(Graphics.getRGB(0,0,0));
			g.beginFill(Graphics.getRGB(255,0,0));
			g.drawCircle(0,0,100);
			
			shape = new Shape(g);
			shape.x = 400;
			shape.y = 300;
			stage.addChild(shape);
			
			Ticker.setFPS(32);
			Ticker.addListener(stage);
			
			animate();
		}
		
		function animate(){
			var tween;
			tween = Tween.get(shape).to({x:Math.random()*canvas.width,y:Math.random()*canvas.height},1000,Ease.cubicOut).call(animate);
		}
		
		function fullWindow(e) {
			if (!fullWindowState) {
				fullWindowState = true;
				// Canvas goes full screen
				canvas.className = "canvasFullWindow";
				wrapper.className = "wrapperFullWindow";
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			} else if (fullWindowState){
				fullWindowState = false;
				//canvas goes normal
				canvas.width = 800;
				canvas.height = 600;
				canvas.className = "canvasNormal";
				wrapper.className = "wrapperNormal";
			}
		}
		
		function onResizeHandler(e){
			if (fullScreenState){
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}
		}
		
		window.onload = init;
		window.onresize = onResizeHandler;
		