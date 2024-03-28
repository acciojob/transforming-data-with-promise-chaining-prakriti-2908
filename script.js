//your JS code here. If required.
let btn = document.getElementById("btn");
let op = document.getElementById("output");

btn.addEventListener("click",fn);

function fn(e){
	let inpt = document.getElementById("ip").value;
	e.preventDefault();
	return new Promise((resolve,reject)=>{
		let a = inpt;
		setTimeout(()=>{
			resolve(a);
		},2000);
	})
}.then((data)=>{
	op.innerHTML = `Result: ${data}`;
	return new Promise((resolve)=>{
		let b = data*2;
		setTimeout(()=>{
			resolve(b);
		},1000)
	})
}).then((data)=>{
	op.innerHTML = `Result: ${data}`;
	return new Promise((resolve)=>{
		let c = data-3;
		setTimeout(()=>{
			resolve(c);
		},1000)
	})
}).then((data)=>{
	op.innerHTML = `Result: ${data}`;
	return new Promise((resolve)=>{
		let d = data/2;
		setTimeout(()=>{
			resolve(d);
		},1000)
	})
}).then((data)=>{
	op.innerHTML = `Result: ${data}`;
	return new Promise((resolve)=>{
		let e = data+10;
		setTimeout(()=>{
			resolve(e);
		},1000)
	})
}).then((data)=>{
	op.innerHTML = `Final Result: ${data}`;
}).catch((er)=>{console.log(er)});