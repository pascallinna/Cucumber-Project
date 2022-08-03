$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/BackgroundChange.feature");
formatter.feature({
  "line": 2,
  "name": "Background Change Validation",
  "description": "",
  "id": "background-change-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BackgroundChangeColour"
    }
  ]
});
formatter.before({
  "duration": 4246591300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios page",
  "keyword": "Given "
});
formatter.match({
  "location": "BackgroundChangeSteps.user_is_on_the_techFios_page()"
});
formatter.result({
  "duration": 492841700,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should be able to find the \"Set SkyBlue Background\" button exists",
  "description": "",
  "id": "background-change-validation;user-should-be-able-to-find-the-\"set-skyblue-background\"-button-exists",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on the SetSkyBlueBackground button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundChangeSteps.i_click_on_the_setskybluebackground_button()"
});
formatter.result({
  "duration": 69514200,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundChangeSteps.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 229944100,
  "status": "passed"
});
formatter.after({
  "duration": 1460767900,
  "status": "passed"
});
formatter.before({
  "duration": 2319096500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios page",
  "keyword": "Given "
});
formatter.match({
  "location": "BackgroundChangeSteps.user_is_on_the_techFios_page()"
});
formatter.result({
  "duration": 287774100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should be able to find the \"Set White Background\" button exists",
  "description": "",
  "id": "background-change-validation;user-should-be-able-to-find-the-\"set-white-background\"-button-exists",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I click on the SetWhiteBackground button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundChangeSteps.i_click_on_the_setwhitebackground_button()"
});
formatter.result({
  "duration": 55803700,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundChangeSteps.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 195012000,
  "status": "passed"
});
formatter.after({
  "duration": 1355887100,
  "status": "passed"
});
});