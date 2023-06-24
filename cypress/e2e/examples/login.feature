Feature: Login
Scenario: Wrong Login

    Given I access the homepage
    When I click in login option
    And I enter username and password wrongs
    And I click the login button
    Then A error message should be displayed