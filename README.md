# Requirements

Given an array of clicks, return the subset of clicks where:

1. For each IP within each one hour period, only the most expensive click is placed into the
   result set.
2. If more than one click from the same IP ties for the most expensive click in a one hour
   period, only place the earliest click into the result set.
3. If there are more than 10 clicks for an IP in the overall array of clicks, do not include any
   of those clicks in the result set.

# Submitting Code

-   Code is written in es6
-   First move to the project directory
-   Run command `npm install`
-   Run command `npm run test` to run _test cases_
-   Run command `npm run solution` to get the output.
-   Output will be written into **resultSet.json** file.
-   The solution first runs for 24 times depicting the hours of the day and then filters out the clicks which lie in that time range

**NOTE**: User can copy paste their input array into **clicks.json** file first then run command to check output.
