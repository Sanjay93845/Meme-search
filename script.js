const button=document.getElementById("button");
const bg=["#fffff","","#fffff","414141","#fffff"]
const fg=["#111","#fff","#111","#111","#fff"]

function color(){
	let limit=bg.length;
	let index=Math.floor(Math.random()*limit);
	button.style.background=bg[index];
	button.style.color=fg[index];
}