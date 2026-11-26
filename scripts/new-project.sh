#!/usr/bin/env bash
# Scaffold a standalone Metta project from one of the plugin's templates.
# Usage: new-project.sh <slides|ads|landing-page|editorial> <dest-dir>
# Copies the template plus the shared brand files (tokens, fonts, assets) into
# <dest-dir> and rewrites template paths from ../../../brand/ to brand/.
set -euo pipefail

kit="${1:-}"; dest="${2:-}"
root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
tpl="$root/skills/$kit/template"

if [[ -z "$kit" || -z "$dest" || ! -d "$tpl" ]]; then
  echo "usage: $(basename "$0") <slides|ads|landing-page|editorial> <dest-dir>" >&2
  exit 1
fi
if [[ -e "$dest" && -n "$(ls -A "$dest" 2>/dev/null)" ]]; then
  echo "error: $dest already exists and is not empty" >&2
  exit 1
fi

mkdir -p "$dest/brand"
cp -R "$tpl"/. "$dest"/
cp "$root/brand/colors_and_type.css" "$dest/brand/"
cp -R "$root/brand/assets" "$root/brand/fonts" "$dest/brand/"

find "$dest" -maxdepth 1 -type f \( -name '*.html' -o -name '*.jsx' -o -name '*.js' \) \
  -exec sed -i.bak 's#\.\./\.\./\.\./brand/#brand/#g' {} + 
find "$dest" -maxdepth 1 -name '*.bak' -delete

echo "$dest"
