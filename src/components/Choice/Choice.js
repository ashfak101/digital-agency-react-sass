import React,{useEffect, useState} from 'react'
import Text from '../Text/Text'
import choiceImg from '../../Images/image-4.png'
import { AiFillCaretRight } from "react-icons/ai";

import './Choice.scss'
export default function Choice() {

    const [text,setText]=useState('')
    useEffect(()=>{
        setText('Why Enver Is The Best Choice?')
    },[])
    return (
        <>
            <div className='choice container'>
                    <div className='choice-content'>
                      <Text text={text}></Text>
                      <p>Watch this one minute video so you understand why you  should <br /> use our services!</p>
                    </div>
                    <div className="choice-img">
                        <AiFillCaretRight className='choice-rightarrow'/>
                            <img className='choiceimg' src={choiceImg} alt="" />
                    </div>
            </div>
        </>
    )
}
