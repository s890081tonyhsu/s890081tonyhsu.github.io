/// <reference types="@rsbuild/core/types" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  // biome-ignore lint/complexity/noBannedTypes: reason
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.md' {
  let MDXComponent: () => JSX.Element;
  export default MDXComponent;
}

declare module '*.mdx' {
  let MDXComponent: () => JSX.Element;
  export default MDXComponent;
}
