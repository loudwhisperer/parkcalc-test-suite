# parkcalc-test-suite

## Description
Evaluation of the Parking Calculator application via Cypress Test Suite

## Test Plan
Parking Cost Calculator

Test Plan

Prepared by: 

Brendan Borowski

Date: 10/14/2022

## Table of Contents 

- [1-0 Introduction](#1-0-introduction)
- [2-0 Objectives and Tasks](#2-1-objectives-and-tasks)
	- 2-1 Objectives
	- 2-2 Tasks
- [3-0 Scope](#3-0-scope)
- [4-0 Testing Strategy](#4-0-testing-strategy)
	- 4-1 User Acceptance Testing
- [5-0 Test Schedule](#5-0-test-schedule)
- [6-0 Features To Be Tested](#6-0-features-to-be-tested)
	- 6-1 Features Not To Be Tested 
- [7-0 Tools](#7-0-tools)

## 1-0 Introduction

The application “Parking Cost Calculator” is intended to let the end user know what they will pay based on where in the lot they park and how long they stay there. Testing will be done on all aspects of the calculator itself. I will also be looking to identify any bugs that can be caught before it goes into production.

## 2-0 Objectives and Tasks

The Sections below outline the Objectives sought out by this team and the individual Tasks needed to achieve those goals.

### 2-1 Objectives

To make sure each part of the dropdown list of parking areas calculates the proper amount for its respected area
To make sure the dates are being read correctly to illustrate the correct price
To prove the times are being read correctly to illustrate a correct price
To prove AM and PM are being set automatically based on difference in time 
To prove the calculate button works 

### 2-2 Tasks

Write a test that iterates over every dropdown option using the same time and date and looks for the proper return price and amount of time
Iterate over a date range in all 12 months to make sure all are consistent across each dropdown option
Track what each baseline for one hour is across each dropdown option then iterate over each one for up to 5 hours difference in the start time starting from one hour
Set 11 am and 1am in time ranges and check to see if the pm is being checked on auto
Look for the calculate button to do its function in every test 

## 3-0 Scope

I will be testing the Parking Cost Calculator on a M1 MacBook Pro using the Cypress E2E testing application on the google chrome browser. I want to test all functional aspects of the application as listed above and will not be testing the static HTML paragraphs giving the breakdown of prices and such as that will never change.

## 4-0 Testing Strategy

Since the application is currently live and in production we will be testing for user acceptance.

### 4-1 User Acceptance Testing
	
All tests will be written from the standpoint of an end user based on the Javascript functions written into the application. We will test for proper estimation of price based on date and time and iterate through each month to make sure it stays consistent across all options.

## 5-0 Test Schedule

10/14 - Tester Brendan Borowski will finish Test Plan and begin writing initial test of dropdown options

10/17 - Tester Brendan Borowski will write tests for consistency across all months 

10/18 - Tester Brendan Borowski will write tests for consistency across up to an 8 hour period and check for consistent multiples in calculations. That measure up with the provided guidelines below the calculator

10/19 - Tester Brendan Borowski will write a test to confirm that am and pm switch based on times entered using 11am and 12pm as the basis, then identify bugs if any and test them as well

## 6-0 Features to Be Tested

Dropdown menu of parking place options
Date fields
Time Fields
AM/PM Radio Buttons
Calculations Made 
The Calculate Button
Set AM/PM Dynamically based on time entered
Convert times to military time

### 6-1 Features Not to Be Tested
	
All Static HTML

## 7-0 Tools

For this round of testing on Parking Cost Calculator I will be using a M1 MacBook Pro, Cypress E2E Testing Application, Github and of course the application itself.

## Bugs Found 

Two bugs were found during testing APP-001 and APP-002 which can be found with relevant descriptions in the problems section of this repo. APP-001 has a test
written for it as well found in the bugtests directory of this repo