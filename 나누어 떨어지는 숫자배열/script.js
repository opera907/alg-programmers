function solution(arr, divisor) {
    const fil = arr.filter(num => num % divisor === 0)
    fil.sort((a,b) => a - b)
    fil.length > 0 ? fil : fil.push(-1)
    return fil
}
