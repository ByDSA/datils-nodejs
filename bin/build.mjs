#!/usr/bin/env zx

import { defaultBuild } from "daproj/zx/build.mjs";

const { outDir } = await defaultBuild();
const jsonSubPath = "os/longnames.json";

await $`cp ./src/${jsonSubPath} ${outDir}/${jsonSubPath}`;
