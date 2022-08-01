import {useState} from 'react'
import Resume from './Resume.pdf'
function Header(prps){
	const navList=["About","Projects",'Skills',
		'Contact','Resume'];
	var [act,setAct]=useState("About");
	const navDivs=navList.map(name=>{
		var indId="ind"+name;
		var href="#"+name;
		if(name==='Resume')
			href=Resume
		return(
		<div style={{
			display:"flex",
			flexFlow:"column",
			alignItems:'center',
			paddingBottom:'5px'
			}}
			onClick={()=>{if(name!=="Resume")setAct(name)}}
		>
			<a href={href}>{name}</a>
			<div id={indId} style={{background:"#fff",
				visibility:name===act?"visible":"hidden",
				width:"2em",
				height:".2em",
				borderRadius:'1em',
				}}>
			</div>
		</div>)
	});
	return (
		<div className="App col-darkblue">
			<header className="App-header">
				<img src={prps.logo} className="App-logo" alt="logo" />
				<h1>Abhishek</h1>
			</header>
			<nav>
				{navDivs}
			</nav>
		</div>
	);
}
export default Header;
