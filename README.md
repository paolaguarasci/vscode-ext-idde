# Cat Coding (aka web view)

###  Creare un pacchetto vsix

- Assicurarsi di avere definito le seguenti proprietà nel file `package.json`

```json
"publisher": "pg",
"icon": "images/icon.png",
```

- Editare il file README.MD (deve essere *diverso* dal boilerplate)
- Lanciare da riga di comando

```bash
$ vsce package
```