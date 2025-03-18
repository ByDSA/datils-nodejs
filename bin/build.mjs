#!/usr/bin/env zx

$.verbose = true;

const outDir = "build";

await $`rm -rf ${outDir}`;
await $`tsc -p tsconfig-build.json`;
await $`cp package.json pnpm-lock.yaml ./${outDir}`;

const jsonSubPath = "os/longnames.json";

await $`cp ./src/${jsonSubPath} ${outDir}/${jsonSubPath}`;
