import React, { useRef, useEffect, useState, useContext } from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import PreviewTC from './Generate TC/PreviewTC.jsx';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserDataContext.jsx';

const TCDownloadPage = () => {
	const printRef = useRef(null);
	const location = useLocation();
	const status = location.state;
	const [contentHeight, setContentHeight] = useState('auto');
	const { userData, updateCertificateNumber } = useContext(UserDataContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (printRef.current) {
			setContentHeight(printRef.current.scrollHeight);
		}
	}, [status]);

	const downloadPDF = async () => {
		const element = printRef.current;
		if (!element) return;

		const canvas = await html2canvas(element, {
			scale: 3,
			useCORS: true, 
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

				{status && (
					<Box
						ref={printRef}
						sx={{
							width: '100%',
							maxWidth: '794px',
							minHeight: 'auto',
							height: contentHeight, 
							overflow: 'visible', 
							padding: 2,
							backgroundColor: '#fff',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<PreviewTC userData={userData}/>
					</Box>
				)}

				<Box sx={{ textAlign: 'center' }}>
					<Typography variant="body1" color="error" gutterBottom>
						Once you go back you can't download this TC again, so download it now.
					</Typography>
					<Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
						<Button variant="contained" color="primary" onClick={buttonListener}>
							{buttonLabel}
						</Button>
						<Button variant="outlined" color="secondary" onClick={() => { navigate('/dashboard'); updateCertificateNumber(); }}>
							Back to Home
						</Button>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default TCDownloadPage;
