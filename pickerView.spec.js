/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const PickerView = require('./pickerView')
const Picker = require('./pickerModel')

describe('PickerView', () => {
  document.body.innerHTML = fs.readFileSync('./index.html');

  it('checks initial state', () => {
    const picker = new Picker()
    const view = new PickerView(picker);
    expect(document.querySelector('#title').innerHTML).toBe("Scales and Arpeggios Randomiser")
    expect(document.querySelector('#what-to-practice').innerHTML).toBe("Let's Go!")
  });
  it('shows list of grade 3 scales', () => {
    const picker = new Picker()
    const view = new PickerView(picker);
    const chromaticCheckBox = document.getElementById('scales')
    view.updateView();
    document.querySelector('#pick').click();
    expect(document.querySelector('#grade-list').textContent).toMatch("Scales:")
    expect(document.querySelector('#grade-list').textContent).toMatch("A minor (2 octaves) (melodic or harmonic at candidate's choice)")
    expect(document.querySelector('#grade-list').textContent).toMatch("D Minor (2 octaves)")
  });


})