const list = document.querySelector("#infi-list");

for(let i = 1; i <= 10; i++){
	list.innerHTML += `<li>Item ${i}</li>`
}

let count = 10;
let observer = new IntersectionObserver(entries =>{
	if(entries[0].isIntersecting){
		for(let i = 1; i <= 2; i++){
			count++;
			list.innerHTML += `<li>Item ${count}</li>`;
		}
		observer.unobserve(lastItem);
		lastItem = list.lastElementChild;
		observer.observe(lastItem);
	}
},{
	threshold: 1.0
});

let lastItem = list.lastElementChild;
observer.observe(lastItem);