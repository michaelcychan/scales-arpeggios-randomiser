class Pickerview {
  constructor(model) {
    this.model = model;
    console.log(this.model.test())
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
    console.log(checkedTypeList)
    document.querySelector('#grade-list').textContent = this.model.getList(gradeValue)
    console.log(this.model.randomPick(3, ['chromatics']))
    document.querySelector('#what-to-practice').textContent = this.model.randomPick(gradeValue, checkedTypeList)
  }
}

module.exports = Pickerview