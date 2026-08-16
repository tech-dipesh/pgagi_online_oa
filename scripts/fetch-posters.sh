#!/bin/bash
titles=(
  "Toy Story 5"
  "The Super Mario Galaxy Movie"
  "Project Hail Mary"
  "The Devil Wears Prada 2"
  "Scream 7"
  "Michael"
  "Hoppers"
  "The Mandalorian and Grogu"
)

for title in "${titles[@]}"; do
  encoded=$(python3 -c "import urllib.parse,sys; print(urllib.parse.quote(sys.argv[1]))" "$title")
  result=$(curl -s "https://api.themoviedb.org/3/search/movie?api_key=$TMDB_API_KEY&query=$encoded")
  poster=$(echo "$result" | grep -o '"poster_path":"[^"]*"' | head -1)
  echo "$title -> $poster"
done
