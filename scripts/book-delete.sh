#!/bin/sh

# Use like this: ID=123 scripts/book-delete.sh in terminal

curl --include --request DELETE http://localhost:3000/books/$ID
