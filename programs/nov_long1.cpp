#include <bits/stdc++.h>
#define lli long long int

using namespace std;


lli arr[600];

lli gcd(lli a, lli b){
	if(a==0)
		return b;
	return gcd(b%a, a);

}

long long gcd2(long long a, long long b){
    if (b == 0) return a;
    else return gcd(b,a % b);
}

lli lcm(lli a, lli b){
	return (a*b)/gcd2(a,b);
}

int main(){

	int t;
	lli n;

	cin>>t;
	while(t--){

	cin>>n;


	for(lli i=0; i<n; i++){
		cin>>arr[i];
	}


	lli ans=INT_MAX ; 

	for(lli i=0; i<n; i++){
		for(lli j=i+1; j<n; j++)
		ans = min(ans, lcm(arr[i], arr[j]));
	}

	cout<<ans<<"\n";



	}


	return 0;
}