<p align="center">
<img src="./twimba-logo.png">
</p>

# twimba

A small (3kb min + gzip) macro that converts inline Imba CSS into Vanilla CSS at runtime.

---

## 🎯 Changelog

<!--Jan 19, 2023: **Twimba v.0.3.0**, Size shorthands are now supported!-->

- Jan 19, 2023: **Twimba v.0.2.0**, 22 orders of magnitude faster than v0.1 and supports colors.

    - Jan 21, 2023: **0.2.1**
      - fix custom properties not being generated properly.
      - fix numeric values without a unit not being appended with "px".
      - add simple build script for contributors (And for my mental health)

- Jan 18, 2023: **Twimba v.0.1.0**, a.k.a initial alpha release. **This is far from stable.**

## ✨ Features 

- [x] CSS shorthands (ie. bgc => background-color)

- [x] Custom properties (ie. px => padding-x => padding-left; pading-right;)

- [x] Colors (ie. teal6, red2)

- [ ] Sizes (ie. xxs, md, xl3)

- [ ] [Custom Units](https://imba.io/docs/css/syntax#custom-units)

## 💪 Advantages & Drawbacks

🔥 Zero config

Get some of the benefits of Imba's CSS without the need for... Imba, Vite, or anything really.

🛠️ Framework agnostic

Bring Twimba to your favorite tool! Works with anything, even SSR.

✔️ Nice, cheap and pretty

Twimba ships a macro for inline styles, not CSS.

🔒 Limited, thought

Inline styles means no pseudo-selectors, but you still get an awesome syntax and some palettes.

This could change in the future, but for now this is all you get.

## 🎬 Credits

### Inspirations

- [Imba:](https://imba.io/) The JavaScript-targeting fullstack language that defines the beautiful CSS syntax Twimba compiles to. Currently my favorite take on CSS abstractions (And web language abstractions in general).
- [twind:](https://twind.style/) A small compiler that converts TailwindCSS's utility classes into CSS at runtime.
- [Tailwind CSS:](https://tailwindcss.com/) The paradigm-shifting standard that spawned the need for CSS-In-JS solutions like Twind and inspired Imba's CSS syntax.
- [Marko:](https://markojs.com/) A superset of HTML and SSR framework that made me want to write a CSR "petite" version of an already stablished language standard. The first time I ever fell in love with a web language abstraction.
- [goober:](https://goober.rocks/) An insanely small CSS-In-JS solution that really made me appreciate and admire lightweight packages.
- [little-vdom:](https://github.com/luwes/little-vdom) An insanely small JSX solution that convinced me we can have nice things packaged in a small bundle.

### 😈 Where I stole some of the README structure from

[Twind's GitHub README](https://github.com/tw-in-js/twind#readme)