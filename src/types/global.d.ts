/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare global {
  namespace Vi {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interface JestAssertion<T = any>
      extends jest.Matchers<void, T>,
        TestingLibraryMatchers<T, void> {}
  }
}

// Fix for defaultProps deprecation in React 19
declare module 'react' {
  interface FunctionComponent<P = Record<string, unknown>> {
    defaultProps?: Partial<P> | undefined;
  }
}
