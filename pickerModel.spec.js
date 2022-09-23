const Picker = require('./pickerModel');

describe('Picker', () => {
  const grade3List = {
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
  it('returns grade 3 list', () => {
    const picker = new Picker();
    expect(picker.getList(3)).toStrictEqual(grade3List)
  });
  it("picks a random scale from scales list from grade 3", () => {
    const picker = new Picker();
    jest.spyOn(global.Math, 'random').mockReturnValue(0)
    expect(picker.randomPick(3, ["scales"])).toBe("Ab Major (1 octave)")
  });
  it("picks another random scale from scales list from grade 3", () => {
    const picker = new Picker();
    jest.spyOn(global.Math, 'random').mockReturnValue(0.999)
    expect(picker.randomPick(3, ["scales"])).toBe("D minor (2 octaves)")
  });
  it("picks another random scale from scales + chromatic list from grade 3", () => {
    const picker = new Picker();
    jest.spyOn(global.Math, 'random').mockReturnValue(0.999)
    expect(picker.randomPick(3, ["scales", "chromatics"])).toBe("Starting on D (open string)")
  });
})