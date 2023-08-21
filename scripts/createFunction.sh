#!/bin/sh

set -e

if [[ "$#" -ne 1 ]] 
then
  echo 'Usage: <function_name>'
  exit 1
fi


if [[ -d "./src/${1}/" ]]
then
  echo 'Function already exists'
  exit 2
fi

mkdir -p "./src/${1}/"

cat > "./src/${1}/index.ts" <<- EOM
export default function() {

}
EOM

cat > "./src/${1}/test.ts" <<-EOM
import ${1} from ".";

describe("Test '${1}' function", () => {

})
EOM
