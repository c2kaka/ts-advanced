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