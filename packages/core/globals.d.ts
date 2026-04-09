declare module "bun:test" {
  type TestOptions = {
    timeout?: number;
  };

  export function afterEach(callback: () => void | Promise<void>): void;
  export function test(name: string, callback: () => void | Promise<void>): void;
  export function test(name: string, options: TestOptions, callback: () => void | Promise<void>): void;
  export const expect: any;
}

declare module "node:fs/promises" {
  export function mkdir(
    path: string,
    options?: {
      recursive?: boolean;
    },
  ): Promise<void>;

  export function mkdtemp(prefix: string): Promise<string>;

  export function readFile(path: string, encoding: string): Promise<string>;

  export function rm(
    path: string,
    options?: {
      recursive?: boolean;
      force?: boolean;
    },
  ): Promise<void>;

  export function stat(path: string): Promise<unknown>;

  export function writeFile(path: string, data: string | Uint8Array): Promise<void>;
}

declare module "node:os" {
  export function tmpdir(): string;
}

declare module "node:path" {
  type PathApi = {
    basename(path: string): string;
    dirname(path: string): string;
    isAbsolute(path: string): boolean;
    join(...paths: string[]): string;
    posix: {
      isAbsolute(path: string): boolean;
    };
  };

  const path: PathApi;
  export default path;
}

declare const Bun: {
  spawn(
    command: string[],
    options?: {
      stdin?: ArrayBuffer | ArrayBufferView | ReadableStream<Uint8Array> | "pipe" | "inherit" | "ignore";
      stdout?: "pipe" | "inherit" | "ignore";
      stderr?: "pipe" | "inherit" | "ignore";
    },
  ): {
    exited: Promise<number>;
    kill(): void;
    stderr?: ReadableStream<Uint8Array>;
    stdout?: ReadableStream<Uint8Array>;
  };
};
