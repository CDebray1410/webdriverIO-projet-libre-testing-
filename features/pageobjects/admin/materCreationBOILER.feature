Feature: Mater creation

  Scenario Outline: As an admin, I can create mater

    Given I open the url "http://localhost:1373/login"
    When I click on the element "#emailInput"
    And I set "admin@outlook.fr" to the inputfield "#emailInput"
    And I click on the element "#passwordInput"
    And I set "yyyyyyyyy" to the inputfield "#passwordInput"
    And I press "Enter"
    And I pause for 200ms
    And I click on the element "#Matières"
    And I pause for 200ms
    And I click on the element "#name"
    And I set "materTestETE" to the inputfield "#name"
    And I click on the element "input[type='submit']"
    And I pause for 200ms
    Then I expect that element "#success-alert-box" is displayed