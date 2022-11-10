Feature: Login page

  Scenario Outline: As a user, I can log in

    Given I am on the login page
    When I login with <email> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | email                        | password  | message                        |
      | christopherdebray@outlook.fr | yyyyyyyyy | You logged into a secure area! |
      | admin@outlook.fr             | yyyyyyyyy | Your username is invalid!      |
