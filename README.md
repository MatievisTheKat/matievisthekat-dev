# my portfolio site i guess

[![Build css](https://github.com/matievisthekat/matievisthekat.dev/actions/workflows/build_css.yml/badge.svg)](https://github.com/matievisthekat/matievisthekat.dev/actions/workflows/build_css.yml) [![Build js](https://github.com/matievisthekat/matievisthekat.dev/actions/workflows/build_js.yml/badge.svg)](https://github.com/matievisthekat/matievisthekat.dev/actions/workflows/build_js.yml)

### palettes

| colourblindness |                                light                                 | dark |
| :------------ | :------------------------------------------------------------------: | :--: |
| none       | [link](https://coolors.co/242d29-506966-7ba4a2-5d88a1-c79b8d-eeeeee) | [link](https://coolors.co/749083-30403e-669391-4a6d82-895443-212121) |
| protanopia    | [link](https://coolors.co/272729-5a5b66-8c8da2-6f709a-b3b390-eeeeee) | [link](https://coolors.co/808086-36373e-797991-59597c-727147-212121) |
| dueteranopia  | [link](https://coolors.co/27262a-595766-8a87a2-6d6999-b6b991-eeeeee) | [link](https://coolors.co/7e7c86-36343e-767391-57547b-757948-212121) |
| tritanopia    | [link](https://coolors.co/242a2a-516767-7da2a2-5f9695-c49393-eeeeee) | [link](https://coolors.co/758889-303e3e-689191-4b7878-864a4b-212121) |
| achromatopsia | [link](https://coolors.co/292929-616161-979797-7d7d7d-a6a6a6-eeeeee) | [link](https://coolors.co/868686-3a3a3a-858585-646464-616161-212121) |
| protanomaly   | [link](https://coolors.co/252a29-546066-8296a2-64799d-bea98e-eeeeee) | [link](https://coolors.co/798684-323a3e-6e8491-50617f-7f6545-212121) |
| deuteranomaly | [link](https://coolors.co/252a29-556266-8399a2-657c9d-bea68e-eeeeee) | [link](https://coolors.co/798884-333b3e-6f8791-51637f-7e6145-212121) |
| tritanomaly   | [link](https://coolors.co/242b29-506866-7ca3a2-5e8e9c-c5978f-eeeeee) | [link](https://coolors.co/748c85-303f3e-679291-4b727e-874f46-212121) |
| achromatomaly | [link](https://coolors.co/272b29-596463-8a9d9c-6e828d-b5a19a-eeeeed) | [link](https://coolors.co/7d8a84-353d3c-778b8a-586872-735b53-212120) |

| colourblindess | accents |
| :--- | :---: | :---: |
| none | [link](https://coolors.co/7d82b8-b7e3cc-c4ffb2-d6f7a3) |
| protanopia | [link](https://coolors.co/7f7faa-cacad1-dddec4-e4e4b7) |
| dueteranopia | [link](https://coolors.co/7e7ea7-c7c4d2-dad5c9-e2dfbc) |
| tritanopia | [link](https://coolors.co/7da09e-b9d5d6-c6d3d6-d7c7ca) |
| achromatopsia | [link](https://coolors.co/868686-d3d3d3-e4e4e4-e3e3e3) |
| protanomaly | [link](https://coolors.co/7d80b1-bfd4ce-ceebbb-dcecad) |
| deuteranomaly | [link](https://coolors.co/7e80b0-bfd7cf-cfefbc-dceeae) |
| tritanomaly | [link](https://coolors.co/7d90ae-b8dcd0-c5eac0-d7e0b2) |
| achromatomaly | [link](https://coolors.co/82849c-c6dacf-d5f0cd-ddecc6) |

### project structure
- `~/.github` GitHub configuration
  - `/workflows` GitHub workflows
    - `/build_css.yml` build `~/css` from `~/sass`
    - `/build_js.yml` build `~/js` from `~/ts`
- `~/fonts` custom fonts
  - `/raleway` Raleway custom font
    - `/OFL.txt` Open Font License
    - `/Raleway.*` font files in different formats (for browser compatibility)
- `~/img` all images used in the site
  - `/favicon.png` site favicon
  - `/me.png` the same as `favicon.png` but square
- `~/css` auto-generated from `~/sass`
  - `/raw` css parsed directly from sass. no optimization
      - `/**/*.css` auto-generated css files
  - `/prod` css parsed by postcss. optimized
      - `/**/*.css` auto-generated css files
      - `/**/*.css.map` auto-generated css sourcemaps
- `~/sass` Syntactically Awesome StyleSheets
  - `/common` styles available to any other file
    - `/*.scss` scss formatted sass styles
    - `/*.sass` sass formatted styles
  - `/components` styles for specific components
    - `/**/*.scss` scss formatted sass styles
    - `/**/*.sass` sass formatted styles
  - `/pages` styles for specific pages
    - `/**/*.scss` scss formatted sass styles
    - `/**/*.sass` sass formatted styles
- `~/js` auto-generated from `~/ts`
  - `/**/*.js` auto-generated js files
  - `/**/*.js.map` auto-generated js sourcemaps
- `~/ts`
  - `/common` code available to any other files
    - `/*.ts` typescript source files
  - `/components` code for specific components
    - `/*.ts` typescript source files
  - `/pages` code for specific pages
    - `/*.ts` typescript source files
- `~/**/*.html` source html for site pages
- `~/.prettierrc` Prettier formatting configuration
- `~/tsconfig.json` typescript compiler configuration
- `~/sass.sh` shortcut script to build sass
- `~/postcss.sh` shortcut script to build css for production use
- `~/CNAME` CNAME DNS record for GitHub Pages
- `~/README.md` this file
