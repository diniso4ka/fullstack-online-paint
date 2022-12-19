import {FC, useEffect, useRef} from 'react'
import s from './Canvas.module.scss'
import {observer} from 'mobx-react-lite';
import canvasState from '../../store/canvasState';
import toolState from '../../store/toolState';
import Brush from '../../tools/Brush';


interface CanvasProps {
    className?: string
}

const Canvas =observer(() => {
    const canvasRef = useRef<HTMLCanvasElement>()
    useEffect(()=>{
        canvasState.setCanvas(canvasRef.current)
    },[])

    return <div className={s.Canvas}>
        <canvas ref={canvasRef}  width={800} height={600}/>
    </div>
})

export default  Canvas
