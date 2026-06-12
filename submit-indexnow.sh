#!/bin/bash
# IndexNow submit script — rentepermaand.nl
# Gebruik: bash submit-indexnow.sh
# Voer uit na elke nieuwe tool of inhoudelijke wijziging

curl -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d '{
    "host": "rentepermaand.nl",
    "key": "98c0f160d5404e209c2e7e7f11707176",
    "keyLocation": "https://rentepermaand.nl/98c0f160d5404e209c2e7e7f11707176.txt",
    "urlList": [
      "https://rentepermaand.nl/",
      "https://rentepermaand.nl/annuiteitencalculator",
      "https://rentepermaand.nl/extra-aflossen",
      "https://rentepermaand.nl/spaardoel-calculator",
      "https://rentepermaand.nl/compound-interest",
      "https://rentepermaand.nl/inflatie-calculator",
      "https://rentepermaand.nl/leningvergelijker",
      "https://rentepermaand.nl/rente-omrekenaar",
      "https://rentepermaand.nl/hypotheek-verloop",
      "https://rentepermaand.nl/schenking-calculator",
      "https://rentepermaand.nl/lening-amortisatie"
    ]
  }'

echo ""
echo "✅ IndexNow submit verzonden"
