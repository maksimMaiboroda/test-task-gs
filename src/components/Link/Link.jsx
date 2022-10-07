import Link from '@mui/material/Link';

const CustomLink = ({ children, href, color = 'white' }) => {
    return <>
        <Link
            href={href}
            sx={{
                color,
                textDecoration: 'none'
            }}
        >
            {children}
        </Link>
    </>
}

export default CustomLink