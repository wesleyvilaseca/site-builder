const editor = grapesjs.init({
    container: "#editor",
    formElement: true,
    width: "auto",
    storeManager: false,
    plugins: ["gjs-blocks-basic"],
    pluginsOpts: {
        "gjs-blocks-basic": {},
    },
    blockManager: {
        appendTo: "#blocks"
    },
    layerManager: {
        appendTo: "#layers-container"
    },
    stylesManager: {
        appendTo: "#styles-container",
        sectors: [
            {
                name: "Dimension",
                open: false,
                buildProps: ["width", "min-height", "padding"],
                properties: [{
                    type: "integer",
                    name: "the width",
                    property: "width",
                    units: ["px", "%", "rem"],
                    default: "auto",
                    min: 0
                }]
            }
        ]
    },
    traitManager: {
        appendTo: "#trait-container"
    },
    selectorManager: {
        appendTo: "#styles-container",
    },
    panels: {
        defaults: [
            {
                id: "basic-actions",
                el: ".panel__basic-actions",
                buttons: [
                    {
                        id: "visibility",
                        active: true, //active by default
                        className: "btn-toogle-borders",
                        label: "<i class='bi bi=border'></i>",
                        command: "sw-visibility", //built-in command
                    },

                ]
            },
            {
                id: "panel-devices",
                el: ".panel__devices",
                buttons: [
                    {
                        id: "device-desktop",
                        label: "<i class='bi bi-laptop'></i>",
                        command: function (e) { return e.setDevice("Desktop") },
                        active: true,
                        tooglable: false
                    },
                    {
                        id: "device-tablet",
                        className: "fa fa-tablet",
                        command: function (e) { return e.setDevice("Tablet") },
                    },
                    {
                        id: "device-mobile",
                        label: "<i class='bi bi-phone'></i>",
                        command: function (e) { return e.setDevice("Mobile") }
                    }
                ]
            }
        ]
    },
    deviceManager: {
        devices: [
            {
                id: "desktop",
                name: "Desktop",
                width: ""
            },
            {
                id: "tablet",
                name: "Tablet",
                width: "680px"
            },
            {
                id: "mobile",
                name: "Mobile",
                width: "320px",
                widthMedia: "480px"
            }
        ]
    }
})