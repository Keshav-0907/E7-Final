import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
    p: 4,
    borderRadius: '20px',
    '@media (max-width: 900px)': {
        width: '300px',
    }
};

export default function BasicModal(props) {

    const { title, text, headline } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button sx={{
                backgroundColor: '#FF971E',
                color: '#fff',
                borderRadius: '8px',
                marginLeft: '20px',
                height: '35px',
                marginTop: '10px',
                fontSize: '10px',
                '&:hover': {
                    backgroundColor: '#FFB55F',
                    color: '#fff',
                },
            }} onClick={handleOpen}> Know More  </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" sx={{
                        fontSize: '20px',
                        fontWeight: '500',
                        textAlign: 'center',
                        backgroundColor: 'grey',
                        color: 'white',
                        borderRadius: '10px',
                        paddingY:'10px'

                    }}>
                        {title}
                        <Typography sx={{ fontSize: '10px', textAlign: "center" }}>
                             Services &gt; {title}
                        </Typography>
                    </Typography>



                    <Container sx={{
                        display: 'flex',
                        padding: '20px',
                    }}>
                        {/* <Grid sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                            <img src={props.image} alt="image" style={{ width: '200%' }} />
                        </Grid> */}

                        <Grid sx={{ display: 'flex', minHeight: '200px', flexDirection: 'column', justifyContent: 'space-around' }}>
                            <Typography variant='h6' sx={{ fontSize: '20px', marginY: '10px', textAlign: 'center' }}>
                                {headline}
                            </Typography>

                            <Typography sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'Light', fontSize: '13px' }}>
                                {text}
                            </Typography>

                            <Typography sx={{ textAlign: 'center', marginTop: '20px' }}>
                                <Link to='/contact' style={{ textDecoration: 'none', color: 'white', backgroundColor: '#FF971E', padding: '10px', borderRadius: '10px' }}>
                                    Get a Quote
                                </Link>
                            </Typography>

                        </Grid>
                    </Container>
                </Box>
            </Modal>
        </div>
    );
}