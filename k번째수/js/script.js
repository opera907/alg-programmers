const array = [1, 5, 2, 6, 3, 7, 4]
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

solution(array, commands)

function solution(array, commands) {

    let answer =[]
    
    for(let i=0; i < commands.length; i++){
        let target = commands.filter((elem, index) => index === i)[0]

        const sliceFir = target[0]
        const sliceSec = target[1]
        const nNum = target[2]

        const resultArry = sortFun(sliceFir, sliceSec, nNum)

         answer.push(resultArry) 


    }

    function sortFun (sliceFir, sliceSec, nNum) {
        const arrySliced = array.slice((sliceFir - 1), sliceSec)
        arrySliced.sort((a, b) => a - b)

        return arrySliced[(nNum - 1)]
    }

    return answer
    }