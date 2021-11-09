
function solution(s) {
    let leng = s.length
    let half = Math.floor(leng/2)
    
    return leng % 2 === 1 ? s[half] : `${s[half-1]}${s[half]}`
}