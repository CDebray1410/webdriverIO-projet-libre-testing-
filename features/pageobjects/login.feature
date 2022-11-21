Feature: Login check
    As user I want to be able to connect as admin, teacher or student

    Scenario: Login form check
    
        Given I open the url "http://localhost:1373/login"
        When I click on the element "#emailInput"
        And I set "christopherdebray@outlook.fr" to the inputfield "#emailInput"
        And I click on the element "#passwordInput"
        And I set "yyyyyyyyy" to the inputfield "#passwordInput"
        And I press "Enter"
        Then I expect that the url is "http://localhost:1373/homepage"