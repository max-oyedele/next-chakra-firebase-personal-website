import React from 'react'
import {
    Box,
    useColorMode,
    Text,
    Heading,
    Image,
    Flex
} from "@chakra-ui/react"

const GitHubSponsorCard = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    return (
        <Box
            w="100%"
            p={5}
            my={4}
            border='1px solid'
            borderColor="lightgray"
            borderRadius={5}
            h="100%"
        >
            <Flex>
                <Image w="75px" h="75px" borderRadius={5} src="/images/portrait.jpg"></Image>
                <Flex flexDirection={['column', 'row']}>
                    <Flex
                        width="100%"
                        align="flex-start"
                        justifyContent="space-between"
                        flexDirection="column"
                        mx={2}
                    >
                        <Heading as="h3" size="md">
                            Sponsor James Li on GitHub Sponsors
                    </Heading>
                        <Text color={colorSecondary[colorMode]}>
                            Hi 👋 I'm James Li, a college student studying computer science. I post weekly tutorial videos on my YouTube channel and build cool open source projects!
                    </Text>
                    </Flex>
                    <Flex mt={[2, 0, 0]}>
                        <iframe src="https://github.com/sponsors/likewagon/button" title="Sponsor likewagon" height="35" width="116" style={{ border: '0' }}></iframe>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default GitHubSponsorCard