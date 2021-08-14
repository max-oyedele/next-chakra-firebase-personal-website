import React from 'react'
import {
    Heading,
    Flex,
    Code,
    useColorMode
} from '@chakra-ui/react'

const SkillTag = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const linkColor = {
        light: 'blue.400',
        dark: 'blue.600'
    }

    return (
        <>
            <Heading letterSpacing="tight" mt={4} mb={6} size="lg" fontWeight={700} as="h2">
                Skills 
            </Heading>
            <Flex
                justifyContent="flex-start"
                alignItems="center"
                maxWidth="700px"
                flexWrap="wrap"
            >
                <Code mx={2} my={1}>React.js</Code>
                <Code mx={2} my={1}>Next.js</Code>
                <Code mx={2} my={1}>JavaScript ECMA6+</Code>
                <Code mx={2} my={1}>TypeScript</Code>
                <Code mx={2} my={1}>Tailwind CSS</Code>
                <Code mx={2} my={1}>Material-UI</Code>
                <Code mx={2} my={1}>React Native</Code>
                <Code mx={2} my={1}>Responsive UI</Code>
                <Code mx={2} my={1}>Redux</Code>
                <Code mx={2} my={1}>Hooks</Code>
                <Code mx={2} my={1}>Context API</Code>
                <Code mx={2} my={1}>HOC</Code>
                <Code mx={2} my={1}>RESTful API</Code>
                <Code mx={2} my={1}>GraphQL/Apollo</Code>
                <Code mx={2} my={1}>HTML/HTML5, CSS/CSS3, SASS, LESS</Code>
                <Code mx={2} my={1}>jQuery</Code>
                <Code mx={2} my={1}>Ajax</Code>
                <Code mx={2} my={1}>ESLint</Code>
                <Code mx={2} my={1}>Webpack</Code>
                <Code mx={2} my={1}>Babel</Code>
                <Code mx={2} my={1}>Jest</Code>
                <Code mx={2} my={1}>Cypress</Code>
                <Code mx={2} my={1}>Web3.js</Code>
                <Code mx={2} my={1}>ethers.js</Code>
                <Code mx={2} my={1}>D3.js</Code>
                <Code mx={2} my={1}>Gojs</Code>
                <Code mx={2} my={1}>recharts</Code>
                <Code mx={2} my={1}>i18n</Code>
                <Code mx={2} my={1}>Formik</Code>
                <Code mx={2} my={1}>Git/GitHub</Code>
                <Code mx={2} my={1}>CI/CD</Code>
                <Code mx={2} my={1}>Vercel</Code>
                <Code mx={2} my={1}>JIRA/Trello</Code>
                <Code mx={2} my={1}>Firebase</Code>
                <Code mx={2} my={1}>Supabase</Code>
                <Code mx={2} my={1}>Node.js</Code>
                <Code mx={2} my={1}>ExpressJS</Code>
                <Code mx={2} my={1}>MySQL</Code>
                <Code mx={2} my={1}>PostgreSQL</Code>
                <Code mx={2} my={1}>MongoDB</Code>
                <Code mx={2} my={1}>SQLite</Code>
                <Code mx={2} my={1}>Prisma ORM</Code>
                <Code mx={2} my={1}>Mongoose</Code>
                <Code mx={2} my={1}>MERN stack</Code>
                <Code mx={2} my={1}>Laravel 7.x</Code>
                <Code mx={2} my={1}>PHP7</Code>
                <Code mx={2} my={1}>OAuth/okta/JWT/Passport</Code>
                <Code mx={2} my={1}>Apache/Nginx/PM2</Code>
                <Code mx={2} my={1}>Solidity</Code>
                <Code mx={2} my={1}>Android Studio</Code>
                <Code mx={2} my={1}>Xcode</Code>
            </Flex>
        </>
    )
}

export default SkillTag