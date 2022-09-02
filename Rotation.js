AFRAME.registercomponent("diver-rotation-reader", {
  schema:{
    speedOfRotation : {type : "number", default :0},
    speedOfAscent : {type:"number", default:0} 
  },
  init:function(){
    window.addEventListener("keydown", (e) => {

      this.data.speedOfRotation = this.el.getAttribute("rotation");
      this.data.speedOfAscent = this.el.getAttribute("position"); 

      var driverRotation = this.data.speedOfRotation 
      var driverPosition = this.data.speedOfAscent
      

      if(e.key === "ArrowRight"){
        if(driverRotation.x <10){
          driverRotation.x += 0.5 
          this.el.setAttribute("rotation", driverRotation);

        }
      } 

      if(e.key === "ArrowLeft"){
        if(driverRotation.x >-10){
          driverRotation.x -= 0.5 
          this.el.setAttribute("rotation", driverRotation);

        }
      }
      if(e.key === "ArrowUp"){
        if(driverRotation.z <20){
          driverRotation.z += 0.5 
          this.el.setAttribute("rotation", driverRotation);

        }
        if(driverPosition.y <2){
          driverPosition.y += 0.01 
          this.el.setAttribute("rotation", driverRotation);
        }
      } 
      if(e.key === "ArrowDown"){
        if(driverRotation.z >-10){
          driverRotation.z -= 0.5 
          this.el.setAttribute("rotation", driverRotation);

        }

        if(driverPosition.y >-2){
          driverPosition.y -= 0.01 
          this.el.setAttribute("rotation", driverRotation);
        }
      } 
    });
  }

});
