Feature: Class creation

  Scenario Outline: As an admin, I can create class

    Given I open the url "http://localhost:1373/login"
    When I click on the element "#emailInput"
    And I set "admin@outlook.fr" to the inputfield "#emailInput"
    And I click on the element "#passwordInput"
    And I set "yyyyyyyyy" to the inputfield "#passwordInput"
    And I press "Enter"
    And I pause for 100ms
    And I click on the element "#Classes"
    And I pause for 100ms
    And I click on the element "#name"
    And I set "classTestBoiler" to the inputfield "#name"
    And I select the option with the text "PingouinClass" for element "#classLevel"
    And I press "Enter"
    And I pause for 100ms
    Then I expect that element "#success-alert-box" is displayed