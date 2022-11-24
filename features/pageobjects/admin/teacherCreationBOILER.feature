Feature: Teacher creation

  Scenario Outline: As an admin, I can create teacher

    Given I open the url "http://localhost:1373/login"
    When I click on the element "#emailInput"
    And I set "admin@outlook.fr" to the inputfield "#emailInput"
    And I click on the element "#passwordInput"
    And I set "yyyyyyyyy" to the inputfield "#passwordInput"
    And I press "Enter"
    And I pause for 100ms
    And I click on the element "#Utilisateurs"
    And I pause for 100ms
    And I click on the element "#lastnameStudent"
    And I set "studentLNTestETE" to the inputfield "#lastnameStudent"
    And I click on the element "#firstnameStudent"
    And I set "studentFNTestETE" to the inputfield "#firstnameStudent"
    And I click on the element "#emailStudent"
    And I set "studentTestETE@outlook.fr" to the inputfield "#emailStudent"
    And I click on the element "#submitTeacherCreationFormButton"
    And I pause for 100ms
    Then I expect that element "#success-alert-box" is displayed