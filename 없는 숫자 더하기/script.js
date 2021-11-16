function solution(numbers) {    
     const a = numbers.join('')
     const ans = []
     
     for(let i =0; i < 10; i++){
         if (a.match(i) == null) {ans.push(i)}
     }
     return ans.reduce((sum, val) => sum + val)
 }
 