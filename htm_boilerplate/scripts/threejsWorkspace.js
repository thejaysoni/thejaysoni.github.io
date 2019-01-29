
function drawMy3d(){
	
    var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
			var canvas = document.getElementById("canvasId");
			renderer = new THREE.WebGLRenderer({ canvas: canvasId });
			//var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			
			

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: "red" } );
			var cube = new THREE.Mesh( geometry, material );
			material.light=true;
			scene.add( cube );


			camera.position.z = 7;

			var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.03;
				cube.rotation.y += 0.03;

				renderer.render( scene, camera );
			};
			
				window.addEventListener("wheel", function(e) {
					if(e.deltaY<0){
						camera.position.z = camera.position.z+1; 
					}else{
						camera.position.z = camera.position.z-1; 
					}
					
					}, true);
				
						
						document.body.appendChild( renderer.domElement );

			animate();
}
function removeMy3d(){
	
	//window.removeEventListener("wheel");
	
	document.getElementById("canvasId").remove();
	document.body.appendChild("<canvas id='canvasId'></canvas>");

   





}