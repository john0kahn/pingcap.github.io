#!/bin/bash

# mark all duplicate pages with a rel="canonical" link element
set -e

old_versions=(v2.1 dev)

consolidate_duplicate_urls() {
    local doc_temp_path=$1
    local doc_version=$2
    echo "executing..."

    if [ -d $doc_temp_path ]; then
        for html in $doc_temp_path/*
        do
            if [ -d $html ]; then
                consolidate_duplicate_urls $html $doc_version
            elif [[ ! -d $html ]] && [[ $html == *html ]] && ! $(grep -q "rel=\"canonical\"" $html); then
                file_path_in_stable=$(echo $html | sed -E "s/v[1-9]\.[0-9]|dev/stable/g")

                if [ -f $file_path_in_stable ]; then
                    path=$(dirname ${file_path_in_stable#*/})
                    echo $html
                    sed -i "s@<\/head>@<link rel=\"canonical\" href=\"https:\/\/pingcap.com\/$path\" \/><\/head>@g" $html
                    cat $html | grep "</head>"
                    ls $doc_temp_path
                fi
            fi
        done
    fi
}

for v in ${old_versions[@]}
do
    consolidate_duplicate_urls dist/docs-cn/$v $v
    consolidate_duplicate_urls dist/docs/$v $v
done

# consolidate_duplicate_urls dist/docs-cn/v2.1/how-to/get-started/explore-sql v2.1
