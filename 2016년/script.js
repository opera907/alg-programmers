function solution(a, b) {
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT']    

    const date = new Date(`2016-${a}-${b}`)
    const realDay = date.getDay() 

    return days[realDay]
}
