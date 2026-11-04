---
slug: "node-http-quiz"
title: "Checkpoint: HTTP Deep Dive"
type: "quiz"
xp: 15
questions: [{"prompt": "A request for `/../../etc/passwd` reaches your static file handler. What protects you?", "options": ["URL encoding", "Resolving the path and checking it is still inside the root folder", "HTTPS"], "answer": 1}, {"prompt": "What does a `304 Not Modified` response contain?", "options": ["The full body again", "Headers only: the client reuses its cached copy", "An error message"], "answer": 1}, {"prompt": "Why does a browser send an OPTIONS request before a cross-origin PUT?", "options": ["To warm up the connection", "CORS preflight: asking whether the server allows it", "To authenticate"], "answer": 1}, {"prompt": "Which cookie attribute stops JavaScript from reading the cookie?", "options": ["Secure", "HttpOnly", "SameSite"], "answer": 1}, {"prompt": "Why process a large file as a stream instead of readFile?", "options": ["Streams are always faster", "Memory stays constant regardless of file size", "readFile is deprecated"], "answer": 1}, {"prompt": "Is Base64 a secure way to hide a password?", "options": ["Yes", "No: it is reversible encoding, not encryption"], "answer": 1}, {"prompt": "Why should request logs use an allow-list of fields?", "options": ["Smaller logs", "So secrets like passwords and tokens never get logged by accident", "JSON requires it"], "answer": 1}]
---
# Checkpoint: HTTP Deep Dive

Answer every question correctly to earn the XP.
