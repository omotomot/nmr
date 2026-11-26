import NMR from "NMR"

NMR.createFID({
    freq: 1,
    decay: 500,
    tMax: 10,
    dt: 0.01,
    config: {
        axis: {
            lineWidth: 1,
            color: "#000000"
        },
        data: {
            lineWidth:  2,
            color: "#ff0000"
        }
    }
});

