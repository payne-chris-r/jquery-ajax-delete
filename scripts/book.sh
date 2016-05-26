#!/bin/sh

# use like ID=123 scripts/book.sh in terminal

curl --include --request GET http://localhost:3000/books/$ID
