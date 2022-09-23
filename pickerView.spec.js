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
    view.updateView();
    expect(document.querySelector('#title').innerHTML).toBe("Scales and Arpeggios Randomiser")
    expect(document.querySelector('#what-to-practice').innerHTML).toBe("Let's Go!")
  });
  it('shows list of grade 3 scales', () => {
    const picker = new Picker()
    const view = new PickerView(picker);
    view.updateView();
    document.querySelector('#pick').click();
    expect(document.querySelector('#grade-list').innerHTML).toBe("Ab Major (1 octave)")
  });


})