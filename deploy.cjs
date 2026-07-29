const ghpages = require("gh-pages");

ghpages.publish(
    "dist",
    {
        branch: "gh-pages",
        repo: "https://github.com/KhalilBaig/EduPanel-.git",
        message: "Deploy React app",
        dotfiles: true,
        add: true,      // ⚡ purana delete nahi karega, overwrite karega (ENAMETOOLONG fix)
        history: false
    },
    (err) => {
        if (err) {
            console.error("Deploy failed:", err);
        } else {
            console.log("🚀 Deploy successful!");
        }
    }
);
