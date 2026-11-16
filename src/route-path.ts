/**
 * The public path of the current page, as the nav links and the sitemap spell it.
 *
 * `build.format: 'file'` makes `Astro.url.pathname` end in `.html` (`/resume.html`), and since
 * Astro 6 the home page reports `/index.html`. GitHub Pages serves them at `/resume` and `/`.
 */
export const routePath = (pathname: string): string =>
  pathname.replace(/\.html$/, '').replace(/\/index$/, '/');
