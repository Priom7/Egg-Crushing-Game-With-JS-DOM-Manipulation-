window.onload = function() {
  var count = 0;
  var points = 0;
  var gameBody = document.getElementById("gameBody");
  var output = document.getElementById("output");
  var egg1 = document.getElementById("newEgg");
  var egg2 = document.getElementById("newEgg1");
  var egg3 = document.getElementById("newEgg2");
  var egg4 = document.getElementById("newEgg3");
  var egg5 = document.getElementById("newEgg4");
  egg5.addEventListener("click", CrackEgg5);
  egg1.addEventListener("click", CrackEgg);
  egg2.addEventListener("click", CrackEgg2);
  egg3.addEventListener("click", CrackEgg3);
  egg4.addEventListener("click", CrackEgg4);
  gameBody.addEventListener("mouseenter", OnGameBody);
  gameBody.addEventListener("mousemove", OnGameBody);
  setInterval(JoinEgg, 5000);
  


  function OnGameBody(e) {
    console.log("Event Type :" + e.type);
    output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';
    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";

  }

  function CrackEgg(e){
  	if (count<3){
  	console.log("EggCracked");
  	egg1.src = "egg.png";
  	count++;
  	points = points + 5;
  	}
  	
  }
  function CrackEgg2(e){
  	if (count<3){
  	console.log("EggCracked");
  	egg2.src = "money.png";
  	count++;
  	points = points + 100;
  }
  	
  }

   function CrackEgg3(e){
   	if (count<3){
  	console.log("EggCracked");
  	egg3.src = "goldcoin.png";
  	count++;
  	points = points + 500;
  }
  	
  }
  function CrackEgg4(e){
  	if (count<3){
  	console.log("EggCracked");
  	egg4.src = "chick.png";
  	count++;
  	points = points + 50;
  }
  }
  function CrackEgg5(e){
  	if (count<3){
  	console.log("EggCracked");
  	egg5.src = "extra.png";
  	count++;
  	points = points + 10;
  }
  }


  function JoinEgg(e){
  	console.log("EggJoined");
  	egg1.src = "negg.png";
  	egg2.src = "negg.png";
  	egg3.src = "negg.png";
  	egg4.src = "negg.png";
  	egg5.src = "negg.png";
  	console.log(count);
  	console.log(points);
  }
};
