// https://hackmd.io/@oW_dDxdsRoSpl0M64Tfg2g/rJc83gTrY

let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

//   map 문제
// 모든 이름을 대문자로 바꾸어서 출력하시오.
const answer1 = names.map((name) => {
  return name.toUpperCase()
})
console.log(`answer1 모든 이름을 대문자로 바꾸어서 출력하시오.`, answer1)

// 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
const answer2 = names.map(name => {
  const index = name.indexOf(' ')
  return name.slice(0, index)
})

console.log(`answer2 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])`, answer2)


// 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
const answer3 = names.map(name => {
  let temp = name.toUpperCase()

  return

})

console.log(`answer3 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])`, answer3)


// filter 문제
// 이름에 a를 포함한 사람들을 출력하시오.
const answer4 = names.filter(name => {
  return name.indexOf('a') == true
})
console.log(`answer4 이름에 a를 포함한 사람들을 출력하시오.`, answer4)

// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
const answer = ""
console.log(`answer 름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)`, answer)

// some 문제
// 전체 이름의 길이가 20자 이상인 사람이 있는가?
const answer5 = names.some(name => name.length <= 20)
console.log(`answer5 전체 이름의 길이가 20자 이상인 사람이 있는가?`, answer5)

// 성을 제외한 이름에 p를 포함한 사람이 있는가?
const answer6 = names.some(name => name.indexOf('p'))
console.log(`answer6 성을 제외한 이름에 p를 포함한 사람이 있는가?`, answer6)

// every 문제
// 모두의 전체 이름의 길이가 20자 이상인가?
const answer7 = names.every(name => name.length >= 20)
console.log(`answer7 모두의 전체 이름의 길이가 20자 이상인가?`, answer7)

// 모두의 이름에 a 가 포함되어 있는가?
const answer8 = names.every(name => name.indexOf('a') === true)
console.log(`answer8 모두의 이름에 a 가 포함되어 있는가?`, answer8)

// find 문제
// 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
const answer9 = names.find(name => name.length >= 20)
console.log(`answer9 전체 이름의 길이가 20자 이상인 사람을 찾으시오.`, answer9)

// 미들네임이 포함되어있는 사람을 찾으시오.(예-Mark Elliot Zuckerberg)
const answer10 = names.filter(name => {
  //r공백을 두개 찾나??
})
console.log(`answer10 미들네임이 포함되어있는 사람을 찾으시오.`, answer10)

// findIndex 문제
// 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
// 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.