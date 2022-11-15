Feature: Class creation

  Scenario Outline: As an admin, I can create a class

    Given I am on the classCreation page
    When I create a class as admin
    Then I should see a success alert for class