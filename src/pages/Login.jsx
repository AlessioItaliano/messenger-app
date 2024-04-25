import FormLogin from 'components/Auth/Login/FormLogin';
import Section from 'components/Base/Section';
import Container from 'components/Base/Container';

const Login = () => {
  return (
    <Section>
      <Container>
        <FormLogin />
      </Container>
    </Section>
  );
};

export default Login;
