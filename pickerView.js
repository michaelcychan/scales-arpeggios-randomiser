class Pickerview {
  constructor(model) {
    this.model = model;
    const pickScaleButtonEl = document.querySelector('#pick');
    pickScaleButtonEl.addEventListener('click', () => {
      this.updateView()
    });
  }

  updateView() {
    const typeList = ["scales", "arpeggios", "chromatics", "dominant7th"]
    const gradeValue = document.getElementById('grade-selector').value;
    const checkedTypeList = []
    typeList.forEach(type => {
       if (document.getElementById(type).checked) {
        checkedTypeList.push(type)
       }
    })
    const bigList = this.model.getList(gradeValue)
    typeList.forEach(type => {
      let wholeList = bigList[type].join("<br>")
      if (wholeList == "") {
        wholeList = "None for this grade"
      }
      document.getElementById(`${type}-list`).innerHTML = wholeList
    })
    let randomChoice = this.model.randomPick(gradeValue, checkedTypeList);
    console.log(randomChoice)
    if (randomChoice == undefined) {
      randomChoice = "None was selected / available for this grade"
    }
    document.getElementById('what-to-practice').innerHTML = randomChoice
  }

}

module.exports = Pickerview