import { FC, useState } from 'react';
import styled from '@emotion/styled';
import ContactForm from './form/Form';

const ContactPage: FC = () => {
  const [responseMessage, setResponseMessage] = useState('');

  const handleResponseMessage = (message: string) => {
    setResponseMessage(message);
  };
  if (responseMessage) return (
    <Main>
        <SectionTitle>
        {responseMessage}
        </SectionTitle>
    </Main>
  )

  return (
    <Main>
      <SectionTitle>Only CTA on the page</SectionTitle>
      <ContactForm onResponse={handleResponseMessage} />
    </Main>
  );
};

export default ContactPage;

const Main = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;
