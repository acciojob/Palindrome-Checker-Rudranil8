// complete the given function

function palindrome(str){
	let a=str.toLowerCase();
	let b="";
	for(let i=a.length-1; i>=0; i--){
		b=b+a[i];
	}
	if(a===b){
		return true;
	}
	else{
		return false;
	}
}
module.exports = palindrome
