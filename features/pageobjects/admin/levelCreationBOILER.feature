Feature: Level creation

  Scenario Outline: As an admin, I can create level

    Given I open the url "http://localhost:1373/login"
    When I click on the element "#emailInput"
    And I set "admin@outlook.fr" to the inputfield "#emailInput"
    And I click on the element "#passwordInput"
    And I set "yyyyyyyyy" to the inputfield "#passwordInput"
    And I press "Enter"
    And I pause for 100ms
    And I click on the element "#Niveaux"
    And I pause for 100ms
    And I click on the element "#name"
    And I set "levelTestETE" to the inputfield "#name"
    And I click on the element "input[type='submit']"
    And I pause for 100ms
    Then I expect that element "#success-alert-box" is displayed