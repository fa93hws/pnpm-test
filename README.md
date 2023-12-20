A demo for a yarn package to use a local pnpm package that depends on another local pnpm package.

### Dependency tree
`a-yarn-package` -> `even` (local pnpm) -> `odd` (local pnpm)

### Test Plan
For Yarn packages
1. Remove all `node_moduels` in all children packages if there is any
2. Run `yarn` in `a-yarn-package`
3. Run `node index.js` under yarn package, `console.log(isEven(2));` gives `true`
4. Make a change in `pnpm-workspace/odd/index.js`
5. Run `yarn install --force`
6. Run `node index.js` again, change in step 4 is making difference.

For pnpm packages
1. Remove all `node_modules` in all children packages, if there is any
2. Run `pnpm install` under `pnpm-workspace/even`.
3. Add a console.log to `pnpm-workspace/even/index.js`, such as `console.log(isOdd(3));`
4. Run `node index.js` under `pnpm-workspace/even`, `console.log(isOdd(3));` prints `true`
5. Make a change in `pnpm-workspace/odd/index.js`
6. Run `node index.js` again under `pnpm-workspace/even`, change in step 5 is making difference as expected.
