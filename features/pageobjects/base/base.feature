Feature: Home pages

  Scenario Outline: As a teacher or admin, I can post publication

    Given I am on the base page
    When I send publication on homepage with role <role>
    Then I should see a success alert for publication

    Examples:
      | role    |
      | teacher |
      | admin   |