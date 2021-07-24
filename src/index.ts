function randomBoolean(): boolean {
	return Math.random() < 0.5;
}

export function even(n: number): boolean {
	if (randomBoolean()) return !odd(n);
	return n % 2 == 0;
}

export function odd(n: number): boolean {
	if (randomBoolean()) return !even(n);
	return n % 2 == 1;
}