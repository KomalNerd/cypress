import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import jobApplypo from "../../pageobject/jobApplyPagePO";
import loginPagePO from "../../pageobject/loginPagePO";
import applyConfirmationPO from "../../pageobject/applyConfirmationPO";
import * as data from "../../fixtures/data.json";
import "cypress-file-upload";
import jobApplyPagePO from "../../pageobject/jobApplyPagePO";

Given("user navigates to the direct shift url", () => {
  cy.visit("jobs/p/physicians-hospital-telehealth-openings-9057");
});

When("direct shift job apply page loads", () => {
  jobApplypo.label_logo().should("be.visible");
});

Then("user should see all the appropriate labels", () => {
  jobApplypo.label_openingName(data.jobName);
  jobApplypo.label_openingLocation().should("have.text", data.jobLocation);
  jobApplypo.div_jobSpeciality().should("be.visible");
  jobApplypo.div_openingHiddenDetails().should("be.visible");
  jobApplypo.label_openingDetailsText().should("be.visible");
  jobApplypo.label_openingDetailsText().should("be.visible");
});

And("user should see all the appropriate textboxes", () => {
  jobApplypo.div_applyForm().should("be.visible");
});

And("user click on the sign in button", () => {
  jobApplypo.div_openingDescription().should("be.visible").click();
});

And("user should be navigated to sign in page", () => {
  cy.url().should("eq", data.signinURL);
  loginPagePO.label_login(data.text_login);
});

And("user clicks the apply now button", () => {
  jobApplypo.button_submit().click();
});

And("Error saying that please fill out this field shall be thrown", () => {
  jobApplypo
    .input_firstName()
    .invoke("prop", "validationMessage")
    .should("equal", data.errorMsgForBlankInput);
});

And("asterisk shall be present against all the mandatoryField", () => {
  jobApplypo.input_firstName().should("have.attr", "required");
  jobApplypo.input_lastName().should("have.attr", "required");
  jobApplypo.input_email().should("have.attr", "required");
  jobApplypo.input_phone().should("have.attr", "required");
  jobApplypo.input_zipcode().should("have.attr", "required");
});

And("asterisk shall not be present against all the non mandatoryField", () => {
  jobApplyPagePO.input_password().should("not.have.attr", "required");
  jobApplyPagePO.button_upload().should("not.have.attr", "required");
  jobApplyPagePO.dropdown_occupation().should("not.have.attr", "required");
  jobApplyPagePO.dropdown_speciality().should("not.have.attr", "required");
  jobApplyPagePO.dropdown_state().should("not.have.attr", "required");
});

Then("user clicks on the upload button and uploads a pdf file", () => {
  cy.fixture("test.pdf", "base64").then((fileContent) => {
    cy.get('input[type="file"]').then((input) => {
      const file = new File([fileContent], "test.pdf", {
        type: "application/pdf",
      });
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);

      input[0].files = dataTransfer.files;
      cy.wrap(input).trigger("change", { force: true });
    });
  });
});

And("user Fills valid details in form", () => {
  jobApplyPagePO
    .input_firstName()
    .should("be.visible")
    .clear()
    .type(data.validFormData.firstname);
  jobApplyPagePO
    .input_lastName()
    .should("be.visible")
    .clear()
    .type(data.validFormData.lastname);
  jobApplyPagePO
    .input_email()
    .should("be.visible")
    .clear()
    .type(data.validFormData.email);
  jobApplyPagePO
    .input_phone()
    .should("be.visible")
    .clear()
    .type(data.validFormData.phone);
  jobApplyPagePO
    .input_zipcode()
    .should("be.visible")
    .clear()
    .type(data.validFormData.zipcode);
  jobApplyPagePO
    .dropdown_state()
    .should("be.visible")
    .select(data.validFormData.state);
  jobApplyPagePO
    .dropdown_occupation()
    .should("be.visible")
    .select(data.validFormData.occupation);
  jobApplyPagePO
    .dropdown_speciality()
    .should("be.visible")
    .select(data.validFormData.speciality);
  jobApplyPagePO.checkbox_agreement().should("be.visible").click();
  cy.wait(2000);
  cy.get(". recaptcha-checkbox-border").should("be.visible").click();
});

And("user should be navigated to the apply confirmation page", () => {
  applyConfirmationPO
    .label_PrimaryNote()
    .should("be.visible")
    .should("have.text", data.messageWhenApplicationIsSent);
});
