export function sum(a: number, b: number): number {
    return a + b;
}

export function concat<T>(a: T[], b: T[]): T[] {
    return [
        ...a,
        ...b
    ]
}