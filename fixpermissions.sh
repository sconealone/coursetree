#!/bin/bash

find . -name "*.js" -exec chmod 644 {} ";"
find . -name "*.html" -exec chmod 644 {} ";"
find . -name "*.png" -exec chmod 644 {} ";"
find . -name "*.gif" -exec chmod 644 {} ";"
find . -name "*.css" -exec chmod 644 {} ";"
find . -name "*.ttf" -exec chmod 644 {} ";"
find . -name "*.woff" -exec chmod 644 {} ";"
find . -name "*.svg" -exec chmod 644 {} ";"
find . -type d -exec chmod 755 {} ";"
