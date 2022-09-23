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
    const gradeValue = document.getElementById('grade-selector').value;
    const checkedTypes = document.querySelector('#chromatics')
    console.log(checkedTypes)
    document.querySelector('#grade-list').textContent = this.model.getList(gradeValue)
    console.log(this.model.randomPick(3, ['chromatics']))
    document.querySelector('#what-to-practice').textContent = this.model.randomPick(gradeValue, ['scales', 'arpeggios', 'chromatics'])
  }
}

module.exports = Pickerview