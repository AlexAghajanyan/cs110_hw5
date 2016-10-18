const diamond = function(n){
	if(n%2 === 0)
		n++;
	
	for(let i=0; i<n; i++)
	{
		if(i <= n/2) {
			console.log(f1(' ', (2*n-1)/2-i) + f1('*', i*2+1));
		}
		
		else {
			console.log(f1(' ', (2*n-1)/2-(n-i-1)) + f1('*', (n-i-1)*2+1));
		}
	}
};

const f1 = function(a, num){
	let x = '';

	for(let i=0; i<num; i++)
		x += a;

	return x;
};

diamond(3);