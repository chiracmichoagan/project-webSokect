import { defineStore } from "pinia";
import { set } from "vue-demi";
interface DrawingState {
    color: string;
    lineWidth: number;
    isDrawing: boolean;
    isEraser: boolean;
    // startPoint: Point;
    // endPoint: Point;
}

export const useDrawingStore = defineStore('drawing', {
    state: (): DrawingState => ({
        color: '#000000',
        lineWidth: 5,
        isDrawing: false,
        isEraser: false,
        // startPoint: { x: 0, y: 0 },
        // endPoint: { x: 0, y: 0 },
    }),
    actions: {
        setColor(color: string) {
            console.log('color', color);
            
            this.color = color;
        },
        setLineWidth(lineWidth: number) {
            console.log('lineWidth', lineWidth);
            
            this.lineWidth = lineWidth;
        },
        setIsDrawing(isDrawing: boolean) {
            this.isDrawing = isDrawing;
        },
        setIsEraser(isEraser: boolean) {
            this.isEraser = isEraser;
        },
    }
});