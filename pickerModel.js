const gradeMap = require('./gradeList')

class Picker {
  constructor() {
    this.gradeMap = gradeMap
  }

  test() {
    return 'This is the Picker Model!'
  }

  getList(grade){
    return this.gradeMap[grade]
  }

  randomPick(grade, lists) {
    const fullList = []
    lists.forEach(type => {
      this.gradeMap[grade][type].forEach(scale => {
        fullList.push(scale)
      })
    })
    const index = Math.floor(Math.random() * fullList.length)
    return fullList[index]
  }
}

module.exports = Picker