#!/bin/bash

# Create types directory if it doesn't exist
mkdir -p "./src/localization/types"

# Loop through all JSON files in the translations directory
for file in ./src/localization/translations/*.json;
do

  # Get the filename without the extension
  filename=$(basename -- "$file")
  filename="${filename%.*}"

  # Define the interface name
  interface_name="$(tr '[:lower:]' '[:upper:]' <<< ${filename:0:1})${filename:1}"

  # Read the translations data from the input file
  translations=$(cat "$file")

  # Generate the TypeScript interface
  interface="export default interface $interface_name {"
  for key in $(echo "$translations" | jq -r 'keys[]'); do
      value=$(echo "$translations" | jq -r ".$key")
      if [[ $value =~ ^\{ ]]; then
          sub_interface=$(echo "$value" | jq -r 'keys[]' | awk '{ print "\t"$1": [string,string];" }')
          interface="$interface\n\t'$key': {\n$sub_interface\t};"
      else
          interface="$interface\n\t'$key': [string,string];"
      fi
  done
  interface="$interface\n}"

  # Save the interface to a TypeScript file
  output_file="./src/localization/types/${filename//./}Raw.ts"
  echo "$interface" > "$output_file"

  # Output success message
   echo "Interface $interface_name saved to $output_file"
done
