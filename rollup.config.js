import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/index.ts',
    plugins: [
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    module: 'esnext',
                    declaration: true
                }
            }
        }),
        resolve({
            browser: true,
        }),
        globals(),
        builtins()
    ],
    output: {
        extend: true,
        file: `dist/index.js`,
        format: 'es',
        sourcemap: true
    }
}