import { useEffect, useState } from "react"
export default function About(){
	console.log('About')
	var [height,setHeight]=useState('100px')
	useEffect(()=>{
		var css=getComputedStyle(document.querySelector('.App'))
		setHeight(css.height)
	},[])
	return (
		<div className='col-blue'>
			<div id="About" style={{height:height}}
			/>
			<div id="about">
				<div style={{display:'flex',flexDirection:'column'}}>
					<span
						className='spanhi'
					>&nbsp;Hi, my name is</span>
					<span
						className='spaname'
					>Abhishek</span>
					<p className='para'>
					I'm a web developer specializing in building mobile
					friendly web apps.
					</p>
				</div>
				<img src='/mypic.svg'
					alt='This is me'
					className="mypic"
				/>
			</div>
		</div>
	)
}
