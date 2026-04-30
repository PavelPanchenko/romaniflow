import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

/** @type {import("eslint").Linter.Config[]} */
const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url))
});

export default [...compat.extends("next/core-web-vitals")];
