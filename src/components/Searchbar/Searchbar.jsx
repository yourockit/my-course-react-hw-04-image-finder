import { useState } from "react"
import { Container, Button, Form, Input } from "./Searchbar.styled";

export const Searchbar = ({onSubmit}) => {
const [query, setQuery] = useState('')
const handleNameChange = e => {
    setQuery(e.target.value.toLowerCase())
};
const handleNameSubmit = e => {
    e.preventDefault();
    if(query.trim() === '') {
        alert('Ничего не ввели');
        return
    };
    onSubmit(query);
    setQuery('');
};
return ( 
        <Container>
            <Form onSubmit={handleNameSubmit} >
            <Button type = "submit">
            <span > Search </span> 
            </ Button>
            <Input
            name="query"
            type = "text"
            autoComplete = "off"
            autoFocus placeholder = "Search images and photos"
            value={query}
            onChange={handleNameChange}
            />
            </Form> 
        </Container>
)
};