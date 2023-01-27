import React, { useRef, useEffect, useState } from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas';

const CanvasDraw = ({ colors, color, onChange }) => {
    const onChangeColor = (val) => {
        onChange(val);
    }
    const canvas = useRef();

    const onRemoveCanvas = () => {
        canvas.current.clearCanvas()
    }

    return (
        <div>
            <ReactSketchCanvas
                strokeWidth={4}
                strokeColor={color}
                canvasColor='transparent'
                ref={canvas}
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                }}

            />
            <div className='p-2.5 fixed left-5 bottom-5  space-y-3 bg-gray-100 dark:bg-gray-800 rounded-full'>
                {colors.map((val, key) =>
                    <a key={`color-${key}`} className={`h-8 w-8  flex cursor-pointer justify-center items-center rounded-full  `} style={{ background: val }} onClick={() => onChangeColor(val)}>
                        {color === val && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                        </svg>
                        }
                    </a>
                )}
                <div className='h-8 w-8  bg-gray-200 dark:bg-gray-900 rounded-full flex justify-center cursor-pointer items-center' onClick={onRemoveCanvas}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default CanvasDraw