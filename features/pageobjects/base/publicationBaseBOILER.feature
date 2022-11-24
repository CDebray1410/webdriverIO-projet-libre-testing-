Feature: Publication creation

  Scenario Outline: As an admin or a teacher, I can post publications

    Given I open the url "http://localhost:1373/login"
    When I click on the element "#emailInput"
    And I set <email> to the inputfield "#emailInput"
    And I click on the element "#passwordInput"
    And I set <password> to the inputfield "#passwordInput"
    And I press "Enter"
    And I pause for 200ms
    And I click on the element "#publication-text"
    And I set "publicationTestETE" to the inputfield "#publication-text"
    And I press "Enter"
    And I pause for 200ms
    Then I expect that element "#success-alert-box" is displayed

    Examples:
        | email                          | password    |
        | "teacher@outlook.fr"           | "yyyyyyyyy" |
        | "admin@outlook.fr"             | "yyyyyyyyy" |