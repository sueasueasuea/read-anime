import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import mantine from 'eslint-config-mantine';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...mantine,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}'] }
];

export default eslintConfig;