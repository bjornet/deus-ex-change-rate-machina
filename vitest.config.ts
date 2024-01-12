import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    typecheck: {
      include: [
        "**/*.{test,spec}-d.?(c|m)[jt]s?(x)",
        "**/*.test.?(c|m)[jt]s?(x)",
      ],
    },
  },
  plugins: [tsconfigPaths()],
});
