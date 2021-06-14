const title = 'James Li – Developer, JS/TS Architect Expert.'
const description =
    'Personal portfolio and resume website for James Li'

const SEO = {
    title,
    description,
    canonical: 'https://next-chakra-firebase-personal-website.vercel.app/',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://next-chakra-firebase-personal-website.vercel.app/',
        title,
        description,
        images: [
            {
                url: 'https://next-chakra-firebase-personal-website.vercel.app/images/logo.png',
                alt: title
            }
        ]
    },
    twitter: {
        handle: '@bjmncrlsn',   
        site: '@bjmncrlsn',
        cardType: 'summary_large_image'
    }
}

export default SEO