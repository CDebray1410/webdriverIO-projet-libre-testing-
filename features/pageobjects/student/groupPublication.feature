Feature: GroupPublication pages

  Scenario Outline: As a student, I can post publication in group page

    Given I am a group page
    When I send publication on group page
    Then I should see a success alert for group publication