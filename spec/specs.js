describe ("romanNumeral", function() {
  it("returns I for the number 1", function() {
    expect(romanNumeral(1)).to.eql("I");
  });

  it("returns II for the number 2", function() {
    expect(romanNumeral(2)).to.eql("II");
  });

  it("returns III for the number 3", function() {
    expect(romanNumeral(3)).to.eql("III");
  });

  it("returns IV for the number 4", function() {
    expect(romanNumeral(4)).to.eql("IV");
  });
});
