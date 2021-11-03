function solution(answers) {
    
    var answer = [];
    //수포자 답변
    const a = [1,2,3,4,5]
    const b = [2, 1, 2, 3, 2, 4, 2, 5]
    const c = [3,3,1,1,2,2,4,4,5,5]
    
    
    const qa = ss(answers, a).length
    const qb = ss(answers, b).length
    const qc = ss(answers, c).length
    
      //1 답과 일치하는 요소만 담음
    function ss(answer, mine){
        let newa = []
        for(let i = 0; i < answer.length; i++) {
            if(answer[i] == mine[i % mine.length]) newa.push(mine[i])
        }
        return newa
    }

   
    //22 가장 긴배열
    const max = Math.max(qa, qb, qc)
    
    
    if(qa === max) {answer.push(1)}
    if(qb === max) {answer.push(2)}
    if(qc === max) {answer.push(3)}

    return answer

}
