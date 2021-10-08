# Basic Js Framework

## Functionalities

- display list of job offers for main page
- application form for specific job offer
- REST endpoint to list/add job offers/users/applications

## Test API calls

- add users 

```javascript
fetch('/api/user', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({firstName: 'Jan', lastName: 'Kowalksi', email: 'jk@test.com'})})
```
- add job position

```javascript
fetch('/api/job-position', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({title: 'SDM'})})
```

## Setup

apps/frontend/.env.local