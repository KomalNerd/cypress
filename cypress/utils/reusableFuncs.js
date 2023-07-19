class utilFuncs {
  isLabelPresent(labeltext) {
    return cy.contains(labeltext);
  }
}

export default new utilFuncs();
