import React, { useRef, useEffect, useState, useContext } from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import PreviewTC from './Generate TC/PreviewTC.jsx';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useLocation } from 'react-router-dom';
import { UserDataContext } from '../context/UserDataContext.jsx';

const TCDownloadPage = () => {
	const printRef = useRef(null);
	const location = useLocation();
	const status = location.state;
	const [contentHeight, setContentHeight] = useState('auto'); // Adjust content height dynamically
	const { userData } = useContext(UserDataContext);

	useEffect(() => {
		if (printRef.current) {
			setContentHeight(printRef.current.scrollHeight); // Get full height of content
		}
	}, [status]);

	const downloadPDF = async () => {
		const element = printRef.current;
		if (!element) return;

		const canvas = await html2canvas(element, {
			scale: 3, // Higher quality capture
			useCORS: true, // Handle images and styles properly
		});

		const dataImage = canvas.toDataURL('image/png');

		const pdf = new jsPDF({
			orientation: 'portrait',
			unit: 'px',
			format: 'a4'
		});

		const pdfWidth = pdf.internal.pageSize.getWidth();
		const pdfHeight = pdf.internal.pageSize.getHeight();
		const imgWidth = canvas.width;
		const imgHeight = canvas.height;

		// Scale content properly to fit into A4 dimensions
		const scaleFactor = pdfWidth / imgWidth;
		const scaledHeight = imgHeight * scaleFactor;

		if (scaledHeight > pdfHeight) {
			pdf.internal.pageSize.height = scaledHeight;
		}

		pdf.addImage(dataImage, 'PNG', 0, 0, pdfWidth, scaledHeight);
		pdf.save('Transfer Certificate.pdf');
	};

	let message = 'Your TC is Successfully Created';
	let buttonLabel = 'Download TC';
	let buttonListener = downloadPDF;

	if (!status) {
		message = 'OPPS! Server Issue, Unable to send Data';
	}

	return (
		<Container maxWidth="md">
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					minHeight: '100vh',
				}}
			>
				<Typography variant="h4" gutterBottom>
					{message}
				</Typography>

				{/* Fix: Ensure the preview is fully visible without cutting */}
				{status && (
					<Box
						ref={printRef}
						sx={{
							width: '100%',
							maxWidth: '794px', // Matches A4 width
							minHeight: 'auto',
							height: contentHeight, // Set dynamically
							overflow: 'visible', // Ensures nothing is hidden
							padding: 2,
							backgroundColor: '#fff',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<PreviewTC userData={userData}/>
					</Box>
				)}

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
