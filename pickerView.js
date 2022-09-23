class Pickerview {
  constructor(model) {
    this.model = model;
    const pickScaleButtonEl = document.querySelector('#pick');
    pickScaleButtonEl.addEventListener('click', () => {
      this.updateView()
    });
  }

  updateView() {
    const typeList = ["scales", "arpeggios", "chromatics"]
    const gradeValue = document.getElementById('grade-selector').value;
    const checkedTypeList = []
    typeList.forEach(type => {
       if (document.getElementById(type).checked) {
        checkedTypeList.push(type)
       }
    })
    const bigList = this.model.getList(gradeValue)
    typeList.forEach(type => {
      document.getElementById(`${type}-list`).innerHTML = bigList[type].join("<br>")
    })
    let randomChoice = this.model.randomPick(gradeValue, checkedTypeList);
    console.log(randomChoice)
    if (randomChoice == undefined) {
      randomChoice = "Please choose at least one list"
    }
    document.getElementById('what-to-practice').innerHTML = randomChoice
  }

}

module.exports = Pickerview