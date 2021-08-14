import React from 'react'
import {
    Stack,
    Flex,
    Heading,
    Avatar,
    Text
} from '@chakra-ui/react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'

import SocialLink from './SocialLink'
import Container from './Container'
import { TwitterIcon, YoutubeIcon, LinkedInIcon, GitHubIcon, MailIcon, CodeIcon } from './CustomIcons'

const url = 'https://next-chakra-firebase-personal-website.vercel.app/hello'
const titleSEO = 'Hello – Maxim Dymchenko'
const description = 'I am a developer and creator. Here are some of my links.'

const Profile = () => {

    const { data } = useSWR('/api/links', fetcher)
    const title = data?.title
    const vid_url = data?.vid_url

    return (
        <Stack
            as="main"
            spacing={8}
            justifyContent="center"
            alignItems="flex-start"
            m="0 auto 2rem auto"
            maxWidth="700px"
            px={2}
        >
            <Flex
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                width={['100%', '500px', '700px']}
            >
                <Avatar
                    size='2xl'
                    name="Maxim Dymchenko"
                    src="../images/profile.png"
                    mr={2}
                    alignSelf="center"
                    my={5}
                />
                <Heading letterSpacing="tight" mb={4} as="h1" size="xl" alignSelf="center">
                    Hello 👋, I'm Maxim
                </Heading>
                <Text alignSelf="center" textAlign="center" mb={4}>
                    Full-stack Engineer, modern architect specializing in React, Node, JS/TS... 
                </Text>
                <SocialLink name="Go through My Linkedin Page" href="https://www.linkedin.com/in/maxim-dymchenko-59158b190/" icon={LinkedInIcon} />
                {/* <SocialLink name="Check Out My Website!" href="/" icon={CodeIcon} /> */}
                <SocialLink name="View My Opensource Code!" href="https://github.com/maximdymchenko?tab=repositories" icon={GitHubIcon} />
                {/* <SocialLink name="Subscribe to my newsletter" href="https://buttondown.email/maximdymchenko" icon={MailIcon} /> */}
                {/* <SocialLink name="Sponsor me on GitHub!" href="https://github.com/sponsors/maximdymchenko" icon={GitHubIcon} /> */}
                {/* <SocialLink name="Subscribe To My YouTube Channel!" href="https://www.youtube.com/channel/UCLMdmCCRFGWt7rktx6tMErw?sub_confirmation=1" icon={YoutubeIcon} /> */}
                {/* <SocialLink name="Follow Me On Twitter!" href="https://twitter.com/maximdymchenko" icon={TwitterIcon} /> */}
            </Flex>
        </Stack>
    )
}

export default Profile
