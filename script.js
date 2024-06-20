// complete the given function

function palindrome(str){
	let a=str.toLowerCase();
	let b="";
	for(let i=a.length-1; i>=0; i--){
		b=b+a[i];
	}
	if(a===b){
		document.write(true);
	}
}
module.exports = palindrome
