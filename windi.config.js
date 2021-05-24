
module.exports = {
    extract: {
        include: [
            "layouts/*.html",
            "./layouts/**/*.html",
            "content/*.{html,md}",
            "content/**/*.{html,md}"
        ],
        exclude: [
            "node_modules/**/*",
            ".git/**/*"
        ]
    }
}