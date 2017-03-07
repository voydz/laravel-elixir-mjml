laravel-elixir-mjml
====================

**DEPRECATION: SINCE LARAVEL SWITCHED TO WEBPACK WITH LARAVEL MIX, THIS PACKAGE IS NO LONGER MAINTAINED. IF YOU KEEP USING LARAVEL ELIXIR, THIS PLUGIN SHOULD WORK JUST FINE, THOUGH.**

Elixir Wrapper for MJML

## What is MJML?

(via https://mjml.io/)
> MJML is a markup language designed to reduce the pain of coding a responsive email. Its semantic syntax makes it easy and straightforward and its rich standard components library speeds up your development time and lightens your email codebase. MJML's open-source engine generates high quality responsive HTML compliant with best practices.

```
var elixir = require('laravel-elixir');

require('laravel-elixir-mjml');

elixir(function(mix) {
    mix.mjml('awesome-template.mjml', 'awesome-template.html');
});
```

This will get your mjml templates from `resources/assets/mjml` in this case `awesome-template.mjml` and saves the compiled version to `public/html/awesome-template.html`.
