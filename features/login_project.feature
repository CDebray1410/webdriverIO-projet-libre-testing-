Feature: Login page

  Scenario Outline: As a user, I can log in

    Given I am on the login page
    When I login with <email> and <password>
    Then I should be redirected to page <redirection>

    Examples:
      | email                        | password  | redirection     |
      | christopherdebray@outlook.fr | yyyyyyyyy | homepage        |
      | teacher@outlook.fr           | yyyyyyyyy | homepageTeacher |
      | admin@outlook.fr             | yyyyyyyyy | homepageAdmin   |
      | admin@outlook.fr             | kljqdhfsy | login           |
      | noaccount@outlook.fr         | yyyyyyyyy | login           |
