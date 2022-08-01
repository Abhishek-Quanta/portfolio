import { useEffect,useState } from "react"
export default function Skills(){
	var [height,setHeight]=useState('100px')
	useEffect(()=>{
		var css=getComputedStyle(document.querySelector('.App'))
		setHeight(css.height)
	},[])
	return (
		<div className='col-orange'>
			<div id="Skills" style={{height:height}}/>
			<div id="skills">
				<h1>Skills</h1>
				<div className="skillist">
					<div>
						<img src='cpp.png'
							alt="cpp"
						/>
						<div>
							<span>Strong Knowledge of C++</span>
							<div className="level">
								<div style={{width:'10em'}}>
								</div>
							</div>
						</div>
					</div>
					<div>
						<img src='html.png' alt="html"/>
						<div>
							<span>HTML</span>
							<div className="level">
								<div style={{width:'8.5em'}}>
								</div>
							</div>
						</div>
					</div>
					<div>
						<img src='css.png' alt="css"/>
						<div>
							<span>CSS</span>
							<div className="level">
								<div style={{width:'8.8em'}}>
								</div>
							</div>
						</div>
					</div>
					<div>
						<img src='js.png' alt="JavaScript"/>
						<div>
							<span>JavaScript</span>
							<div className="level">
								<div style={{width:'9.2em'}}>
								</div>
							</div>
						</div>
					</div>
					<div>
						<img src='mern.png' alt="nodejs"/>
						<div>
							<span>MongoDB,Express, ReactJS & NodeJS</span>
							<div className="level">
								<div style={{width:'9em'}}>
								</div>
							</div>
						</div>
					</div>
					<div>
						<img src='android.png' alt="android"/>
						<div>
							<span>Android with Kotlin</span>
							<div className="level">
								<div style={{width:'7.8em'}}>
								</div>
							</div>
						</div>
					</div>
					<div>
						<img src='python.png' alt="python"/>
						<div>
							<span>Fair amount of Python</span>
							<div className="level">
								<div style={{width:'6em'}}>
								</div>
							</div>
						</div>
					</div>
					<div>
						<img src='git.png' alt="git"/>
						<div>
							<span>Fair amount of Git</span>
							<div className="level">
								<div style={{width:'5em'}}>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
