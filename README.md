# git-fixup

Fixup a rebase

## Install

```bash
$ npm install [-g] git-fixit
```

## Example

Say you want to squash 3 commits into a fourth using fixup.
You would normally have to:

```bash
$ git rebase -i HEAD~4
# and then manually change the last 3 `pick` to `fixup`
# now, just run
$ git-fixit 4
```


## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
