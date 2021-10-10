import React from 'react'
import { useState, useRef, useEffect } from 'react'

const Canvas: React.VFC<{}> = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const renderCtx = canvasRef.current.getContext('2d');

            if (renderCtx) {
                setContext(renderCtx);
            }
        }

        if (context) context.fillRect(5, 5, 100, 100);

    }, [context]);

    // const drawRectangles = (dir: , num) => {

    // }

    return (
        <canvas
            ref={canvasRef}
            width={500}
            height={500}
            style={{
                border: '2px solid #000'
            }}
        ></canvas>
    );
}

export default Canvas