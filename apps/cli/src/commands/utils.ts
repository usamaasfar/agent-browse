export function requireArg(value: string | undefined, name: string): string {
  if (value === undefined) {
    throw new Error(`Missing required argument: ${name}`);
  }

  return value;
}

export function readOption(args: string[], index: number, name: string): { value: string; nextIndex: number } {
  const value = args[index + 1];

  if (value === undefined) {
    throw new Error(`Missing value for option: ${name}`);
  }

  return { value, nextIndex: index + 2 };
}
