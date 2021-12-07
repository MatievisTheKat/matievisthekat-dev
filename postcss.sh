#!/usr/bin/bash
postcss css/raw/**/*.css --base css/raw --dir css/prod --map --use autoprefixer postcss-preset-env cssnano postcss-reporter