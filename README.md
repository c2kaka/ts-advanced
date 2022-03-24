# Advanced TypeScript

## Nullish operator

```
class Foo {
name: string;

    constructor(_name: string) {
        this.name = _name ?? 'no name';
    }

}
```

## Recursive type alias

```
type JSONValue = string | number | boolean | JSONObject | JSONArray;

interface JSONObject {
[key: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }
```

## @ts-ignore vs @ts-expect-error

```
type Bar = number & any;

// @ts-ignore
const num1: Bar = 'hello';
// @ts-expect-error
const num2: Bar = 'hello';
```

## unknow

```
function fooRisky() { }

function isError(error: unknown): error is Error {
    return error instanceof Error;
}


try {
    fooRisky();
} catch (error: unknown) {
    if (isError(error)) {
        console.log(error.stack);
    } else {
        console.log(error);
    }
}
```
