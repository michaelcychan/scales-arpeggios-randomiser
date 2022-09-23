class Picker {
  constructor() {
    this.gradeMap = {
      3: {
        "scales": [
          "Ab Major (1 octave)",
          "Eb Major (1 octave)",
          "E Major (1 octave)",
          "Bb Major (2 octaves)",
          "D Major (2 octaves)",
          "A minor (2 octaves) (melodic or harmonic at candidate's choice)",
          "D minor (2 octaves)"
        ],
        "arpeggios": [
          "Ab Major (1 octave)",
          "Eb Major (1 octave)",
          "E Major (1 octave)",
          "Bb Major (2 octaves)",
          "B Major (2 octaves)",
          "A Minor (2 octaves)",
          "D Minor (2 octaves)"
        ],
        "chromatics": [
          "Starting on D (open string)"
        ]
      } 
    }
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