import { Heading, Flex, Container, Box } from "@chakra-ui/react";
import {    Formik,
    Form,
    Field, 
    ErrorMessage} from 'formik';
import emailjs from "@emailjs/browser";


function ContactMe() {

    function validateEmail(value: string) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
        }
        return error;
    }

    function validateFirst(value: String){
        let error;
        if (!value) {
            error = 'Required';
        } else if (value.length > 15) {
            error = 'Must be 15 characters or less';
        }
        return error;
    }
    
    function validateLast(value: String){
        let error;
        if (!value) {
            error = 'Required';
        } else if (value.length > 15) {
            error = 'Must be 15 characters or less';
        }
        return error;
    }

    function validateMessage(value: String){
        let error;
        if(!value) {
            error = 'Required';
        }
        return error;
    }
    
    return(
        <>
        <Box w={{ base: "100%", sm: "100%", md: "100%"}}  h = {{ base: "20%", sm: "20%", md: "20%", lg:'25%'}} marginBottom="4%">
            <Box w='100%' h = '100%' p={4} color='black' backgroundColor="#102C5710" borderWidth='3px' borderRadius='lg' borderColor='#474F7A80' boxShadow='6px 6px #2C4E8070;' shadow='lg' overflowY="auto">
            <Flex display="flex" flexDirection="column" justifyContent="space-between">
                <Heading color="#2C4E80" marginBottom="2%">Contact Me</Heading>
                <Container w = '70%' display='flex' flexDirection='column' h = "90%">
                    <Formik
                        initialValues={{ first: '', last: '', email: '', message: ''}}
                        validate={() => {
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                            var templateParams = {
                                    first: values.first,
                                    last: values.last,
                                    email: values.email,
                                    message: values.message,

                            };
                            alert("Form Submitted");
                            emailjs.send(import.meta.env.VITE_SERVICE, import.meta.env.VITE_TEMPLATE, templateParams, {
                                publicKey: import.meta.env.VITE_KEY,
                              }).then(function(response) {
                                console.log('SUCCESS!', response.status, response.text);
                              }, function(error) {
                                console.log('FAILED...', error);
                              });
                            }, 400);
                            setSubmitting(false);
                        }} 
                        >
                        {({ isSubmitting }) => (
                                <Form>
                                    <Box display="flex" flexDirection="column" justifyContent="space-between">
                                        <Box marginTop="1%">
                                            <Field type="First Name" name="first" placeholder="First Name" validate={validateFirst} style={{ border: "1px solid #2C4E80", padding: "2px" }}/>
                                            <ErrorMessage name="first" component="div"/>
                                        </Box>
                                        <Box marginTop="2%">
                                            <Field type="Last Name" name="last" placeholder="Last Name" validate={validateLast} style={{ border: "1px solid #2C4E80", padding: "2px" }}/>
                                            <ErrorMessage name="last" component="div"/>
                                        </Box>
                                        <Box marginTop="2%">
                                            <Field type="email" name="email" placeholder="Email" validate={validateEmail} style={{ border: "1px solid #2C4E80", padding: "2px" }}/>
                                            <ErrorMessage name="email" component="div"/>
                                        </Box>
                                        <Box marginTop="2%">
                                            <Field type="text" as = "textarea" name="message" placeholder="Message" validate={validateMessage} style={{ border: "1px solid #2C4E80", padding: "2px" }}/>
                                            <ErrorMessage name="message" component="div" />
                                        </Box>
                                        <button type="submit" disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </Box>
                                </Form>
                        )}
                    </Formik>
                </Container>
                </Flex>
            </Box>
        </Box>
        </>
    )
}

export default ContactMe;