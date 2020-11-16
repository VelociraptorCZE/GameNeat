import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonJS from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";

export default {
    input: "./index.js",
    output: {
        name: "Game",
        file: "dist/game-neat.min.js",
        format: "iife"
    },
    plugins: [
        resolve(),
        commonJS({
            include: "node_modules/**"
        }),
        babel({
            presets: [
                ["@babel/env", { modules: false }]
            ],
            plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-private-methods"
            ]
        }),
        uglify()
    ]
};