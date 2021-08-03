#!/bin/bash

md_rows=""
NL=$'\n'

b_n='./Black/normal/PNG/128w'
b_r='./Black/round/PNG/128w'
c_n='./colorRGB/normal/PNG/128w'
c_r='./colorRGB/round/PNG/128w'
w_n='./White/normal/PNG/128w'
w_r='./White/round/PNG/128w'

create_markdown_row () {
    name=$(echo $1 | sed -e 's/ /-/g')
    md_rows+=$(echo $name | sed -e 's/_/ /g')
    md_rows+=" | ![$1](${c_n}/${name}.png) | ![$1](${c_r}/${name}_round.png)"
    md_rows+=" | ![$1](${b_n}/${name}.png) | ![$1](${b_r}/${name}_round.png)"
    md_rows+=" | ![$1](${w_n}/${name}.png) | ![$1](${w_r}/${name}_round.png)${NL}"
}


for picture in ./Black/Normal/PNG/128w/*; do
    # echo "proce ss ${picture}"
    filename=$(basename --  "${picture}")
    create_markdown_row "${filename%.*}"
    # generate_json "${filename%.*}"
done

cat README.in > README.md

echo '
### STIX Icon Overview

The following list shows all variations of the supported icons. 

  Object         |     RGB   | RGB, circle | Black | Black, circle | White | White, circle
  :------------- | :--------------: | :-----------: | :--------------: | :-----------: | :--------------: | :-----------: ' >> README.md
echo "${md_rows}" >> README.md
