
import { Heading, HStack, Box, Image } from "@chakra-ui/react"
import pic from "../assets/aboutmePic.jpeg"


function AboutMe() {

    return (
        <>
        <Box w={{ base: "80%", sm: "80%", md: "65%", lg: "45%"}} h = {{ base: "25%", sm: "25%", md: "25%", lg:'27%'}} display="flex" flexDirection='column' marginTop="2%">
            <Box bg='#FEFBF6' w='100%' h = '100%' p={3} color='black' borderWidth='3px' borderRadius='lg' borderColor='#474F7A80' boxShadow='8px 8px #474F7A;' shadow='lg' display="flex" alignItems="center" flexDirection="column">
                <Heading color="#2C4E80">About Me</Heading>
                <HStack spacing='24px' h = "85%" w = "100%">
                <Box w='30%' h='90%'>
                    <Image src={pic} alt='Kendall Johnson' boxSize='100%' objectFit="cover" borderRadius='4%'/>
                </Box>
                <Box w='70%' h='80%' display= 'flex' overflowY="auto">
                Hello! My name is Kendall Johnson, and I am a currently a Junior at Greenhill School in Addison, Texas. I’m very passionate about sharing my love for and knowledge of different subjects such as math, science, and Spanish. Committed to helping others excel in these areas, I have created a tutoring business crafted to fit various learning styles and individual needs. Whether it is helping with homework, preparing for a test, or generally improve your understanding of a certain concept, I would love to work together to achieve your goals.
                I Look forward to learning with you!
                </Box>
                </HStack>
            </Box>
        </Box>
        </>
    )
}

export default AboutMe
