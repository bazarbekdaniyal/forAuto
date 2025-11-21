console.log(
`%c
 /$$$$$$$                      /$$                     /$$
| $$__  $$                    |__/                    | $$
| $$  \\ $$  /$$$$$$  /$$$$$$$  /$$ /$$   /$$  /$$$$$$ | $$
| $$  | $$ |____  $$| $$__  $$| $$| $$  | $$ |____  $$| $$
| $$  | $$  /$$$$$$$| $$  \\ $$| $$| $$  | $$  /$$$$$$$| $$
| $$  | $$ /$$__  $$| $$  | $$| $$| $$  | $$ /$$__  $$| $$
| $$$$$$$/|  $$$$$$$| $$  | $$| $$|  $$$$$$$|  $$$$$$$| $$
|_______/  \\_______/|__/  |__/|__/ \\____  $$ \\_______/|__/
                                   /$$  | $$              
                                  |  $$$$$$/              
                                   \\______/               

                ✨ Dev by: Daniyal ✨
`,
"color:#b200ff; font-size:18px; font-weight:bold;"
);

console.log("%c[Autoclicker] Started (200ms interval)", "color:#aa00ff; font-weight:bold;");

window.daniyalClicker = setInterval(() => {
    const btn = document.querySelector(".right-page-navigation");
    if (btn) {
        btn.click();
    }
}, 200);

window.stopDaniyal = () => {
    clearInterval(window.daniyalClicker);
    console.log("%c[Autoclicker STOPPED]", "color:red; font-weight:bold;");
};
