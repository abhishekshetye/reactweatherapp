#include <bits/stdc++.h>
#define lli long long int
using namespace std;

lli arr[100005];

int main(){

	lli t, n, p, q;
	cin>>t;
	while(t--){

		cin>>n>>p>>q;
		for(lli i=0; i<n; i++){
			cin>>arr[i];
		}

		sort(arr, arr + n);

		lli ans=0;

		for(lli i=0; i<n; i++){

			if(p==0){
				if(arr[i]%2)
					continue;
				q -= arr[i]/2;
				if(q<0)
					break;
				ans++;
			}else if(q==0){
				if(arr[i]>p)
					break;
				p-=arr[i];
				ans++;
			}else{

				lli need = arr[i]/2;
				lli have = q;
				if(need>have){
					lli want = (need-have)*2 + arr[i]%2;
					q = 0;
					if(want > p){
						break;
					}
					p = p - want;
					ans++;
				}else{
					q = q - need;
					p = p - arr[i]%2;
					ans++;
				}
			}
		}
		cout<<ans<<endl;

	}

	return 0;
}