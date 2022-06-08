export default function About(){
	return (
		<div id="About" className='col-blue'
		>
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
				alt='My Picture'
				className="mypic"
			/>
		</div>
	)
}
