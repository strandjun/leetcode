var Input = [
        ["1", "0", "1", "0", "0"],
        ["1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "0"]
    ],
    Output = 6;

var Input = [
        ["1", "1", "1", "1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "1", "1", "0"],
        ["1", "1", "1", "1", "1", "1", "1", "0"],
        ["1", "1", "1", "1", "1", "0", "0", "0"],
        ["0", "1", "1", "1", "1", "0", "0", "0"]
    ],
    Output = 21;

var Input = [["1", "0"]],
    Output = 1;

var Input = [["0", "1"]],
    Output = 1;

var Input = [["0", "1"], ["1", "0"]],
    Output = 1;

var Input = [["1", "0"], ["1", "0"]],
    Output = 2;

var Input = [
        ["1", "0", "1", "1", "0", "1"],
        ["1", "1", "1", "1", "1", "1"],
        ["0", "1", "1", "0", "1", "1"],
        ["1", "1", "1", "0", "1", "0"],
        ["0", "1", "1", "1", "1", "1"],
        ["1", "1", "0", "1", "1", "1"]
    ],
    Output = 8;

var Input = [["0"]],
    Output = 0;

exports.Input = Input;
exports.Output = Output;


/**
 * because node don't support import/export syntax
 * The ESM module loader is experimental
 * so use method:
 * 1. modify js => mjs
 * 2. node  --experimental-modules 85.MaximalRectangle-0818.mjs
 *
 * // export default { Input };
 * // import Input from "./85.MaximalRectangle-0818-testcase.mjs";
 *
 * attention:
 * export default { Input };   => import Input form 'xxx';
 * export { Input };           => import { Input } form 'xxx';
 */
