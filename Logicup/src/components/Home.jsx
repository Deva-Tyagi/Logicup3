import {HStack, VStack, Text, Tag, Box, Flex, IconButton, Button, Stack, Image, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CgArrowTopRight } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
  

  return (
    <>
      <Box bg="gray.100" px={20}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Image src='./img/logo.png' alt='Logo' width={'120px'}/>
          </Box>
          <Flex alignItems={'center'} justifyContent={'center'}>
            <Flex display={{ base: 'none', md: 'flex' }} alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
              <main>
              <Link to={"/home"}>Home</Link>
              <Link to={"/course"}>Course</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/blog"}>Blog</Link>
              <Link to={"/contact"}>Contact</Link>
              </main>
            </Flex>
            <Button color={'black'} ml={4} display={{ base: 'none', md: 'inline-flex' }}>Login</Button>
            <Button bg={'greenyellow'} color={'black'} ml={4} display={{ base: 'none', md: 'inline-flex' }}>Sign up for free</Button>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Link to={"/home"}>
                Home
              </Link>
              <Link to={"/course"}>
                Course
              </Link>
              <Link to={"/about"}>
                About
              </Link>
              <Link to={"/blog"}>
                Blog
              </Link>
              <Link to={"/contact"}>
                Contact
              </Link>
              <Button color={'black'}>Login</Button>
              <Button bg={'greenyellow'} color={'black'}>Sign up for free</Button>
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* Home Section */}

      <section className='main'>
        <Stack textAlign={'center'} justifyContent={'center'}>
          <Flex justifyContent={'space-between'} alignItems={'center'} flexDirection={['column','column','column','column','row']}>
            <VStack textAlign={'center'}>
              <HStack bgColor={'aliceblue'} p={2}>
                <img src='./img/icon-container.svg' alt="icon" />
                <Text fontSize={['xl','2xl','3xl']} fontWeight={700} color="black">Unlock Your Creative Potential</Text>
              </HStack>
              <Text fontSize={['l','xl','2xl']} fontWeight={500} textTransform={'lowercase'} pt={5} textAlign={'center'} pl={[5,10,20]} color="black">
                with Tech and Development Courses.
              </Text>
              <Text fontSize={['m','l','xl']} textTransform={'lowercase'} pl={[5,10,20]} color="black">
                Learn from Industry Experts and Enhance Your Skills.
              </Text>
              <HStack pt={[4,7,10]}>
                <Button p={[2,4,6]} bgColor={'greenyellow'} color={'black'}>Explore Course</Button>
                <Button p={[1.5,3,5]} color={'black'}>View Prices</Button>
              </HStack>
            </VStack>
            <VStack w={[350,400,400,550]} h={[550,550,500,600]} bgColor={'rgb(199, 246, 230)'} borderRadius={15} opacity={0.7} mt={[10,10,10,10,0]}>
              <Text fontSize={[10,15,20,25]} fontWeight={[400,500,600,700]} pt={[5,7,9]} color="black">Get Access To A Free Live Class</Text>
              <Flex gap={[1,2,3,4]} >
                <a href='https://www.youtube.com/watch?v=yRpLlJmRo2w'><Button fontSize={[8,9,10,17]} bgColor={'yellowgreen'} color={'black'}>Java</Button></a>
                <a href=''><Button fontSize={[8,9,10,17]} color={'black'}>Full Stack</Button></a>
                <a href=''><Button fontSize={[8,9,10,17]} color={'black'}>Front-End</Button></a>
                <a href=''><Button fontSize={[8,9,10,17]} color={'black'}>Other</Button></a>
              </Flex>
              <form className='form'>
                <Flex flexDirection={'column'} gap={[2,3,4,5]} mt={[5,7,8,10]} w={[350,300,400,500]}>
                  <input type='text' placeholder='Enter Your Name' className='placeholder-black'/>
                  <input type='email' placeholder='Enter Your Email' className='placeholder-black'/>
                  <Flex>
                    <img src='./img/emojione-v1-flag-for-india.svg' alt="flag" />
                    <select name="Phone" style={{color:'black'}}>
                      <option value="+91" >+91</option>
                      <option value="+92">+92</option>
                      <option value="+93">+93</option>
                      <option value="+94">+94</option>
                    </select>
                    <input className='no placeholder-black' type='number' placeholder='Enter Your Number'/>
                  </Flex>
                  <Button bgColor={'yellowgreen'} mt={3} color={'black'} fontSize={20} fontWeight={600}>Register for Live Class</Button>
                </Flex>
              </form>
            </VStack>
          </Flex>
        </Stack>
      </section>

      {/* PROGRAMS SECTION */}
      <section className='programs'>
        <Flex justifyContent={'space-between'} pl={20} pt={20} flexDirection={['column','column','row']}>
          <div>
            <Text fontSize={70} ml={15} fontWeight={500} color="black">Programs We Offer </Text>
            <Text ml={15} fontSize={20} fontWeight={500} color="black">Explore programs enhancing your skills, knowledge, and career opportunities.</Text>
          </div>
          <Button bgColor={'yellowgreen'} color={'black'} mr={10} mt={10} p={5}>Explore More</Button>
        </Flex>

        <Box w={3/4} m={'auto'}>
          <Box mt={20}>
            <Slider {...settings}>
              {dataA.map((d, index) => (
                <div key={index} style={{ margin: '0 10px' }}>
                  <div className='cards' style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '15px', backgroundColor: 'whitesmoke', marginLeft:'15px'}}>
                    <img src={d.img} alt={d.text} style={{ width: '100%', borderRadius: '10px', marginRight:'20px'}} />
                    <div style={{ padding: '10px' }}>
                      <p style={{ color: 'black', fontSize:20 }}>{d.text}</p>
                      <p style={{ display: 'flex', color: 'black', fontSize:'20px', paddingTop:'10px'}}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <IoStarSharp key={i} color={i < d.rating ? '#ffc107' : '#e4e5e9'} />
                        ))}
                      <span style={{fontSize:'20px', position:'relative', bottom:"5px"}}>(15)</span>
                      </p>
                      <hr></hr>
                      <p style={{ color: 'black', paddingTop:'35px', fontSize:'25px', display:'flex', justifyContent:'space-between'}}>{d.price}<a href='#'><Button bgColor={'yellowgreen'} bottom={4} color={'black'}><CgArrowTopRight /></Button></a></p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Box>
        </Box>
      </section>

      {/* Goals Section */}

      <div className="container">
      <div className="left-section">
       
        <img src="./img/rectangle-5462.svg" alt="Image" className="image" />
      </div>
      <div className="right-section">
        <div className="content">
          <Text color={'green'} fontSize={25} fontWeight={600}>OUR GOALS</Text>
          <Text color={'black'} fontSize={50} fontWeight={600}>Unlock Career Growth With Logicup's Recipe</Text>
          <Text color={'black'} fontSize={22} fontWeight={400} pt={30} pb={20}>Enjoy thousands of hours of online entertainment, all in one subscription, for a fraction of the price you would normally pay.</Text>
         
          <div className="image-container">
          <Box bgColor={'rgb(53, 93, 53)'} borderRadius={'20px'} p={'2px'} w={['350px']}>
          <Text pt={5} pb={5} pl={8} pr={8} fontSize={20} fontWeight={700} textAlign={'center'}>A structured & flexible program, that cares for you</Text>
            <img src="./img/rectangle-5463.svg" alt="Image 1" className="small-image" />
            </Box>
            <Box bgColor={'rgb(204, 203, 203)'} borderRadius={'20px'} p={'2px'} w={['350px']}>
                <Text pt={5} pb={5} pl={8} pr={8} fontSize={20} fontWeight={700} textAlign={'center'} color={'black'}>Become part of
a thriving community for life</Text>
            <img src="./img/rectangle-5464.svg" alt="Image 2" className="small-image" />
            </Box>
            <Box bgColor={'rgb(204, 203, 203)'} borderRadius={'20px'} p={'2px'} w={['350px']}>
                <Text pt={5} pb={5} pl={8} pr={8} fontSize={20} fontWeight={700} textAlign={'center'} color={'black'}>Be Mentored 1:1 by
Experienced Professionals</Text>
            <img src="./img/rectangle-5465.svg" alt="Image 3" className="small-image" />
            </Box>
            <Box bgColor={'rgb(204, 203, 203)'} borderRadius={'20px'} p={'2px'} w={['350px']}>
                <Text pt={5} pb={5} pl={8} pr={8} fontSize={20} fontWeight={700} textAlign={'center'} color={'black'}>Live Doubt Clearing Interactive Sessions</Text>
            <img src="./img/rectangle-5466.svg" alt="Image 4" className="small-image" />
            </Box>
          </div>
        </div>
      </div>
    </div>
    
     {/* Instructor Section */}

     <section className="instructor">
        <Text color={'black'} fontSize={60} fontWeight={600}>Our Best Instructor</Text>
        <Text color={'gray'} fontSize={20} fontWeight={500}>Various versions have evolved over the years, sometimes by accident,</Text>

        <Box w={3/4} m={'auto'}>
          <Box mt={20}>
            <Slider {...settings}>
              {data.map((d, index) => (
                <div key={index} style={{ margin: '0 20px' }}>
                 
                  <div className='cards' style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '15px', backgroundColor: 'whitesmoke', marginLeft:'15px',width:'100%'}}>
                    <img src={d.img} alt={d.text} style={{ width: '100%', borderRadius: '10px', alignItems:'center'}} />
                    <div style={{ padding: '10px' }}>
                      <p style={{ color: 'black', fontSize:18, fontWeight:400, textAlign:'center'}}>{d.text}</p>
                    </div>
                    <div style={{ padding: '10px' }}>
                      <p style={{ color: 'gray', fontSize:15, textAlign:'center' }}>{d.skill}</p>
                    </div>
                  </div>
                 
                </div>
              ))}
            </Slider>
          </Box>
        </Box>
    </section>

      {/* Achievement Section */}

      <section className="achieve">
    <Text fontSize={[40,50,55,60]} color={'black'} textAlign={'center'} fontWeight={[400,500,600]}>Our <Tag color={'#20b486'} fontWeight={[400,500,600]} fontSize={[50,60,65,70]}>Achievements</Tag></Text>
    <Text fontSize={22} color={'gray'} textAlign={'center'} fontWeight={500}>Various versions have evolved over the years, sometimes by accident,</Text>

    <Box className="data" display={'flex'} flexDirection={['column','column','row']} justifyContent={'center'} alignItems={'center'} gap={'60px'} pt={'100px'}>
        <Box display={'flex'} flexDirection={'column'} textAlign={'center'}>
        <Text fontSize={[50,40,40,40,90]} color={'rgba(29,122,182,255)'} fontWeight={350}>15K+</Text>
        <Text color={'black'} fontSize={[20,10,15,30]} fontWeight={400}>Students</Text>
        </Box>
        <Box display={'flex'} flexDirection={'column'} textAlign={'center'}>
        <Text fontSize={[50,40,40,40,90]} color={'rgba(29,122,182,255)'} fontWeight={350}>75%</Text>
        <Text color={'black'} fontSize={[20,10,15,30]} fontWeight={400}>Total Success</Text>
        </Box>
        <Box display={'flex'} flexDirection={'column'} textAlign={'center'}>
        <Text fontSize={[50,40,40,40,90]} color={'rgba(29,122,182,255)'} fontWeight={350}>35</Text>
        <Text color={'black'} fontSize={[20,10,15,30]} fontWeight={400}>Main Questions</Text>
        </Box>
        <Box display={'flex'} flexDirection={'column'} textAlign={'center'}>
        <Text fontSize={[50,40,40,40,90]} color={'rgba(29,122,182,255)'} fontWeight={350}>25</Text>
        <Text color={'black'} fontSize={[20,10,15,30]} fontWeight={400}>Chief Expert</Text>
        </Box>
        <Box display={'flex'} flexDirection={'column'} textAlign={'center'}>
        <Text fontSize={[50,40,40,40,90]} color={'rgba(29,122,182,255)'} fontWeight={350}>16</Text>
        <Text color={'black'} fontSize={[20,10,15,30]} fontWeight={400}>Years of Experience</Text>
        </Box>
        
    </Box>
    </section>

    {/* Feedback Section */}

    <section className="feedback">
   
    <Box display={'flex'} gap={5} pt={50} pl={70}>
    <Text fontSize={[30,30,50]} color={'black'} fontWeight={600}>Student </Text>
    <Text fontSize={[30,30,50]} color={'#20b486'} fontWeight={600}>Feedback</Text>
   </Box>
   <Text pl={70} fontSize={21} color={'gray'} fontWeight={500}>Various versions have evolved over the years, sometimes by accident,</Text>

<Box display={'flex'}  justifyContent={'center'} pt={50}>
    <Box h={['100vh','110vh','80vh']} w={'90%'} bgColor={'whitesmoke'} borderRadius={30} display={'flex'} justifyContent={'center'}>
      <Stack gap={50} direction={['column','column','column','row']}>
        <img src='./img/ellipse-119.svg'></img>
        <VStack className='review' display={'flex'} alignItems={'flex-start'}>
            <Text fontSize={[20,25,35]} fontWeight={500} color={'black'} pl={7}>Savannah Nguyen</Text>
            <Text fontSize={[15,20,25]} fontWeight={400} color={'black'} pl={7}>abcd@example.com</Text>
            <Text fontSize={[10,15,20]} fontWeight={400} color={'gray'} pl={30} pr={30}>Lorem ipsum dolor sit amet, consectetur adipising elit,<br/> sed do eiusmod tempor<br/>
Lorem ipsum dolor sit amet, consectetur adipising elit,<br/> sed do eiusmod tempor<br/>
Lorem ipsum dolor sit amet, consectetur adipising elit,<br/> sed do eiusmod tempor</Text>
            <HStack display={'flex'} alignItems={'flex-start'} color={'#20b486'} fontSize={25} pl={5}>
            <a href='#'><FaTwitter /></a>
            <a href='#'><FaFacebook /></a>
            <a href='#'><FaInstagram /></a>
            </HStack>
        </VStack>
      </Stack>
    </Box>
    </Box>
    </section>

    {/* Learinig Section */}

    <section className="learning">
        <Stack direction={['column','column','column','column','row']} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <VStack display={'flex'} alignItems={['center','center','center','center','flex-start']}>
           <Text fontSize={[25,35,40]} color={'rgb(21, 21, 21)'} fontWeight={600} p={10} display={'flex'} alignItems={['center','center','center','center','flex-start']}> Join World's largest learning platform today </Text>
           <ul className='ul'>
            <li>Free E-book, video & consolation</li>
            <li>Top instructors from around world</li>
            <li>Top courses from your team</li>
           </ul>
           <a href='#'><Button bgColor={'#20b486'} color={'black'} fontSize={22} p={(3,8)} borderRadius={15} ml={2}>Start Learning Now</Button></a>
           </VStack>
           <Box w={[300,400,500,550,1100]} alignItems={'center'}>
           <img src='./img/ss.jpg' />
           </Box>
        </Stack>
    </section>

    {/* Footer section */}

    
    </>
  );
};


const dataA = [
  {
    img: './img/rectangle-9-1.png',
    text: 'Various versions have evolved',
    rating: 5,
    price: '$ 500'
  },
  {
    img: './img/rectangle-9-2.png',
    text: 'Various versions have evolved',
    rating: 5,
    price: '$ 500'
  },
  {
    img: './img/rectangle-9-3.png',
    text: 'Various versions have evolved',
    rating: 4,
    price: '$ 500'
  },
  {
    img: './img/rectangle-9-4.png',
    text: 'Various versions have evolved',
    rating: 3,
    price: '$ 500'
  },
  {
    img: './img/rectangle-9.png',
    text: 'Various versions have evolved',
    rating: 5,
    price: '$ 500'
  },
];


const data = [
  {
    img: './img/rectangle-16.svg',
    text: 'Jacob Jones',
    skill: 'UI/UX Design Expert'
  },
  {
    img: './img/rectangle-16-1.svg',
    text: 'Jacob Jones',
    skill: 'Business Idea Expert'
  },
  {
    img: './img/rectangle-16-2.svg',
    text: 'Jacob Jones',
    skill: 'Social Media Expert'
  },
  {
    img: './img/rectangle-16-3.png',
    text: 'Jacob Jones',
    skill: 'Photography Expert'
  },
  {
    img: './img/rectangle-16-4.png',
    text: 'Jacob Jones',
    skill: 'Graphic Designing Expert'
  },
];
   

export default Home;
