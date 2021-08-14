import React from 'react'
import { NextSeo } from 'next-seo'
import {
    Link,
    Text,
    Stack,
    Flex,
    Heading,
    useColorMode,
    Code
} from '@chakra-ui/react'

import Container from '../components/Container'
import ProjectListFull from '../components/ProjectListFull'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import GitHubSponsorCard from '../components/GitHubSponsorCard'

const url = 'https://next-chakra-firebase-personal-website.vercel.app/projects'
const title = 'Projects – Maxim Dymchenko'
const description = 'Here are some of the open source projects and GitHub repos I am working on.'

const Projects = () => {
    const { colorMode } = useColorMode()
    const color = {
        light: 'hsl(208, 99%, 44%)',
        dark: 'hsl(208, 95%, 68%)'
    }

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const iconColor = {
        light: 'gray.600',
        dark: 'gray.300'
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
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        px={4}
                    >
                        <Text color={colorSecondary[colorMode]}>I have worked on many projects over the years. Below you will find
                            all of them. Clicking on the project card will bring you to the GitHub repo. If you enjoy or use any of these projects, please <Link href="https://github.com/sponsors/maximdymchenko" isExternal color="blue.500">consider sponsoring me</Link> on GitHub!
                        </Text>
                        <Heading letterSpacing="tight" mt={10} mb={4} as="h1" size="2xl">
                            Projects
                        </Heading>
                        {/* <Heading letterSpacing="tight" as="h1" mt={4} size="xl" fontWeight={700}>
                            Featured Projects
                        </Heading> */}
                        <FeaturedProjectCard
                            title="Lounge club"
                            href="https://github.com/maximdymchenko/Lounge-Nextjs-TS-Supabase-Prisma"
                            src="/images/lounge.png"
                            alt='Image of lounge'
                            color={iconColor[colorMode]}
                        >
                            Abstract and implement Lounge Business using Next.js, TypeScript, TailwindCSS, Supabase, Prisma ORM,
                            Serverless, Paypal, Stripe, 3 Roles of Client, Seller and Admin.
                        </ FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="All-in-One Project Management System"
                            href="https://github.com/maximdymchenko/Laravel-React-Project-Board"
                            src="/images/pms.png"
                            alt='Image of pms'
                            color={iconColor[colorMode]}
                        >
                            <Code>Laravel 7.x</Code>, <Code>RESTful API</Code>, <Code>MySQL</Code>, <Code>React</Code>, <Code>Redux Saga</Code>
                            <br></br>
                            Immitation of <Link href="https://proofhub.com" color={color[colorMode]} title="" isExternal>Proofhub</Link>
                            <br></br>
                            Group, User, Client, Project, Task, Schedule, Timesheet, Media, Discusstion, Statistics, Gantt Chart, Calendar, Note, Files...
                        </FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="Healthcare Headless CMS and e-commerce"
                            href="https://github.com/maximdymchenko/Next-Tailwind-Healthcare"
                            src="/images/healthcare.png"
                            alt='Image of healthcare'
                            color={iconColor[colorMode]}
                        >
                            MVP version. Implement UX/UI Design System and built by <Code>Next.js</Code> <Code>Tailwind CSS</Code>...
                        </ FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="NFT Application Demo"
                            href="https://github.com/maximdymchenko/NFT-OpenseaAPI-Web3-Demo"
                            src="/images/nft.png"
                            alt='Image of nft'
                            color={iconColor[colorMode]}
                        >
                            Used OpenseaAPI as a 3rd party. Fetch NFTs from opensea, Connect wallet by MetaMask...
                        </FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="React Native - Hunters Loop"
                            href="https://github.com/maximdymchenko/hunter-react-reactnative"
                            src="/images/hunter.png"
                            alt='Image of hunter'
                            color={iconColor[colorMode]}
                        >
                            Hybrid mobile app and Web Panels built by <Code>React Native</Code>, <Code>React</Code>, <Code>Firebase</Code>
                            Explore Hunting services and hunters, Realtime chat, Service on Location...
                        </FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="React Native - Firestore - Realtime - User Management App"
                            href="https://github.com/maximdymchenko/ReactNative-User-Demo"
                            src="/images/rn-user.png"
                            alt='Image of rn-user'
                            color={iconColor[colorMode]}
                        >
                            User Management, online/offline Monitoring, Realtime... <Code>React Native</Code>, <Code>Firebase</Code>
                        </FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="MoneyZoom"
                            href="https://github.com/maximdymchenko/moneyzoom"
                            src="/images/moneyzoom.svg"
                            alt='Image of moneyzoom'
                            color={iconColor[colorMode]}
                        >
                            FinTech App using FinClusive API, Stellar SDK for support global bank transfer, wallet transfer...
                        </FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="Flow blockchain based NFT Sample"
                            href="https://github.com/maximdymchenko/Flow-NFT-IPFS-Marketplace"
                            src="/images/flow-nft.png"
                            alt='Image of flow-nft'
                            color={iconColor[colorMode]}
                        >
                            The first essential step for the Flow blockchain, Cadence language, Smart contract, flow-javascript-SDK and IPFS
                        </FeaturedProjectCard>


                        {/* <Heading letterSpacing="tight" as="h2" mb={2} mt={4} size="xl" fontWeight={700}>
                            All Projects
                        </Heading> */}
                        <ProjectListFull />
                        <GitHubSponsorCard />
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default Projects