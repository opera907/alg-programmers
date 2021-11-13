const s = "1zerotwozero3"
function solution(s){
    const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    //s에 포함된 숫자들
    const incNum = nums.filter(num => s.match(num))
    //업데이트 될 answer
    let answer = s

    //포함된 문자열을 숫자로 치환 
    //1. forEach이용
    incNum.forEach((n)=> answer = answer.replace(new RegExp(`${n}`, 'g'), nums.indexOf(n)))

    return answer

    //2. for문 이용
    // for(let i =0; i < incNum.length; i++){
    //     //answer = answer.replace(incNum[i], nums.indexOf(incNum[i])) 요러면 결과값 102zero3
    //     answer = answer.replace(new RegExp(`${incNum[i]}`, 'g'), nums.indexOf(incNum[i]))
    // }


}
