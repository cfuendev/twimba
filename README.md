<p align="center">
<img src="./twimba-logo.png">
</p>

# twimba

A small (2kb min + gzip) compiler that converts Imba CSS into Vanilla CSS at runtime.

---

## Progress?

Jan 18, 2023: **Twimba v.0.1.0**, a.k.a initial alpha release. **This is far from stable.**

## Known issues

- Whitespace between a property's name and value causes problems.

## Credits

### Inspirations

- [Imba:](https://imba.io/) The JavaScript-targeting fullstack language that defines the beautiful CSS syntax Twimba compiles to. Currently my favorite take on CSS abstractions (And web language abstractions in general).
- [twind:](https://twind.style/) A small compiler that converts TailwindCSS's utility classes into CSS at runtime.
- [Tailwind CSS:](https://tailwindcss.com/) The paradigm-shifting standard that spawned the need for CSS-In-JS solutions like Twind and inspired Imba's CSS syntax.
- [Marko:](https://markojs.com/) A superset of HTML and SSR framework that made me want to write a CSR "petite" version of an already stablished language standard. The first time I ever fell in love with a web language abstraction.
- [goober:](https://goober.rocks/) An insanely small CSS-In-JS solution that really made me appreciate and admire lightweight packages.
- [little-vdom:](https://github.com/luwes/little-vdom) An insanely small JSX solution that convinced me we can have nice things packaged in a small bundle.

### Where I stole some of the README structure from

[Twind's GitHub README](https://github.com/tw-in-js/twind#readme)