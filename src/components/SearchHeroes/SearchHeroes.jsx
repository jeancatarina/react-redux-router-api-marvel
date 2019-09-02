import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const SearchHeroes = () => {
	return (
		<Navbar bg="light" variant="light">
			<Navbar.Brand href="#home">Marvel Heroes</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
			</Nav>
			<Form inline>
				<FormControl
					type="text"
					placeholder="Search"
					className="mr-sm-2"
				/>
				<Button variant="outline-info">Search</Button>
			</Form>
		</Navbar>
	);
};

export default SearchHeroes;
