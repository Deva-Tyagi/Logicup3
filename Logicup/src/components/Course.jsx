import React from 'react'
import { Box, 
    Flex, 
    HStack, 
    Link, 
    IconButton, 
    useDisclosure, 
    Stack, 
    Icon, 
    Spacer, 
    Avatar,
    Text,
    Card,
    Button,
    Image,
    Badge,
    SimpleGrid,
    VStack
      } from '@chakra-ui/react'
      import { HamburgerIcon, CloseIcon, BellIcon } from '@chakra-ui/icons';
      import { FaShoppingCart } from 'react-icons/fa';
      import { IoPerson } from "react-icons/io5";
      import { StarIcon } from '@chakra-ui/icons';
      import { FaUser } from 'react-icons/fa';

      const Links = ['Home', 'About', 'Course', 'Blog', 'Contact'];

      const NavLink = ({ children }) => (
        <Link
          px={2}
          py={1}
          rounded={'md'}
          _hover={{
            textDecoration: 'none',
            bg: 'gray.700',
          }}
          href={'#'}>
          {children}
        </Link>
      );

      const courses = [
        {
          image: './img/thumbnail-9.png',
          badgeText: 'Best Seller',
          discount: '20% OFF',
          title: 'UI Design for Beginners',
          author: 'Kitani Studio',
          rating: 5,
          reviews: '1.2K',
          price: '24.92',
          originalPrice: '32.90',
        },
        {
          image:  './img/thumbnail-10.png',
          badgeText: 'Best Seller',
          discount: '20% OFF',
          title: 'VUE JavaScript Course',
          author: 'Kitani Studio',
          rating: 4,
          reviews: '1.2K',
          price: '24.92',
          originalPrice: '32.90',
        },
        {
          image:  './img/thumbnail-11.png',
          badgeText: 'Best Seller',
          discount: '20% OFF',
          title: 'Mobile Dev React Native',
          author: 'Kitani Studio',
          rating: 3,
          reviews: '1.2K',
          price: '24.92',
          originalPrice: '32.90',
        },
        {
          image:  './img/thumbnail-12.png',
          badgeText: 'Best Seller',
          discount: '20% OFF',
          title: 'Website Dev Zero to Hero',
          author: 'Kitani Studio',
          rating: 5,
          reviews: '1.2K',
          price: '24.92',
          originalPrice: '32.90',
        },
      ];


      const courses1 = [
        {
          image: './img/thumbnail-1.png',
          badgeText: 'Best Seller',
          discount: '20% OFF',
          title: 'UI Design for Beginners',
          author: 'Kitani Studio',
          rating: 5,
          reviews: '1.2K',
          price: '24.92',
          originalPrice: '32.90',
        },
        {
          image:  './img/thumbnail-3.png',
          badgeText: 'Best Seller',
          discount: '20% OFF',
          title: 'VUE JavaScript Course',
          author: 'Kitani Studio',
          rating: 4,
          reviews: '1.2K',
          price: '24.92',
          originalPrice: '32.90',
        },
        {
          image:  './img/thumbnail-12.png',
          badgeText: 'Best Seller',
          discount: '20% OFF',
          title: 'Mobile Dev React Native',
          author: 'Kitani Studio',
          rating: 3,
          reviews: '1.2K',
          price: '24.92',
          originalPrice: '32.90',
        },
        {
          image:  './img/thumbnail-4.png',
          badgeText: 'Best Seller',
          discount: '20% OFF',
          title: 'Website Dev Zero to Hero',
          author: 'Kitani Studio',
          rating: 5,
          reviews: '1.2K',
          price: '24.92',
          originalPrice: '32.90',
        },
      ];

const Course = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    
    <>
    <section className="course">
        <Box className='bg2'>
        <Box bg={'transparent'} px={4} display={'flex'} textAlign={'center'} justifyContent={'space-evenly'} alignItems={'center'} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box fontSize={[25]} bgColor={'transparent'} display={['none','none','block']}><img src='./img/logo.png' style={{color:'white', fontWeight:'900'}}/></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }} bg={'transparent'} color={'gray'}>
             <Box>
             <Link to={"/"}>Home</Link>
              <Link to={"/course"}>Course</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/blog"}>Blog</Link>
              <Link to={"/contact"}>Contact</Link>
             </Box>
            </HStack>
          </HStack>
          <Spacer />
          <HStack spacing={4} alignItems={'center'}>
            <Link color={'white'}>Become Instructor</Link>
            <Icon as={FaShoppingCart} color={'white'} w={5} h={5} />
            <Icon as={BellIcon} color={'white'} w={5} h={5} />
            <Avatar size={'sm'} name={'Instructor'} src={'https://bit.ly/broken-link'} />
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mt={20}>
      <Text fontSize={40} fontWeight={'bold'} color={'white'}>Learn something new everyday</Text>
      <Text fontSize={20} fontWeight={500} color={'white'}>Become professionals and ready to join the world.</Text>
      </Box>
        </Box>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Card bgColor={'white'} w={'80%'} h={['40vh','40vh','25vh']} borderRadius={20} position={'relative'} bottom={20}>
            <Text alignItems={'flex-start'} pt={5} pb={5} pl={10} fontSize={20} fontWeight={800}>What do you want to learn</Text>
            <Box className='input' display={'flex'} justifyContent={'space-evenly'} pl={[0,0,10]} flexDirection={['column','column','row']}>
                <input type='text' placeholder='Find courses, skills, software, etc'></input>
                <input type='text' placeholder='Categories'></input>
                <input type='text' placeholder='Topics'></input>
                <Button>Search</Button>
            </Box>
        </Card>
        </Box>

        <Box>
            <Box>
                <Text textAlign={'center'} fontSize={25} fontWeight={700}>Browse Our Top Courses</Text>
            </Box>
            <Box textAlign={'center'} pt={5} fontSize={[12,15,17]}>
                <a href="#">Design</a>
                <a href="#">Developer</a>
                <a href="#">Business</a>
                <a href="#">Marketing</a>
                <a href="#">Photography</a>
            </Box>

            <Box>
            <Box p={5}>
        <SimpleGrid  columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {courses.map((course, index) => (
            <Box
            className='card2'
              key={index}
              maxW='sm'
              borderWidth='1px'
              borderRadius='lg'
              overflow='hidden'
              boxShadow='md'
            >
              <Image  src={course.image} alt={`${course.title} image`}  />

              <Box p='6'>
                <Stack direction='row' alignItems='baseline'>
                  <Badge borderRadius='full' px='2' colorScheme='teal'>
                    {course.badgeText}
                  </Badge>
                  <Badge borderRadius='full' px='2' colorScheme='red'>
                    {course.discount}
                  </Badge>
                </Stack>

                <Text
                  mt='1'
                  fontWeight='bold'
                  fontSize='xl'
                  lineHeight='tight'
                  isTruncated
                >
                  {course.title}
                </Text>

                <HStack spacing={2} mt={2} alignItems='center'>
                  <Avatar size='xs'  icon={<FaUser />} />
                  <Text fontSize='sm'>{course.author}</Text>
                </HStack>

                <HStack mt={2} spacing={1} alignItems='center'>
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < course.rating ? 'teal.500' : 'gray.300'}
                      />
                    ))}
                  <Text fontSize='sm'>({course.reviews})</Text>
                </HStack>

                <HStack mt={2} spacing={2}>
                  <Text fontSize='2xl' fontWeight='bold'>
                    ${course.price}
                  </Text>
                  <Text as='s' color='gray.500'>
                    ${course.originalPrice}
                  </Text>
                </HStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>





            </Box>
        </Box>

        <Box  h={['60vh','50vh','40vh']} display={'flex'} justifyContent={'center'} mt={10}>
            <Box w={'80%'} bgColor={'rgb(35, 35, 71)'} p={10}>
            <Text fontSize={'30'} fontWeight={700} color={'white'}>Join Klevr now to get 35% off</Text>
            <Text fontSize={'20'} fontWeight={600} color={'gray'} pt={5}>With our responsive themes and mobile and desktop apps,<br/>
                  enjoy a seamless experience on any device so will your blog the best visitors</Text>
            <Button mt={5} bgColor={'yellowgreen'}>Join Now</Button>
            </Box>
        </Box>

        <Box>
            <Text fontSize={'24'} fontWeight={700} textAlign={'center'} mt={'12'}>Trending Course</Text>
        <div className="container">
      <div className="left-section">

       <Box className='img3' h={'100vh'} w={'100%'} borderRadius={'20'}>
        <Box position={'relative'} top={'450'}>
        <Text fontSize={'25'} fontWeight={900} color={'black'}>Ana Kursova</Text>
        <Text fontSize={'30'} fontWeight={700} >Masterclass in Design Thinking, Innovation & Creativity</Text>
        </Box>
        </Box>

      </div>
      <div className="right-section">
        <div className="content">
          
         
        <Box p={5}>
        <SimpleGrid  columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
          {courses.map((course, index) => (
            <Box
            className='card2'
              key={index}
              maxW='sm'
              borderWidth='1px'
              borderRadius='lg'
              overflow='hidden'
              boxShadow='md'
            >
              <Image  src={course.image} alt={`${course.title} image`}  />

              <Box p='6'>
                <Stack direction='row' alignItems='baseline'>
                  <Badge borderRadius='full' px='2' colorScheme='teal'>
                    {course.badgeText}
                  </Badge>
                  <Badge borderRadius='full' px='2' colorScheme='red'>
                    {course.discount}
                  </Badge>
                </Stack>

                <Text
                  mt='1'
                  fontWeight='bold'
                  fontSize='xl'
                  lineHeight='tight'
                  isTruncated
                >
                  {course.title}
                </Text>

                <HStack spacing={2} mt={2} alignItems='center'>
                  <Avatar size='xs'  icon={<FaUser />} />
                  <Text fontSize='sm'>{course.author}</Text>
                </HStack>

                <HStack mt={2} spacing={1} alignItems='center'>
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < course.rating ? 'teal.500' : 'gray.300'}
                      />
                    ))}
                  <Text fontSize='sm'>({course.reviews})</Text>
                </HStack>

                <HStack mt={2} spacing={2}>
                  <Text fontSize='2xl' fontWeight='bold'>
                    ${course.price}
                  </Text>
                  <Text as='s' color='gray.500'>
                    ${course.originalPrice}
                  </Text>
                </HStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

        </div>
      </div>
    </div>
        </Box>

        <Box>

        <Text fontSize={24} fontWeight={700} textAlign={'center'}>Upcoming Webinar</Text>

        <Box p={5}>
        <SimpleGrid  columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {courses1.map((course, index) => (
            <Box
            className='card2'
              key={index}
              maxW='sm'
              borderWidth='1px'
              borderRadius='lg'
              overflow='hidden'
              boxShadow='md'
            >
              <Image  src={course.image} alt={`${course.title} image`}  />

              <Box p='6'>
                <Stack direction='row' alignItems='baseline'>
                  <Badge borderRadius='full' px='2' colorScheme='teal'>
                    {course.badgeText}
                  </Badge>
                  <Badge borderRadius='full' px='2' colorScheme='red'>
                    {course.discount}
                  </Badge>
                </Stack>

                <Text
                  mt='1'
                  fontWeight='bold'
                  fontSize='xl'
                  lineHeight='tight'
                  isTruncated
                >
                  {course.title}
                </Text>

                <HStack spacing={2} mt={2} alignItems='center'>
                  <Avatar size='xs'  icon={<FaUser />} />
                  <Text fontSize='sm'>{course.author}</Text>
                </HStack>

                <HStack mt={2} spacing={1} alignItems='center'>
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < course.rating ? 'teal.500' : 'gray.300'}
                      />
                    ))}
                  <Text fontSize='sm'>({course.reviews})</Text>
                </HStack>

                <HStack mt={2} spacing={2}>
                  <Text fontSize='2xl' fontWeight='bold'>
                    ${course.price}
                  </Text>
                  <Text as='s' color='gray.500'>
                    ${course.originalPrice}
                  </Text>
                </HStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
        </Box>
    <Box  display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box bgColor={'rgb(169, 234, 212)'} w={'90%'} height={['30vh']} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={20} fontWeight={600}>Get personal learning recommendations based on your needs</Text>
            <Button background={'transparent'} mt={10} border={'1px solid black'}> Get Started</Button>
        </Box>
    </Box>
    </section>
    
    </>
  )
}

export default Course
