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
					
			function clickbutton(){
			money+=clickamount;
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
			
			window.onload = function() { 
			
function update() {	
				moneydisp = Math.round(money)
			document.getElementById("demo").innerHTML = "Coins: " + moneydisp;
			document.getElementById("totalcps").innerHTML = "Total cps: " + totalcps;
			
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
}
setInterval(update, 1000/60);
function moneyupdate() {	
				money+=(dog.cps)*dog.owned;	
				money+=(cat.cps)*cat.owned;	
}
setInterval(moneyupdate, 1000);
}
				
