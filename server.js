require("babel-register")({
    plugins: [
        ["transform-object-rest-spread", { "useBuiltIns": true }]
    ]
});
require('./src/entry')