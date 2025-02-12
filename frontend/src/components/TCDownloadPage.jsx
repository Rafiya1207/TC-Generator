import React, { useRef } from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import PreviewTC from './Generate TC/PreviewTC.jsx';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useLocation } from 'react-router-dom';

const TCDownloadPage = ({ setDoesGotResponse }) => {
	const printRef = useRef(null);
	const location = useLocation();
	const status = location.state;

	const downloadPDF = async () => {
		const element = printRef.current;
		if (!element) return;

		const canvas = await html2canvas(element);
		const dataImage = canvas.toDataURL('image/png');

		const pdf = new jsPDF({
			orientation: 'portrait',
			unit: 'px',
			format: 'a4'
		});

		// Get A4 page dimensions in pixels
		const pdfWidth = pdf.internal.pageSize.getWidth();
		const pdfHeight = pdf.internal.pageSize.getHeight();

		// Calculate scaled image dimensions
		const imgProperties = pdf.getImageProperties(dataImage);
		const imgWidth = imgProperties.width;
		const imgHeight = imgProperties.height;

		let scaledWidth = pdfWidth;
		let scaledHeight = (imgHeight * pdfWidth) / imgWidth;

		if (scaledHeight > pdfHeight) {
			scaledHeight = pdfHeight;
			scaledWidth = (imgWidth * pdfHeight) / imgHeight;
		}

		pdf.addImage(dataImage, 'PNG', (pdfWidth - scaledWidth) / 2, 0, scaledWidth, scaledHeight);
		pdf.save('Transfer Certificate.pdf');
	};

	// const handleClose = () => {
	// 	setDoesGotResponse(false);
	// };

	let message = 'Your TC is Successfully Created';
	let buttonLabel = 'Download TC';
	let buttonListener = downloadPDF;

	if (!status) {
		message = 'OPPS! Server Issue, Unable to send Data';
		buttonLabel = 'Go Back';
		// buttonListener = handleClose;
	}

	return (
		<Container maxWidth="md">
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh',
					textAlign: 'center',
				}}
			>
				<Typography variant="h4" gutterBottom>
					{message}
				</Typography>

				{status && <PreviewTC printRef={printRef} />}

				<Box sx={{ mt: 4 }}>
					<Button variant="contained" color="primary" onClick={buttonListener}>
						{buttonLabel}
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default TCDownloadPage;
