export default function createFID({
    // 単位kHz 整数か小数 観測とスピンの差
    freq= 1,
    // 減衰具合
    decay= 500,
    // いつまで見たいか (ms)
    tMax= 10,
    //時間の刻み幅(ms)
    dt= 0.01,
    config= {
        axis: {
            lineWidth: 1,
            color: "#000000"
        },
        data: {
            lineWigth:  2,
            color: "#ff0000"
        }
    }
} = {}
){
    const target = document.querySelector("#fid-graph")
    //ページサイズが小さくてもスクロールいらずにしたい
    function fid(t) {
        return Math.cos(freq * t * 2 * Math.PI) * Math.exp(-decay * t * 0.001);
    }

    const canvas = document.createElement("canvas")
    const width = 400;
    const height = 300;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d")

    ctx.lineWidth = config.axis.lineWidth
    ctx.strokeStyle = config.axis.color
    ctx.beginPath()
    ctx.moveTo(0,height/2)
    ctx.lineTo(width,height/2)
    ctx.stroke()

    const data = [];
    for(let i=0; i <= tMax/dt; i++){
        const t = dt * i
        data.push({
            t: t,
            fid: fid(t),
        })
    }

    function toX(i, data){
        return (width / data.length)*i 
    }

    function toY(i, data){
        return -(height / 2) * data[i].fid + height/2
    }

    ctx.lineWidth = config.data.lineWidth
    ctx.strokeStyle = config.data.color

    for (let i=0; i < data.length-1; i++){
        ctx.beginPath()
        ctx.moveTo(toX(i, data), toY(i, data))
        ctx.lineTo(toX(i + 1, data),toY(i + 1, data))
        ctx.stroke()
    }

    target.append(canvas)
}

//export default createFID