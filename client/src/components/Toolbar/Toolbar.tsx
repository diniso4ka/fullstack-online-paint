import { FC } from 'react'
import s from './Toolbar.module.scss'
import toolState from '../../store/toolState';
import Brush from '../../tools/Brush';
import Rect from '../../tools/Rect';
import canvasState from '../../store/canvasState';
import Circle from '../../tools/Circle';
import Line from '../../tools/Line';


interface ToolbarProps {
    className?: string
}

export const Toolbar: FC<ToolbarProps> = ({ className }) => {
    return <div className={s.Toolbar}>
        <button onClick={()=> toolState.setTool(new Brush(canvasState.canvas))} className={`${s.btn} ${s.brush}`}/>
        <button onClick={()=> toolState.setTool(new Rect(canvasState.canvas))} className={`${s.btn} ${s.rect}`}/>
        <button onClick={()=> toolState.setTool(new Circle(canvasState.canvas))} className={`${s.btn} ${s.circle}`}/>
        <button onClick={()=> toolState.setTool(new Line(canvasState.canvas))} className={`${s.btn} ${s.eraser}`}/>
        <button className={`${s.btn} ${s.line}`}/>
        <input type={'color'} className={`${s.btn}`}/>
        <button className={`${s.btn} ${s.undo}`}/>
        <button className={`${s.btn} ${s.redo}`}/>
        <button className={`${s.btn} ${s.save}`}/>
    </div>
}
