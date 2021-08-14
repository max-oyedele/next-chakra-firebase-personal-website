import React from 'react'
import { NextSeo } from 'next-seo'
import NextLink from 'next/link'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Code,
  Button,
  Divider
} from '@chakra-ui/react'

import Container from '../components/Container'
import Profile from '../components/Profile'
import ExperienceBox from '../components/ExperienceBox'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import BlogPost from '../components/blog/BlogPost'
import Todo from '../components/Todo'
import TechStack from '../components/TechStack'
import SkillTag from '../components/SkillTag'

const url = 'https://next-chakra-firebase-personal-website.vercel.app/'
const title = 'Home – Maxim Dymchenko'
const description = 'Developer, creator, writer, and student living and working in CT. Browse Maxim\'s latest projects, experience, blog posts, and statistics.'

export default function Index() {
  const { colorMode } = useColorMode()

  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  const iconColor = {
    light: 'gray.600',
    dark: 'gray.300'
  }

  const linkColor = {
    light: 'blue.400',
    dark: 'blue.600'
  }

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Container>
        <Profile />
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          px={4}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Text
              color={colorSecondary[colorMode]}
            >
              Built or upgrade a number of web and mobile applications with a lot of clients.
              Key technical skills are just React.js, NextJS, TypeScript, Node.js, MySQL and NoSQL, etc.
              <br></br>
              Oriented to Dedicate, Hard working, Contribute, Challenging and Collaborate...
            </Text>

            {/* <Text><Link href="https://next-tailwind-healthcare-git-main-likewagon.vercel.app/" color={linkColor[colorMode]} isExternal>Healthcare Headless CMS MVP</Link></Text>
            <Text><Link href="https://apps.apple.com/sc/app/hunters-loop/id1536214645" color={linkColor[colorMode]} isExternal>Hunter's Loop</Link></Text>
            <Text><Link href="https://monizoom.com/" color={linkColor[colorMode]} isExternal>FinTech</Link></Text> */}

            <Heading letterSpacing="tight" size="lg" fontWeight={700} mt={10} as="h2">
              Featured Products
            </Heading>
            {/* <FeaturedProjectCard
              title="Coffeeclass"
              href="https://www.coffeeclass.io/"
              src="/images/coffee-only-transparent-bg.png"
              alt='Image of coffee'
              color={iconColor[colorMode]}
            >
              Coffeeclass is a tutorial website I started to teach programming and computer science skills in a fun and easy to learn manner.
            </ FeaturedProjectCard> */}
            <FeaturedProjectCard
              title="One Village"
              href="https://onevillage.me"
              src="/images/onevillage.jpg"
              alt='onevillage'
              color={iconColor[colorMode]}
            >
              OneVillage built with <Code>React</Code>, <Code>Next.js</Code>, <Code>TypeScript</Code>, <Code>Tailwind CSS</Code>, and <Code>.NET C# API</Code>. Platform is aiming for online lecture for the children. It is MultiTenant, SaaS platform and consists of Provider portal, Parent portal, Admin, Website and Mobile app
            </ FeaturedProjectCard>            
            <FeaturedProjectCard
              title="NFT marketplace"
              href="https://mucitadel.io"
              src="/images/memeunity.png"
              alt='memeunity'
              color={iconColor[colorMode]}
            >
              MemeUnity is blockchain-based NFT marketplace on which the Users can create token, buy and sell it.
            </FeaturedProjectCard>
            <FeaturedProjectCard
              title="OpenHouse Virtual Tour and Agent™"
              href="https://apps.apple.com/us/app/open-house-and-virtual-tours/id1517663733"
              src="/images/openhouse.png"
              alt='openhouse'
              color={iconColor[colorMode]}
            >
              Hybrid mobile app built by <Code>React Native</Code>, <Code>Firebase</Code> for support users to browse real estates, contact with agents, sign in disclosure form, virtual tour and some utility functions.
            </FeaturedProjectCard>
            
            <Flex justify="center" width="100%">
              <NextLink href="/projects" passHref>
                <Link _hover="none" mt={8}>
                  <Button rightIcon={<ArrowForwardIcon />} colorScheme="gray" variant="outline" aria-label="view all projects">
                    View GitHub Projects
                  </Button>
                </Link>
              </NextLink>
            </Flex>

            <Divider mb={10} mt={10} w='90%' alignSelf="center" />

            <SkillTag />

            <Divider mb={10} mt={10} w='90%' alignSelf="center" />

            {/* <Heading letterSpacing="tight" size="lg" fontWeight={700} as="h2">
              Experience
            </Heading>
            <ExperienceBox
              name="The Law Forum LLC"
              years="Summer 2019, 2020, 2021, Fall 2020, Spring 2021"
              pos="C# Software Developer"
              badge_1='Part Time'
              badge_2='Internship'
            >
              At the Law Forum, I use in ASP .NET, C#, HTML/CSS, JavaScript, and SQL to create and update internal websites for
              both The Law Forum and clients. I have completed 2 summer internships and over 6 months of part time work both
              in the office and remote.
            </ExperienceBox>
            <ExperienceBox
              name="Middletown, CT City Hall"
              years="Summer 2018"
              pos="I.T. Department"
              badge_1="Internship"
            >
              The summer after graduating from high school, I had the opportunity to work with my city halls' I.T. department. I didn't
              do any coding but I had a hands on look at the I.T. field and worked on a number of hardware related tasks.
            </ExperienceBox>

            <Divider mb={10} mt={10} w='90%' alignSelf="center" /> */}

            <Todo />

            <Heading letterSpacing="tight" mt={10} mb={4} size="lg" fontWeight={700} as="h2">
              Top Blog Posts
            </Heading>

            <BlogPost
              title="How Tik Tok Gave Me The Perfect Coding Side Project"
              summary="I got an idea for a weekend coding project from Tik Tok."
              slug="tik-tok-coding-idea"
            />
            <BlogPost
              title="Add A Firebase Backend To Your Flutter App Fast!"
              summary="Learn how to integrate Google's Firebase into your Flutter App."
              slug="connect-flutter-to-firebase"
            />
            <BlogPost
              title="UseEffect In Next.JS - React Hooks"
              summary="Learn what useEffect is learn how to use useEffect in Next.JS."
              slug="using-react-useeffect"
            />

            <Flex justify="center" width="100%">
              <NextLink href="/blog" passHref>
                <Link _hover="none">
                  <Button rightIcon={<ArrowForwardIcon />} colorScheme="gray" variant="outline" aria-label="view all posts">
                    View All Posts
                  </Button>
                </Link>
              </NextLink>
            </Flex>

            {/* <Divider mb={10} mt={10} w='90%' alignSelf="center" />

            <Flex
              justify="start"
              flexDirection="column"
              display={['none', 'flex', 'flex']}
            >
              <TechStack />              
            </Flex> */}

            <Divider mb={12} mt={16} w='90%' alignSelf="center" display={['none', 'flex', 'flex']} />

            <Text mt={8}>Looks like you've made it to the end of this page... feel free to go through links below
            </Text>

          </Flex>
        </Stack>
      </Container>
    </>
  )
}