let leftH = document.getElementById('left-header-container');
let rightH = document.getElementById('right-header-container');
let chapter = document.getElementById('chapter');
let headerNav = document.getElementById('headerNav');
let newDiv = document.querySelector('.respNav');
let resources = document.getElementById('resources')
let burger = document.getElementById('burger');

// Otwieranie repsonsywnego menu przyciskiem

burger.addEventListener('click', function() {
    if (resources.className == "") {
        resources.className = "open";
        burger.className = "fa-solid fa-circle-xmark";
    } else if (resources.className == "open") {
        resources   .className = "";
        burger.className = "fa-solid fa-chart-simple";
    }
})

// =========================================================

let middlediv = document.querySelector("div#middlediv");
let buttonLeft = document.querySelector("input#left");
let buttonRight = document.querySelector("input#right");

let data = {
	chapter: 1,
	underchapter: 1,
	stats: {
		publicOpinion: 50,
		currency: 0, //(!)
		fuel: 0,
		relations: {
			//%
			chemist: 50,
			biologist: 50,
			physicist: 50,
			farmer: 50,
			handler: 50,
			translator: 50,
		},
		alienRelations: {
			Nerds: 50,
			Magicals: 50,
			AgreSuS: 50,
		},
	},
	notimeleft: false,
	areTeethBrushed : false,
	isCoffeDrunk : false,
	isBreakfastEaten : false
};

class MyEvent {
	constructor(photoPath, line, opL, opP, fL, fP) {
		this.photoPath = photoPath; //ex rysunek.svg
		this.line = line; //list of obiects (path,who, color, line)
		this.opL = opL; //string
		this.opP = opP; //string
		this.fL = fL; //function
		this.fP = fP; //function
	}
}

class MyLine {
	constructor(photoPath, who, color, text) {
		this.photoPath = photoPath;
		this.who = who;
		this.color = color;
		this.text = text;
	}
}

function doTheEvent(ob) {
	middlediv.textContent = "";

	let newBigPhoto = document.createElement("img");
	newBigPhoto.setAttribute("src", ob.photoPath);
	middlediv.insertAdjacentElement('beforeend', newBigPhoto);
	newBigPhoto.classList.add("bigPhoto");

	let whoinfo = document.createElement("div")
	whoinfo.classList.add("whoInfo");
	newBigPhoto.insertAdjacentElement('afterend', whoinfo)
	
	ob.line.forEach((element) => {
		let newPhoto = document.createElement("img");
		newPhoto.setAttribute("src", element.photoPath);
		whoinfo.insertAdjacentElement("beforeend", newPhoto);
		newPhoto.classList.add("linePhoto");

		let newSpanNode = document.createTextNode(element.who);
		let newSpan = document.createElement("span");
		newSpan.appendChild(newSpanNode);
		newSpan.style.color = element.color;
		newPhoto.insertAdjacentElement("afterend", newSpan);
		newSpan.classList.add("lineWho");

		let newTextNode = document.createTextNode(element.text);
		let newText = document.createElement("span");
		newText.appendChild(newTextNode);
		newSpan.insertAdjacentElement("afterend", newText);
		newText.classList.add("lineText");

		middlediv.insertAdjacentElement(
			"beforeend",
			document.createElement("br")
		);
	});

	buttonLeft.value = ob.opL;
	buttonRight.value = ob.opP;

	buttonLeft.addEventListener("click", ob.fL);
	buttonRight.addEventListener("click", ob.fP);

	console.log(ob);
}

//====================CHAPTER 1====================
//=====Underchapter 1=====

//wstawić jakiś sen (insp. Adamem Mickiewiczem XDDDD)

let c1u1e1 = new MyEvent(
	"bogosBinted/rysunek.svg",	//budzik.svg
	[
		new MyLine(
			"bogosBinted/rysunek.svg", "Jakub", "green",
			"Ooh, co to... co ty było? Co to niby miało... JUŻ 8, ZASPAŁEM! Ale ten sen..."
		),
	],
	"O co chodziło z tym snem?",
	"Zaraz się spóźnię!",
	function () {
		doTheEvent(c1u1e2v1);
	},
	function () {
		doTheEvent(c1u1e2v2)
	}
);

	let c1u1e2v1 = new MyEvent(
		"bogosBinted/rysunek.svg", //chmurka.svg
		[
			new MyLine("bogosBinted/rysunek.svg", "Jakub", "green",
			"Nigga"),
			new MyLine("bogosBinted/rysunek.svg", "bukaJ", "red",
			"Nigga2"),
		],
		"Zaraz się spóźnię!",
		"Nie mam czasu, muszę się zbierać",
		function () {
			notimeleft = true;

			doTheEvent(c1u1e3v1);
		},
		function () {
			notimeleft = true;

			doTheEvent(c1u1e3v1);
		}
	);

	let c1u1e2v2 = new MyEvent(
		"bogosBinted/rysunek.svg", //budzik.svg
		[new MyLine(
			"bogosBinted/rysunek.svg", "Jakub", "green",
			"Na dzisiejszym wywiadzie muszę się dobrze prezentować! Ale mogę nie zdążyć ze wszystkim."
		)],
		"Wypij kawę", 
		"Wymyj zęby",
		function (){
			data.isCoffeDrunk = true;
	
			if(notimeleft==true) {}
			else doTheEvent(c1u1e3v1)
		},
		function (){
			data.areTeethBrushed = true;
	
			if(notimeleft=true) {}
			else doTheEvent(c1u1e3v2)
		}
	)

	let c1u1e3v1 = new MyEvent(
		"bogosBinted/rysunek.svg", //kawa.svg
		[new MyLine(
			"bogosBinted/rysunek.svg", "Jakub", "green",
			"Dzień bez kawy to dzień stracony! Dobra, na szczęscie zostało mi trochę czasu na..."
		)],
		"Wymycie zębów",
		"Szbykie śniadanie",
		function (){
			data.areTeethBrushed = true;
	
			//nextOptionToRun
	
			console.log("OpcjaL")
		},
		function (){
			data.isBreakfastEaten = true;
	
			//nextOptionToRun
	
			console.log("OpcjaP")
		}
	)

	let c1u1e3v2 = new MyEvent(
		"bogosBinted/rysunek.svg", //zeby.svg
		[new MyLine(
			"bogosBinted/rysunek.svg", "Jakub", "green",
			"No, i takie ząbki ma człowiek sukcesu :DD teraz zostało mi jeszcze trochę czasu żeby .."
		)],
		"Zjeść śniadanie",
		"Wypić kawę",
		function (){
			data.isBreakfastEaten = true
	
			//nextOptionToRun
	
			console.log("OpcjaL")
		},
		function (){
			data.isCoffeDrunk = true
	
			//nextOptionToRun
	
			console.log("OpcjaP")
		}
	)

doTheEvent(c1u1e1);
/*
let cxuxexvx = new MyEvent(
	"bogosBinted/rysunek.svg",
	[new MyLine(
		"bogosBinted/rysunek.svg", "Jakub", "red",
		"testline"
	)],
	"LewaOpcja",
	"PrawaOpcja",
	function (){
		//stats

		//nextOptionToRun

		console.log("OpcjaL")
	},
	function (){
		//stats

		//nextOptionToRun

		console.log("OpcjaP")
	}
)
*/
