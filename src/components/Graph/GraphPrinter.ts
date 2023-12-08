class GraphPrinter{
    SIZE = 300;
    LINE_WIDTH = 2;
    TEXT_SIZE = 20;
    TEXT_MARGIN = 15;
    TEXT_LINE_HEIGHT = 3;
    COLOR_RED = "#b50300"
    COLOR_GREEN = "#00b509"
    COLOR_MAIN = "#00ADB5"
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = context;
    }

    drawStartImage(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawAxes();
        // this.setPointerAtDot(3);
        // this.setPointerAtDot(1);
    }

    drawAxes() {
        this.ctx.fillStyle = "black";
        this.drawArrow(-this.SIZE, this.SIZE / 2, this.SIZE, this.SIZE / 2);
        this.drawArrow( this.SIZE / 2, this.SIZE, this.SIZE / 2, 0);
    }

    drawArrow(fromx: number, fromy: number, tox:number, toy:number) {
        var headlen = 10; // length of head in pixels
        var dx = tox - fromx;
        var dy = toy - fromy;
        var angle = Math.atan2(dy, dx);
        this.ctx.beginPath();
        this.ctx.lineWidth = this.LINE_WIDTH;
        this.ctx.moveTo(fromx, fromy);
        this.ctx.lineTo(tox, toy);
        this.ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
        this.ctx.moveTo(tox, toy);
        this.ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
        this.ctx.stroke();
    }
}

export default GraphPrinter;
