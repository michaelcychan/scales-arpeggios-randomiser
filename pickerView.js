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
    document.getElementById('what-to-practice').innerHTML = this.model.randomPick(gradeValue, checkedTypeList)
  }

}

module.exports = Pickerview