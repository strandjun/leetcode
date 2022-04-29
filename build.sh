#!/bin/bash

ls */**.{ts,js} | awk 'match($0, "\/[^.]*?") {print substr($0, RSTART+1, RLENGTH-1) " " $0}' | sort -k 1 -n | awk -F' ' '{print $2}' | awk -F'/' '{print "* ["$2"](./"$0")"}' | pbcopy


# First, add execute permission to bulid.sh => chmod u+x build.sh
# Then, execute => ./build.sh
# At last, the file directory is already in your clipboard.