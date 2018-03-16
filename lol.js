	document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        camera.position.x -= 0.1
    }
    if(event.keyCode == 39) {
        camera.position.x += 0.1
    }
	if(event.keyCode == 38) {
        camera.position.z -= 0.1
    }
	if(event.keyCode == 40) {
        camera.position.z += 0.1
    }
});
var loader = new THREE.FontLoader();

loader.load( 'fonts/gentilis_regular.typeface.json', function ( font ) {

	var geometry = new THREE.TextGeometry( 'Hello three.js!', {
		font: undefined,
		size: 80,
		height: 5,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 10,
		bevelSize: 8,
		bevelSegments: 5
	} );
} );


		var name = "money";
			var money;
			money = 0;
			
			var name = "moneydisp";
			var moneydisp;
			money = 0;
			
			
			var name = "mousenum";
			var mousenum;
			mousenum = 0;
			
			var name = "mouse";
			var mouse;
			mouse = 0.01;
			
			var name = "mousecost";
			var mousecost;
			mousecost = 10;
			
			var name = "mousecubenum";
			var mousecubenum;
			mousecubenum = 0;

			var name = "cps";
			var cps;
			cps = 0;
			
			function lol(){
			money+=1;
			}
			function lol2(){
			if (money >= mousecost){
			money-=mousecost;
			mousenum+=1;
			mousecost = Math.round(mousecost*1.2);
			}
			}
			
			var x = 10;
			var scene = new THREE.Scene();
			
			
			
			
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/(window.innerHeight-200), 0.1, 1000 );
			
			
			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight-200 );
			document.body.appendChild( renderer.domElement );
			//var material = new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load("image/level.png") } );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );
			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube2 = new THREE.Mesh( geometry, material );
			scene.add( cube2 );
			
			var geometry = new THREE.BoxGeometry( 5, 5, 0.1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
			var cube3 = new THREE.Mesh( geometry, material );
			scene.add( cube3 );
			cube3.position.set = (2,1,-5);
			camera.position.z = 5;
			
			
			var name = "once";
			var once;
			once = true;
			var render = function () {
				requestAnimationFrame( render );
				
				cube.rotation.x += 0.1;
				cube.rotation.y += 0.1;
				cube2.rotation.x -= 0.1;
				cube2.rotation.y -= 0.1;
				money+= mousenum*mouse;
				moneydisp = Math.round(money)
			document.getElementById("demo").innerHTML = "Coins: " + moneydisp;
			document.getElementById("demoo").innerHTML = "Number of mice: " + mousenum;
			document.getElementById("demooo").innerHTML = "Cost: " + mousecost;
			
			cps = mouse*mousenum;
			document.getElementById("cpss").innerHTML = "Cpf: " + cps;
				if(once){
			    var name = "newcube";
				var newcube
				var newcube = cube.clone();
				scene.add(newcube);
				newcube.position.set(2,1,-5);
				once = false;
				}
				renderer.render(scene, camera);
			};

			render();
