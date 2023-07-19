import utilFuncs from "../utils/reusableFuncs";

class jobApplypo {
  label_logo() {
    return cy.get(".logo-img");
  }

  label_openingName(labeltext) {
    utilFuncs.isLabelPresent(labeltext);
  }

  label_openingLocation() {
    return cy.get(".job_location");
  }

  div_jobSpeciality() {
    return cy.get(".specialties");
  }

  div_openingHiddenDetails() {
    return cy.get(".job_hidden_details");
  }

  label_openingDetailsText() {
    return cy.get(".sign_in_text");
  }

  div_applyForm() {
    return cy.get("#quick_application_box");
  }

  div_openingDescription() {
    return cy.get(".description");
  }

  div_openingDescription() {
    return cy.get(".sign_in_text > .sign_in_link");
  }

  button_submit() {
    return cy.get("#user_form_submit");
  }

  input_firstName() {
    return cy.get("#user_first_name");
  }

  input_lastName() {
    return cy.get("#user_last_name");
  }

  input_email() {
    return cy.get("#user_email");
  }

  input_phone() {
    return cy.get("#user_phone");
  }

  input_password() {
    return cy.get("#user_password");
  }

  dropdown_state() {
    return cy.select("#user_state");
  }

  input_zipcode() {
    return cy.get("#user_zipcode");
  }

  button_upload() {
    return cy.get(".upload");
  }

  checkbox_agreement() {
    return cy.get("#user_email_optin");
  }

  icon_asterick(locator) {
    return cy.get(locator);
  }

  dropdown_occupation() {
    return cy.get("#user_occupation");
  }

  dropdown_speciality() {
    return cy.get("#user_specialty");
  }

  dropdown_state() {
    return cy.get("#user_state");
  }
}
export default new jobApplypo();
