Feature: Login check
    As user I want to be able to connect as admin, teacher or student

    Scenario: Login form checking
    
        Given I open the url "http://localhost:1373/login"
        When I click on the element "#emailInput"
        And I set <email> to the inputfield "#emailInput"
        And I click on the element "#passwordInput"
        And I set <password> to the inputfield "#passwordInput"
        And I press "Enter"
        And I pause for 200ms
        Then I expect that the url is <redirection>

        Examples:
            | email                          | password    | redirection                             |
            | "christopherdebray@outlook.fr" | "yyyyyyyyy" | "http://localhost:1373/homepage"        |
            | "teacher@outlook.fr"           | "yyyyyyyyy" | "http://localhost:1373/homepageTeacher" |
            | "admin@outlook.fr"             | "yyyyyyyyy" | "http://localhost:1373/homepageAdmin"   |
            | "admin@outlook.fr"             | "kljqdhfsy" | "http://localhost:1373/login"           |
            | "noaccount@outlook.fr"         | "yyyyyyyyy" | "http://localhost:1373/login"           |