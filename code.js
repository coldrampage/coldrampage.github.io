		var name = "money";
			var money;
			money = 0;
			
			var name = "moneydisp";
			var moneydisp;
			money = 0;
			
			var name = "totalcps";
			var totalcps;
			totalcps = 0;
			
			var name = "clickamount";
			var clickamount;
			clickamount = 1;
			
			var name = "clickamountcost";
			var clickamountcost;
			clickamouncost = 100;

			var mouse = {
			name: "Mouse",
			description: "A mouse who steals cheese for you to sell",
			cost: 10,
			cps: 0.1,
			totalcps: 0,
			pricemultiplier: 1.2,
			owned: 0,
			}
			
			var dog = {
			name: "Dog",
			description: "A dog who steals money for you",
			cost: 500,
			cps: 5,
			totalcps: 0,
			pricemultiplier: 1.2,
			owned: 0,
			}
			
			var cat = {
			name: "Cat",
			description: "A cat who steals money for you",
			cost: 1000,
			cps: 15,
			totalcps: 0,
			pricemultiplier: 1.2,
			owned: 0,
			}
			
			var ninja = {
			name: "Ninja",
			description: "A ninja who steals money for you",
			cost: 2000,
			cps: 30,
			totalcps: 0,
			pricemultiplier: 1.2,
			owned: 0,
			}
			
			var bank = {
			name: "bank",
			description: "A bank who scams for you",
			cost: 4000,
			cps: 70,
			totalcps: 0,
			pricemultiplier: 1.2,
			owned: 0,
			}
					
			function clickbutton(){
			money+=clickamount;
			}
			
			function clickbuttonup(){
			if (money >= clickamouncost){
			money-= clickamouncost;
			clickamount *=2;
			clickamouncost*=2
			}
			}
					
			function buydoog(){
			if (money >= dog.cost){
			money-=dog.cost;
			dog.owned+=1;
			totalcps +=dog.cps
			dog.totalcps +=dog.cps
			dog.cost = Math.round(dog.cost*dog.pricemultiplier);
			}}
			
			function buycat(){
			if (money >= cat.cost){
			money-=cat.cost;
			cat.owned+=1;
			totalcps +=cat.cps
			cat.totalcps +=cat.cps
			cat.cost = Math.round(cat.cost*cat.pricemultiplier);
			}}
			
			function buymouse(){
			if (money >= mouse.cost){
			money-=mouse.cost;
			mouse.owned+=1;
			totalcps +=mouse.cps
			mouse.totalcps +=mouse.cps
			mouse.cost = Math.round(mouse.cost*mouse.pricemultiplier);
			}}
			
			function buyninja(){
			if (money >= ninja.cost){
			money-=ninja.cost;
			ninja.owned+=1;
			totalcps +=ninja.cps
			ninja.totalcps +=ninja.cps
			ninja.cost = Math.round(ninja.cost*ninja.pricemultiplier);
			}}
			
			function buybank(){
			if (money >= bank.cost){
			money-=bank.cost;
			bank.owned+=1;
			totalcps +=bank.cps
			bank.totalcps +=bank.cps
			bank.cost = Math.round(bank.cost*bank.pricemultiplier);
			}}
			
			window.onload = function() { 
			
function update() {	
				moneydisp = Math.round(money)
				totalcps = Number(totalcps.toFixed(1)); 
				mouse.totalcps = Number(mouse.totalcps.toFixed(1)); 
			document.getElementById("demo").innerHTML = "Coins: " + moneydisp;
			document.getElementById("totalcps").innerHTML = "Total cps: " + totalcps;
			document.getElementById("upcostdisp").innerHTML = "Amount per click: "+ clickamount + " Upgrade money per click cost: " + clickamouncost;

			
			document.getElementById("alldogcps").innerHTML = "Total " + dog.name + " cps: " + dog.totalcps;
			document.getElementById("dogcps").innerHTML = "Cps: " + dog.cps;
			document.getElementById("name").innerHTML = dog.name;
			document.getElementById("cost").innerHTML = "Cost: " + dog.cost;
			document.getElementById("amount").innerHTML = "Number of " + dog.name + "s : " + dog.owned;
			document.getElementById("description").innerHTML = dog.description;
			
			document.getElementById("allcatcps").innerHTML = "Total " + cat.name + " cps: " + cat.totalcps;
			document.getElementById("catcps").innerHTML = "Cps: " + cat.cps;
			document.getElementById("catname").innerHTML = cat.name;
			document.getElementById("catcost").innerHTML = "Cost: " + cat.cost;
			document.getElementById("catamount").innerHTML = "Number of " + cat.name + "s : " + cat.owned;
			document.getElementById("catdescription").innerHTML = cat.description;
			
			document.getElementById("allmousecps").innerHTML = "Total " + mouse.name + " cps: " + mouse.totalcps;
			document.getElementById("mousecps").innerHTML = "Cps: " + mouse.cps;
			document.getElementById("mousename").innerHTML = mouse.name;
			document.getElementById("mousecost").innerHTML = "Cost: " + mouse.cost;
			document.getElementById("mouseamount").innerHTML = "Number of " + mouse.name + "s : " + mouse.owned;
			document.getElementById("mousedescription").innerHTML = mouse.description;
			
			document.getElementById("allninjacps").innerHTML = "Total " + ninja.name + " cps: " + ninja.totalcps;
			document.getElementById("ninjacps").innerHTML = "Cps: " + ninja.cps;
			document.getElementById("ninjaname").innerHTML = ninja.name;
			document.getElementById("ninjacost").innerHTML = "Cost: " + ninja.cost;
			document.getElementById("ninjaamount").innerHTML = "Number of " + ninja.name + "s : " + ninja.owned;
			document.getElementById("ninjadescription").innerHTML = ninja.description;
			
			document.getElementById("allbankcps").innerHTML = "Total " + bank.name + " cps: " + bank.totalcps;
			document.getElementById("bankcps").innerHTML = "Cps: " + bank.cps;
			document.getElementById("bankname").innerHTML = bank.name;
			document.getElementById("bankcost").innerHTML = "Cost: " + bank.cost;
			document.getElementById("bankamount").innerHTML = "Number of " + bank.name + "s : " + bank.owned;
			document.getElementById("bankdescription").innerHTML = bank.description;
}
setInterval(update, 1000/60);
function moneyupdate() {	
				money+=totalcps
				
}
setInterval(moneyupdate, 1000);
}
				
