// Just a simple function that adds two numbers
interface SumFunction {
    (a: number, b: number): number;
}

export const sum: SumFunction = function(a: number, b: number): number {
    return a + b;
};

