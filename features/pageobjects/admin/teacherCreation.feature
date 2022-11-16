Feature: Teacher creation

  Scenario Outline: As an admin, I can create a teacher

    Given I am on the teacher creation page
    When I create a teacher as admin
    Then I should see a success alert for teacher creation