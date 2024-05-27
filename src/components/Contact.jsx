const Contact = () => {
	return (
		<form>
			<div className="form-group">
				<label htmlFor="name">Nombre:</label>
				<input type="text" id="name" name="name" />
			</div>
			<div className="form-group">
				<label htmlFor="email">Correo:</label>
				<input type="email" id="email" name="email" />
			</div>
			<button type="submit">Enviar</button>
		</form>
	);
};

export default Contact;