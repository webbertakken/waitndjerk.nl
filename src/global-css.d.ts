// Allow imports of CSS modules used throughout the docusaurus theme
// (e.g. `import styles from './index.module.css'`). Docusaurus handles
// these at build time; tsgo / tsc need the declarations to typecheck.
declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}
declare module '*.css';
