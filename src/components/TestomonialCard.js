import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


const TestimonialCard = (props) => {
	return (
		<Box sx={{
			boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
			borderRadius: '10px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent:'space-between'
		}} className="testimonial-main">
			<Grid>
				<img className='testimonial-img' src={props.image} alt="Avatar" />
			</Grid>

			<Grid sx={{
				maxWidth: '30rem',
				marginY: '20px',
			}}>
				<Typography sx={{ fontSize: '14px', fontWeight: 'light' }}>
					"{props.content}"
				</Typography>

				{/* <Typography sx={{ color: 'blue', minHeight: '2rem' }}>
					<Link style={{ textDecoration: 'none' }}> Read More </Link>
				</Typography> */}
			</Grid>

			<Grid item sx={{ color: 'white', backgroundColor:'#FF971E', borderRadius:'10px' }} >
				<Typography>
					{props.name}
				</Typography>
				<Typography sx={{fontSize:'10px'}}>
					{props.company}
				</Typography>
			</Grid>




		</Box>
	);
}

export default TestimonialCard;