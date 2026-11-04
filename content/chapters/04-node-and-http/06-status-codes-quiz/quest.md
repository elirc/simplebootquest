---
slug: node-status-codes-quiz
title: "Checkpoint: HTTP Status Codes"
type: quiz
xp: 15
questions:
  - prompt: "A POST successfully creates a new todo. Which status?"
    options: ["200 OK", "201 Created", "204 No Content"]
    answer: 1
  - prompt: "A DELETE succeeds and there's nothing to return. Which status?"
    options: ["200 OK", "204 No Content", "404 Not Found"]
    answer: 1
  - prompt: "The JSON body is missing a required `title` field. Which status?"
    options: ["400 Bad Request", "404 Not Found", "500 Internal Server Error"]
    answer: 0
    explanation: "4xx means the client did something wrong. 400 (or 422) is the standard for invalid input."
  - prompt: "The user isn't logged in. Which status?"
    options: ["401 Unauthorized", "403 Forbidden", "404 Not Found"]
    answer: 0
    explanation: "401 means 'we don't know who you are'. 403 means 'we know who you are, and you can't do this'."
  - prompt: "The user is logged in but tries to edit someone else's post. Which status?"
    options: ["401 Unauthorized", "403 Forbidden", "409 Conflict"]
    answer: 1
  - prompt: "Signing up with an email that's already registered. Which status fits best?"
    options: ["400 Bad Request", "409 Conflict", "500 Internal Server Error"]
    answer: 1
  - prompt: "Your code threw an unexpected exception. Which status?"
    options: ["400 Bad Request", "500 Internal Server Error", "503 Service Unavailable"]
    answer: 1
---
# Checkpoint: HTTP Status Codes

Status codes are part of your API's contract. Clients branch on them, so picking the right one matters.

| Range | Meaning |
|-------|---------|
| 2xx | Success |
| 3xx | Redirect |
| 4xx | The **client** made a mistake |
| 5xx | The **server** made a mistake |

Answer every question correctly to earn the XP.
