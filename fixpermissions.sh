#!/bin/bash

find . -name "*.js" -exec chmod 644 {} ";"
find . -name "*.html" -exec chmod 644 {} ";"
find . -type d -exec chmod 755 {} ";"
