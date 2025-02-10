import { Box, CircularProgress } from "@mui/material"

const Loading: FC = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%'}}>
            <CircularProgress />
        </Box>
    )
};

export { Loading };

