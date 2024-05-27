import React, { useState } from 'react';
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { CgPlayButtonO } from "react-icons/cg";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Heading,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Collapse,
  Divider,
  Badge,
  Image,
  Icon,
  Link
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { StarIcon } from '@chakra-ui/icons';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCirclePlay } from "react-icons/fa6";

const Links = ['Become Instructor', <FaShoppingCart />];

const NavLink = ({ children }) => (
  <Button
    as="a"
    href="#"
    variant="ghost"
    _hover={{ textDecoration: 'none', bg: 'gray.200' }}
    size="sm"
  >
    {children}
  </Button>
);

const PlayCourse = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const videosArr = [
    'https://player.vimeo.com/external/440214116.sd.mp4?s=775e1d151a615965889750f507d3d29135092a98&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
    'https://player.vimeo.com/external/436375789.sd.mp4?s=a5f19d627bbf279bf01f12e7ca4f14d847ee30c5&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/555179829.sd.mp4?s=8b3488922181b5c30d8adf2eb4bed9215ea8d638&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/542883538.sd.mp4?s=ce3d209048d6403bd59a4a1e9d4bcd92e9bec51b&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/500628042.sd.mp4?s=1aef9b2062713668cff84486e90ed511329cc31e&profile_id=165&oauth2_token_id=57447761'
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);
  const [openChapters, setOpenChapters] = useState({});

  const chapters = [
    {
      title: 'Chapter 1: Course Overview',
      duration: '28m',
      videos: [
        { title: 'Introduction', duration: '5m', watched: true },
        { title: 'Course Objectives', duration: '10m', watched: false },
        { title: 'Getting Started', duration: '13m', watched: true },
      ],
    },
    {
      title: 'Chapter 2: Curriculum',
      duration: '1h 28m',
      videos: [
        { title: 'Installing Vue JS', duration: '10m', watched: true },
        { title: 'Understand Vue Components', duration: '59m', watched: false },
        { title: 'Vue Templating', duration: '12m', watched: false },
        { title: 'Vue Forms', duration: '23m', watched: false },
        { title: 'Vue Styling', duration: '57m', watched: false },
        { title: 'Vue Routing', duration: '1h 30m', watched: false },
        { title: 'Vue Animation', duration: '1h 19m', watched: false },
      ],
    },
    {
      title: 'Chapter 3: Components',
      duration: '1h 28m',
      videos: [
        { title: 'Components Introduction', duration: '30m', watched: false },
        { title: 'Building Components', duration: '58m', watched: false },
      ],
    },
    {
      title: 'Chapter 4: Coding',
      duration: '1h 28m',
      videos: [
        { title: 'Coding Best Practices', duration: '40m', watched: false },
        { title: 'Advanced Techniques', duration: '48m', watched: false },
      ],
    },
  ];

  const toggleChapter = (index) => {
    setOpenChapters((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      <Box bg="gray.100" px={4} boxShadow="md">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box w={122}><img src='./img/logo.png' alt="Logo" /></Box>
          <HStack spacing={8} alignItems="center">
            <Box display={{ base: 'none', md: 'block' }}>
              <InputGroup>
                <Input placeholder="Search for course" />
                <InputRightElement children={<SearchIcon color="gray.300" />} />
              </InputGroup>
            </Box>
            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link, index) => (
                <NavLink key={index}>{link}</NavLink>
              ))}
              <Button size="sm" variant="outline">Login</Button>
              <Button size="sm" colorScheme="teal">Sign Up</Button>
            </HStack>
          </HStack>
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              <InputGroup>
                <Input placeholder="Search for course" />
                <InputRightElement children={<SearchIcon color="gray.300" />} />
              </InputGroup>
              {Links.map((link, index) => (
                <NavLink key={index}>{link}</NavLink>
              ))}
              <Button size="sm" variant="outline">Login</Button>
              <Button size="sm" colorScheme="teal">Sign Up</Button>
            </Stack>
          </Box>
        )}
      </Box>

      <Box mt={10} ml={['30px', '70px', '130px']} display={'flex'} flexDirection={'column'} alignItems={['center', 'flex-start']}>
        <Text fontSize={15} fontWeight={800}>Development / Mobile Engineer</Text>
        <Text fontSize={25} fontWeight={600} pt={2}>VUE JS SCRATCH COURSE</Text>
        <Box display={'flex'} gap={2} pt={4}>
          <Text color={'red'} fontWeight={800}>Steven Arnatouvic</Text>
          <Text display={'flex'} gap={2} fontWeight={800}><FaStar color='gold' />4.8 (1812 ratings)</Text>
        </Box>
      </Box>

      <Stack direction={['column', 'column', 'column', 'row']} h={['auto', '100vh']} mt={8}>
        <VStack w={'full'} h={'full'}>
          <video
            controls
            controlsList="download"
            src={videoSrc}
            style={{
              width: '80%',
              height: '400px',
              borderRadius: '20px',
            }}
          />
          <VStack alignItems={'flex-start'} p={8} w={'full'} overflow={'auto'}>
            <Heading>Sample Video 1</Heading>
            <Text>This is a sample video for testing and demo, this is called description</Text>
          </VStack>
        </VStack>

        <Box bgColor={'rgba(211, 205, 205, 0.2)'} borderRadius={30} h={'80%'}>
          <VStack w={['full', 'xl']} p={8} spacing={8} overflow={'auto'} display={'flex'} alignItems={['center', 'center', 'center', 'flex-start']} >
            <Text fontSize={20} fontWeight={700}>Chapter 1 : Preparation</Text>
            <Box display={'flex'} gap={5}>
              <Text color={'gray'} fontWeight={700} fontSize={20}>6 Lectures </Text>
              <Text color={'green'} fontWeight={700} fontSize={20}> 12% Completed</Text>
            </Box>
            {videosArr.map((item, index) => (
              <Button
                key={index}
                variant={"ghost"}
                fontSize={10}
                fontWeight={600}
                color={'gray'}
                display={'flex'} flexDirection={'column'}
                onClick={() => setVideoSrc(item)}
              >
                Installing Vue JS
                <a href='#' style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><CgPlayButtonO color='red' fontSize={17} fontWeight={900} /> 10 min</a>
              </Button>
            ))}
          </VStack>
        </Box>
      </Stack>


     <Box display={'flex'} w={'100%'} justifyContent={['center','center','center','center','space-between']} p={20} flexDirection={['column','column','column','column','row']} alignItems={'center'} mt={[0,350,350,350,0]}>

      <Box p={6}  bgColor={'rgba(211, 205, 205, 0.2)'} borderRadius={20} w={'100%'} mr={[0,0,0,0,20]}>
        {chapters.map((chapter, index) => (
          <VStack key={index} align="start" w="full" spacing={4} mb={6}>
            <HStack w="full" justify="space-between">
                <Box display={'flex'} flexDirection={'column'}>
              <Heading size="md">{chapter.title}</Heading>
              <Box display={'flex'} gap={5}>
                <Text color={'gray'} fontWeight={700}>1/12 video</Text>
              <Text color="red.500" fontWeight={700}>{chapter.duration}</Text>
              </Box>
              </Box>
              <IconButton color={'gray'} fontSize={25}
                icon={openChapters[index] ? <ChevronUpIcon /> : <ChevronDownIcon />}
                onClick={() => toggleChapter(index) }
                variant="ghost"
                aria-label="Toggle Chapter"
              />
            </HStack>
            <Collapse in={openChapters[index]}>
              <VStack align="start" w="full" spacing={2} pl={6} >
                {chapter.videos.map((video, vidIndex) => (
                  <HStack key={vidIndex} alignItems={'flex-start'} w="full"  display={'flex'} flexDirection={'column'} color={'gray'} fontWeight={700} pt={5}>
                    <Text>{video.title}</Text>
                    <HStack>
                      <Text>{video.duration}</Text>
                      {video.watched ? (
                        <Box>
                            <FaCirclePlay color='green'/>
                        </Box>
                      ) : (
                        <Box>
                            <FaCirclePlay color='red'/>
                        </Box>
                      )}
                    </HStack>
                  </HStack>
                ))}
              </VStack>
            </Collapse>
            <Divider />
          </VStack>
        ))}
      </Box>


<Box mt={[10,10,10,10,0]}>
      <Box 
      maxW='sm' 
      borderWidth='1px' 
      borderRadius='lg' 
      overflow='hidden'
      bg="black"
      boxShadow="md"
    >
      <Image 
        src='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg' 
        alt='Gopesh Nayan'
      />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            Enrolled &bull; Paid
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          Meet Gopesh Nayan: Founder of Logicup Technologies
        </Box>

        <Box>
          <Text fontSize='sm' color='gray.600'>
            Welcome to my corner of the web! I'm Gopesh Nayan, founder of Logicup Technologies, a pioneering venture aimed at revolutionizing technology education and empowerment. With over a decade of experience in the industry, I've led teams and spearheaded innovative projects across renowned organizations such as IBM, Infosys, Tech Mahindra, and MoneyGram.
          </Text>
        </Box>

        <Box mt='2'>
          <Button size='sm' variant='link' colorScheme='teal'>
            See More
          </Button>
        </Box>

        <Box display='flex' mt='3' alignItems='center'>
          <StarIcon color='teal.500' />
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            4.5
          </Box>
        </Box>

        <Box display='flex' mt='3' alignItems='center'>
          <Icon as={FaCheckCircle} color='teal.500' />
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            Enrolled
          </Box>
        </Box>
      </Box>
      
      <Box p='6'>
        <Text fontSize='sm' color='gray.600'>
          A Course by <Link color='teal.500' href='#'>Gopesh Nayan</Link>
        </Text>
      </Box>
    </Box>


      </Box>
      </Box>
    </>
  );
};

export default PlayCourse;
