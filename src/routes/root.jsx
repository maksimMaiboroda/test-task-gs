import Button from '../components/Button';
import Link from '../components/Link';
import { Box, Container } from '@mui/system';

export default function Root() {
    return <Container maxWidth="sm">
        <Box component="span" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '50%'
        }}>
            <Button variant="contained">
                <Link href='task-1'>
                    First task
                </Link>
            </Button>
            <Button variant="contained">
                <Link href='task-2'>
                    Second task
                </Link>
            </Button>
        </Box>
    </Container>
}