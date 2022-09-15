const editor = grapesjs.init({
    container: "#editor",
    formElement: true,
    width: "auto",
    storeManager: false,
    plugins: ["gjs-preset-webpage"],
    pluginsOpts: {
        "gjs-preset-webpage" : {}
    }
})