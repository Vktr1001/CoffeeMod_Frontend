import { copyFile, cp, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const files = [
  ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'assets/vendor/bootstrap/bootstrap.min.css'],
  ['node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 'assets/vendor/bootstrap/bootstrap.bundle.min.js'],
  ['node_modules/bootstrap-icons/font/bootstrap-icons.min.css', 'assets/vendor/bootstrap-icons/bootstrap-icons.min.css']
];

for (const [source, destination] of files) {
  const output = resolve(root, destination);
  await mkdir(dirname(output), { recursive: true });
  await copyFile(resolve(root, source), output);
}

await cp(
  resolve(root, 'node_modules/bootstrap-icons/font/fonts'),
  resolve(root, 'assets/vendor/bootstrap-icons/fonts'),
  { recursive: true }
);
