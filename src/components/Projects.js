import {useState,useEffect} from 'react'
export default function Projects(){
	var [i,seti]=useState(1);
	var [j,setj]=useState(1);
	var [height,setHeight]=useState('100px')
	useEffect(()=>{
		console.log('onmount');
		var css=getComputedStyle(document.querySelector('.App'))
		setHeight(css.height)
		var interval=setInterval(()=>{
			seti(k=>{
				return k%8+1;
			});
			setj(l=>l%5+1);
		},3000);
		return ()=>clearInterval(interval);
	},[]);
	var img2='ripple'+j+'.png';
	var img1='aperture'+i+'.jpg';
	// var height=getComputedStyle(document.querySelector('.App')).height
	// console.log('projects',height)
	return (
		<div className='col-grey'>
			<div id="Projects" style={{height:height}}
			/>
			<div id="projects">
				<h1 style={{color:'#112B3C'}}>Projects</h1>
				<div className="projImg">
					<div>
					<span>Aperture</span>
					<img id="aperture"
						src={img1}
						alt="Aperture"
					/>
					<p>
					Link to repo:&nbsp;
					<a
					href="https://gitfront.io/r/abhiquanta/9gu9GVZca17M/aperture/">
					https://gitfront.io/r/abhiquanta/9gu9GVZca17M/aperture/
					</a>
					</p>
					In this app we can watch videos and also send it to 
					our peers by connecting with them in app using Wifi-
					Direct. It was made with Android Studio in Kotlin 
					making use of Kotlin’s coroutine feature. 
					WifiP2pManager, MediaStore are some api(s) used in it.
					</div>
					<div>
					<span>Ripple</span>
					<img id="ripple"
						src={img2}
						alt="Ripple"
					/>
					<p>
					Visit Site:&nbsp;
					<a 
					href="https://quantumripple.herokuapp.com/">
					https://quantumripple.herokuapp.com/
					</a>
					</p>
					In this web app we can login to individual account and 
					record audio in multiple channels with different 
					editing features. The merged audio file of all 
					channels will be saved as a project. It was made using 
					Express web framework and Mongoose.
					</div>
				</div>
			</div>
		</div>
	)
}
