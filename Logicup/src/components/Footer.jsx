import { Box, Stack, VStack, Text, HStack, Link, Button } from '@chakra-ui/react'
import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <section className="footer">

     <Stack direction={['column','column','column','row']} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}>
        <Box>
            <VStack >
                <Text fontSize={23} fontWeight={500}>Contact Us</Text>
                <Text color={'gray'}>Call : +123 400 123</Text>
                <Text color={'gray'} textAlign={'center'}>Praesent nulla massa, hendrerit <br/>vestibulum gravida in, feugiat auctor felis.</Text>
                <Text color={'gray'}><a href=''>Email: example@mail.com</a></Text>
                <HStack color={'#20b486'} fontSize={25} pl={5}>
                <a href='#'><FaTwitter /></a>
                <a href='#'><FaFacebook /></a>
                <a href='#'><FaInstagram /></a>
                </HStack>
            </VStack>
        </Box>
        <Box>
            <VStack>
                <Text fontSize={23} fontWeight={500}>Explore</Text>
                <Box display={'flex'} flexDirection={'column'} fontWeight={200} color={'gray'}>
                <Link to={"/home"}>Home</Link>
                <Link to={"/course"}>Course</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/blog"}>Blog</Link>
                <Link to={"/contact"}>Contact</Link>
                </Box>
            </VStack>
        </Box>
        <Box>
            <VStack>
                <Text fontSize={23} fontWeight={500}>Category</Text>
                <Box display={'flex'} flexDirection={'column'} fontWeight={200} color={'gray'}>
                    <a href='#'>Design</a>
                    <a href='#'>Development</a>
                    <a href='#'>Marketing</a>
                    <a href='#'>Business</a>
                    <a href='#'>Life Style</a>
                    <a href='#'>Photography</a>
                    <a href='#'>Music</a>
                </Box>
            </VStack>
        </Box>
        <Box>
            <VStack>
                <Text fontSize={23} fontWeight={500}>Subscribe</Text>
                <Text color={'gray'} fontSize={18} pt={5}>Lorem Ipsum has been them an industry<br/> printer took a galley make book.</Text>
                <input type='email' placeholder='Enter Your Email' style={{backgroundColor:'rgb(222, 240, 234)',padding:'15px 40px', fontSize:'18px', marginTop:'10px'} } className='placeholder-gray'></input>
                <Button bgColor={'yellowgreen'} mt={5} fontSize={20}>Subscribe Now</Button>
            </VStack>
        </Box>

     </Stack>

    </section>
    
    </>
  )
}

export default Footer
