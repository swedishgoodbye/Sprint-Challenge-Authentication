<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

Middleware: Extra functionality to implement when the server itself runs, or when just one route is used.
Sessions: A session is the status and duration of remaining logged into an account, even after closing the webpage.
bcrypt: Used to hash passwords to protect them in the db.
JWT: A secure way of mainting user access through the passing of tokens.

2.  What does bcrypt do in order to prevent attacks?

-Hashing is the most time expensive of the password encryption methods. Bcrypt utilizes hashing, salting, and key factors to create a very strong
password encryption.

3.  What are the three parts of the JSON Web Token?
- Header, Payload, Signature.
