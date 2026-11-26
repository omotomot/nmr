import NMR from "../src/index.js"

NMR.createFID({
    freq: 2, // スピン周波数との差
    decay: 300,// スピンの減衰
    tMax: 15,// どの時間まで計算するのか（ms）
    dt: 0.01,// 時間の刻み幅（ms）
    config: {
        axis: {
            lineWidth: 1,
            color: "#000000"
        },
        data: {
            lineWidth:  2,
            color: "#FF0000"
        }
    }
});

