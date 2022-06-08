export default function Contact(){
	return (
		<div id="Contact" className='col-darkblue' style={{
			height:'100vh'}}>
			<form action="mailto:abhiquanta123@gmail.com"
				method="post"
				enctype="text/plain"
			>
				<h2>Hire Me</h2>
				<p>Contact me through my email. Send Hi.
				</p>
				<label htmlFor="Name">Name
				</label>
				<input
					type='text'
					id='name'
					name='name'
				/>
				<label htmlFor="Mail">Email
				</label>
				<input
					type="email"
					id='email'
					name="email"
				/>
				<label htmlFor="Message">Message
				</label>
				<textarea
					id="msg"
					name="msg"
				/>
				<button
					onClick={e=>e.preventDefault()}
					type="submit"
				>Submit
				</button>
			</form>
		</div>
	)
}
