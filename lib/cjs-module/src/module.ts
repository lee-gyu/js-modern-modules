function sum(a: number, b: number): number {
    return a + b;
}

function concat<T>(a: T[], b: T[]): T[] {
    return [
        ...a,
        ...b
    ]
}

module.exports = { sum, concat }