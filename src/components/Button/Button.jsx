import Button from '@mui/material/Button';

const CustomButton = ({ children }) => {
    return <>
        <Button
            variant="contained"
            sx={{ margin: '10px' }}
        >
            {children}
        </Button>
    </>
}

export default CustomButton