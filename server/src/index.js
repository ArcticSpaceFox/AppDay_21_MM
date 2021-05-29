const { setup } = require("./backend")

setup({
	deep: true,
	forceSync: false
}).then(() => {
	console.log("main promise exited")
}).catch((e) => {
	console.error("an error occurred during setup");
	console.error(e);
});
