[Gauge](https://github.com/getgauge/gauge) + [Taiko](https://github.com/getgauge/taiko) test framework uses for end-to-end testing

## Prerequisite

- [Gauge](https://github.com/getgauge/gauge)
- Node v12 or above

## Source code structure
```
.
├── specs
└── tests
    ├── common
    ├── page_object
    ├── page_ui
    └── steps_definition
```

### /specs
Where we define all BDD scenarios

### /steps_definition
Where we define step definition, acts as an abstraction layer between `specs` directory and taiko/gauge configuration


### /common
The configuration directory for gauge & taiko, if you ever want to change on config or add another taiko interaction, this directory is where you should look.

## Usage
### Run test

- Clone this repo
- `yarn` for dependencies installation
- Run `yarn test` or `gauge run specs` to run whole specs with headless mode
- If you want to run only one spec, use `gauge run specs/<name_spec.spec>`
- If you want run NO HEADLESS, use `HEADLESS_CHROME=false gauge run spec`

- The report is generated to file index.html under `reports/html-reports` folder