# Geometry Lib 2D

This repo contains a basic geometry library which operates on 2D points and vectors.
It was created to support some other geometry experiments / prototypes as an alternative to
including a more heavyweight framework. This library is quite lacking, containing only the
features needed to support downstream projects being developed in parallel.

# Usage and Distribution

The `geometry-lib-2d` has not been published to a package repository. Instead, it can be included by referencing
a tag from GitHub in your `package.json`. 

```json5
{
  // ...
  "dependencies": {
    "geometry-lib": "git://github.com/CheyneWilson/geometry-lib-2d.git#<tag>"
  }
}
```

The postinstall step `tsc || true` in the `package.json` compiles the library when it is installed. This technique is 
being trialled since it allowed downstream projects to complete installation even when there are breaking changes
in this library.

## Dev Setup

Install the node module dependencies via `npm` or your preferred package manager.
```shell
npm install
```

## Testing

Partial unit-test coverage exists via `jest`. This can be called via:
```shell
jest
```

## Building

Use `tsc` to create the javascript distribution.
```shell
tsc
```
