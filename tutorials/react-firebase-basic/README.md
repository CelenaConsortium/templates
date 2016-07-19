Simple React and Firebase app
================

A simple react app with easy steps to add a firebase db
-------------------------------------------------------
1. download zip file
2. open index.html
3. Firebase Setup
    * go to https://firebase.google.com and create an account
    * click GET STARTED FOR FREE
    * click Create New Project and fill out stuff
    * click Add Firebase to your web app
    * copy and paste config part into index.html line 16
8. Firebase DB setup
    * go to your database in firebase.com left panel
    * click rules
    * for read and write, change auth != null to auth == nul
    * click publish
