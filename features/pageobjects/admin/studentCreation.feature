Feature: Student creation

  Scenario Outline: As an admin, I can create a student

    Given I am on the student creation page
    When I create a student as admin
    Then I should see a success alert for student creation