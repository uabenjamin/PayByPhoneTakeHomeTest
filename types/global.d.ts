/** Global definitions for development **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

// for json loader
declare module "*.json" {
    const value: any;
    export default value;
}
