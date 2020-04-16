#!/usr/bin/env bash
EXAMPLE_PATH=https://raw.githubusercontent.com/avillafiorita/jekyll-datapage_gen/master/example

curl -o ./_data/books.yml $EXAMPLE_PATH/_data/books.yml
curl -o ./_data/heirarchy.yml $EXAMPLE_PATH/_data/heirarchy.yml
curl -o ./_data/members.yml $EXAMPLE_PATH/_data/members.yml
curl -o ./_data/pets.json $EXAMPLE_PATH/_data/pets.json
curl -o ./_layouts/book.html $EXAMPLE_PATH/_layouts/book.html
curl -o ./_layouts/pet.html $EXAMPLE_PATH/_layouts/pet.html
curl -o ./_layouts/profile.html $EXAMPLE_PATH/_layouts/profile.html
