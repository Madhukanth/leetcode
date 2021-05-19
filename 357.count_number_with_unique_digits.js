/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if(n === 1) return 10;
    
  let res = 0; 
  for(let i=1; i<=9; i++){
      dfs(`${i}`, new Set([i]));
  }  
    
    function dfs(i, memo){
        if(i.length < n){
           res++;
        }
        
        if(i.length === n){
            res++;
            return;
        }
        
        for(let j=0; j<=9; j++){
            if(memo.has(j)) continue;
           
            memo.add(j);
            dfs(i + j, memo); 
            memo.delete(j);
        } 
    }
    
    return res + 1;
};