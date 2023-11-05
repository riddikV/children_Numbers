function hello() {
	for (let i of document.querySelectorAll(".logoOne_img")){
		i.style.transform = "translateX(0)";
	};
	let logoOne = document.querySelector(".logoOne");
	logoOne.style.opacity = 1; logoOne.style.borderRadius = "20px";
	document.querySelector(".wrapper").style.opacity = 0;
	setTimeout(() => {
		document.querySelector(".wrapper").style.display = "none";
	}, 3200);
};
hello()

const number = Array.from(document.querySelectorAll(".number"));
const zona = document.querySelector(".container__number");
const goodZona = document.querySelector(".goodEndPlay");

let targetElement = null;

function playNumber(numbers, zona) {
	for (let i of numbers) {
		
		i.addEventListener("dragstart", function(event) {
			targetElement = event.target;
			if (event.target.parentElement != zona){
				event.target.parentElement.classList.add("trans");
				setTimeout(() => {
					event.target.parentElement.classList.remove("trans");
				}, 200);
			};
			setTimeout(() => {
				event.target.classList.add("hide");
			}, 0);
		});

		i.addEventListener("dragend", function(event) {
			setTimeout(() => {
				targetElement.className = "number";
				targetElement = null;
			}, 0)
		});

		/*zona*/
		zona.addEventListener("dragover", function(event) {
      event.preventDefault();
    });
    zona.addEventListener("dragenter", function(event) {
      event.preventDefault();
      this.style.backgroundColor = "rgba(0, 0, 0, .25)";
    });
		zona.addEventListener("dragleave", function(e) {
      this.style.backgroundColor = "rgba(0, 0, 0, .1)";
    });
		zona.addEventListener("drop", function(event) {
			this.append(targetElement);
			this.style.backgroundColor = "rgba(0, 0, 0, .1)";
		});
	};
};

playNumber(number, zona)


document.querySelector(".button").addEventListener("click", function(event) {
	let cnt = 0;
	let spisoksZona = Array.from(zona.children);
	if (spisoksZona.length == 11){
		for (let i=0;i < spisoksZona.length;i++) {
			if (+(spisoksZona[i].textContent)!=i){
				spisoksZona[i].style.backgroundColor = 'red';
			}else{
				cnt += 1;
			}
		}
		if (cnt==11){
			goodZona.style.display = "block";
			setTimeout(() => {
				goodZona.classList.add("goodPlay");
			}, 100);
			setTimeout(() => {window.location.reload();}, 5000);
		}
	}else{
		document.querySelector(".header h1").textContent = "Add numbers, you need to use everything.";
		document.querySelector(".header h1").style.textDecoration = "underline";
	}
});