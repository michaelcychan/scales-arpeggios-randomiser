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
    console.log(this.model.test())
    document.querySelector('#grade-list').textContent = this.model.getList(3)
    document.querySelector('#what-to-practice').textContent = this.model.randomPick(3, ['scales', 'arpeggios', 'chromatics'])
  }
}

module.exports = Pickerview