function solution(phone_number) {
    const numArry = phone_number.split("")
    const lastNums = numArry.splice(-4).join('')
    const arr = numArry.fill('*', 0).join('')
    return arr +  lastNums
}
