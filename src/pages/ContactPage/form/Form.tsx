import { FC, useState } from 'react';
import { Button, FormControl, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';
import axios from 'axios';

interface ContactFormProps {
  onResponse: (message: string) => void;
}

const ContactForm: FC<ContactFormProps> = ({ onResponse }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/submit',
        { name, email, message },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      onResponse(response.data.message);
    } catch (error) {
      console.error('Error submitting form', error);
      onResponse('Error submitting form');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h5" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <FormControl fullWidth margin="normal">
        <StyledTextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <StyledTextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <StyledTextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </FormControl>
      <Button type="submit" variant="contained" color="primary" style={{ background: 'black' }}>
        Submit
      </Button>
    </FormContainer>
  );
};

export default ContactForm;

const FormContainer = styled('form')`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border: 1px grey solid;
  border-radius: 8px;
  @media (max-width: 800px) {
    min-width: 250px;
  }
`;

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: #007fff;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #007fff;
    }
  }
`;
