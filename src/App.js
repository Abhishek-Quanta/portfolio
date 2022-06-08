//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
var logo='/logo.svg';
function App() {
	return (
		<div>
			<Header
				logo={logo}
			/>
			<About/>
			<Projects/>
			<Skills/>
			<Contact/>
		</div>
	);
}

export default App;
