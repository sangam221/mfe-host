#!/bin/sh

CONFIG_JS_PATH=/usr/share/nginx/html/env-config.js

echo "window.env = {" > $CONFIG_JS_PATH

printenv | grep "REACT_APP_" | while read -r line; do
  var_name=$(echo "$line" | cut -d '=' -f 1)
  var_value=$(echo "$line" | cut -d '=' -f 2- | sed 's/"/\\"/g')
  echo "  $var_name: \"$var_value\"," >> $CONFIG_JS_PATH
done

echo "};" >> $CONFIG_JS_PATH

echo "Generated $CONFIG_JS_PATH with the following content:"
cat $CONFIG_JS_PATH

exec nginx -g 'daemon off;'