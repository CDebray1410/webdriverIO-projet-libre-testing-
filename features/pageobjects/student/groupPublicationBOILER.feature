Feature: GroupPublication creation

  Scenario Outline: As a student, I can post publication in group page

    Given I open the url "http://localhost:1373/login"
    When I click on the element "#emailInput"
    And I set "christopherdebray@outlook.fr" to the inputfield "#emailInput"
    And I click on the element "#passwordInput"
    And I set "yyyyyyyyy" to the inputfield "#passwordInput"
    And I press "Enter"
    And I pause for 200ms
    And I click on the element "#Groupix"
    And I pause for 200ms
    And I click on the element "#publication-text"
    And I set "publicationGroupTestETE" to the inputfield "#publication-text"
    And I press "Enter"
    And I pause for 200ms
    Then I expect that element "#success-alert-box" is displayed