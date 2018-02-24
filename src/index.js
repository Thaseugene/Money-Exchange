// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var array=[];
    var res = {};
    var H,D,Q,N,P;
    if (currency>10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    if (currency<=0) {
        return {}
    }
    if (currency>1000) {
        H=Math.floor((currency-1)/50);
        Q=Math.floor(((currency-1)%50)/25);
        D=Math.floor((((currency-1)%50)%25)/10);
        N=Math.floor(((((currency-1)%50)%25)%10)/5);
        P=Math.floor((((((currency-1)%50)%25)%10)%5)/1)+1;
     
        var result = {H: H, Q: Q, D: D, N: N, P: P};
        for (var key in result) {
            if (result[key]>0) {
                console.log(result[key]);
                res[key]=result[key];
            }   
        } 
        return res;
    }
    if (currency<=1000) {
        H=Math.floor(currency/50);
        Q=Math.floor((currency%50)/25);
        D=Math.floor(((currency%50)%25)/10);
        N=Math.floor((((currency%50)%25)%10)/5);
        P=Math.floor(((((currency%50)%25)%10)%5)/1);

        var result = {H: H, Q: Q, D: D, N: N, P: P};
        for (var key in result) {
            //var value=result[key];
            if (result[key]>0) {
                console.log(result[key]);
                res[key]=result[key];
            }   
        } 
        return res;
    }
}
