Feature: Level creation

  Scenario Outline: As an admin, I can create level

    Given I am on the levelCreation page
    When I create a level as admin
    Then I should see a success alert for level