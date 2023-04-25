<p align="center">
<img src="./twimba-logo.png">
</p>

# twimba

A small (4kb min + gzip) macro that converts inline Imba CSS into Vanilla CSS.

<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@cfuen/twimba?style=flat-square"> <img alt="GitHub" src="https://img.shields.io/github/license/cfuendev/twimba?style=flat-square"> <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@cfuen/twimba?style=flat-square">

---

It can be used at runtime like [Twind](https://github.com/tw-in-js/twind) or it can be used internally by your build scripts. All the same, it's Imba CSS-in-your-JS!


### Getting Started

Before anything, you'll have to add Twimba to your project

```sh
npm install @cfuen/twimba
```
```sh
yarn install @cfuen/twimba
```
```sh
pnpm install @cfuen/twimba
```

The most basic way to use Twimba is to use Vanilla JS and alter the DOM with it.

```js
import { twimba } from '@cfuen/twimba'

const div = document.createElement("div");
div.innerText = "Twimba is kinda cool";
div.style = twimba`fs:sm rd:md px:5 py:2 bg:cyan4 c:white`
document.body.appendChild(div);
```

## 🎯 Changelog

- Jan 19, 2023: **Twimba v.0.3.0**, Size and easing shorthands!

    - Feb 3, 2023: **0.3.1**
      - fix default value for unspecified size units being 1px instead of 0.25rem.
      - fix issue [#1](https://github.com/cfuendev/twimba/issues/1): `font-weight`'s value being parsed as a size value (And therefore getting transformed to px/rem).

    - Apr 20, 2023: **0.3.5**
      - fix issue [#2](https://github.com/cfuendev/twimba/issues/2): Three-letter shorthands like `ead` and `eaf` not being correctly transpiled.
      - fix YET ANOTHER PROBLEM from [#2](https://github.com/cfuendev/twimba/issues/2): Two-letter shorthands for easing properties (Such as `ea` and `eb`) not being correctly transpiled.
      - do not ask why the sudden jump to 0.3.5, I suck at managing npm packages

    - Apr 20, 2023: **0.3.8**
      - fix issue [#3](https://github.com/cfuendev/twimba/issues/3): Fix normal css properties breaking the Imba code parsing process (ie. Writing `background` as opposed to `bg`).
      - do not ask why the sudden jump to 0.3.8, I FORGOT TO TEST THROUGHOUTLY BEFORE RELEASE I'M SORRY (and I still suck at managing npm package versions)

- Jan 19, 2023: **Twimba v.0.2.0**, various orders of magnitude faster than v0.1 and supports colors.

    - Jan 21, 2023: **0.2.1**
      - fix custom properties not being generated properly.
      - fix numeric values without a unit not being appended with "px".
      - add simple build script for contributors (And for my mental health).

- Jan 18, 2023: **Twimba v.0.1.0**, a.k.a initial alpha release. **This is far from stable.**

## ✨ Features 

- [x] CSS shorthands (ie. bgc => background-color)

- [x] Custom properties (ie. px => padding-x => padding-left; pading-right;)

- [x] Colors (ie. teal6, red2)

- [x] Sizes (ie. xxs, md, xl3)

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