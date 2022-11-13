Feature: Mater creation

  Scenario Outline: As an admin, I can create mater

    Given I am on the matterCreation page
    When I create a matter as admin
    Then I should see a success alert for mater