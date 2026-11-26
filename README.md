# plugin-metta-design

Claude Code plugin packaging the Metta Design System (`metta-decks` skill): slides, editorial and marketing kits with Metta brand tokens, fonts, assets and components.

## Install

```
/plugin marketplace add Metta-Brasil/plugin-metta-design
/plugin install metta-design@metta-design
```

The skill is then available as `/metta-design:metta-decks`.

## Structure

```
.claude-plugin/
  plugin.json          # plugin manifest
  marketplace.json     # marketplace catalog (this repo is its own marketplace)
skills/metta-decks/
  SKILL.md             # skill entry point
  README.md            # brand context and design rules
  ...                  # tokens, fonts, assets, kits, previews
```

Source: [Metta-Brasil/metta-decks](https://github.com/Metta-Brasil/metta-decks).
