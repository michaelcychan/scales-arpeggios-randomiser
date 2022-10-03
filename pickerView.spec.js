/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const PickerView = require('./pickerView')
const Picker = require('./pickerModel')
const gradeMapJSON = require('./gradeList.json')

describe('PickerView', () => {
  document.body.innerHTML = fs.readFileSync('./index.html');

  it('checks initial state', () => {
    const picker = new Picker(gradeMapJSON)
    const view = new PickerView(picker);
    expect(document.getElementById('title').innerHTML).toBe("Scales and Arpeggios Randomiser")
    expect(document.getElementById('what-to-practice').innerHTML).toBe("Let's Go!")
  });
  it('shows list of grade 3 scales', () => {
    const picker = new Picker(gradeMapJSON)
    const view = new PickerView(picker);
    const chromaticCheckBox = document.getElementById('scales')
    view.updateView();
    document.getElementById('pick').click();
    expect(document.getElementById('grade-list').textContent).toMatch("Scales:")
    expect(document.getElementById('scales-list').textContent).toMatch("A minor (2 octaves) (melodic or harmonic at candidate's choice)")
    expect(document.getElementById('arpeggios-list').textContent).toMatch("D Minor (2 octaves)")
    expect(document.getElementById('chromatics-list').textContent).toMatch("Starting on D (open string)")
    expect(document.getElementById('dominant7th-list').textContent).toMatch("None for this grade")
  });
  it('shows nothing for random dominant 7th for grade 3 scales', () => {
    const picker = new Picker(gradeMapJSON)
    const view = new PickerView(picker);
    const scalesCheckBox = document.getElementById('scales');
    const arpeggiosCheckBox = document.getElementById('arpeggios');
    const chromaticsCheckBox = document.getElementById('chromatics');
    scalesCheckBox.checked = false;
    arpeggiosCheckBox.checked = false;
    chromaticsCheckBox.checked = false;
    view.updateView();
    document.getElementById('pick').click();
    expect(document.getElementById('what-to-practice').textContent).toMatch("None was selected / available for this grade")
  });
  it('returns list of grade 4 practice list', () => {
    const picker = new Picker(gradeMapJSON)
    const view = new PickerView(picker);
    const gradeSelector = document.getElementById('grade-selector');
    gradeSelector.value = 4
    view.updateView();
    document.getElementById('pick').click();
    expect(document.getElementById('scales-list').textContent).toMatch("Ab Major (2 octaves)");
    expect(document.getElementById('scales-list').textContent).toMatch("C minor (2 octaves) (melodic or harmonic at candidate's choice)");
    expect(document.getElementById('arpeggios-list').textContent).toMatch("E Major (2 octaves)");
    expect(document.getElementById('chromatics-list').textContent).toMatch("Starting on E (starting form bottom E)");
    expect(document.getElementById('dominant7th-list').textContent).toMatch("In the key of D (Starting on bottom A)");
  })


})