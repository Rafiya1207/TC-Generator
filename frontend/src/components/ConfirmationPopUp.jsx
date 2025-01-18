import React, { useRef, useState } from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import PreviewTC from './PreviewTC';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const ConfirmationPopUp = ({ status, setDoesGotResponse }) => {
	const downloadPDF = async () => {
		const printRef = useRef(null);
		const element = printRef.current;

		if (!element) return;

		const canvas = await html2canvas(element);
		const dataImage = canvas.toDataURL('image/png');

		const pdf = new jsPDF({
			orientation: 'portrait',
			unit: 'px',
			format: 'a4'
		});

		// Get A4 page dimensions in pixels (1 px = 1 pt for jsPDF)
		const pdfWidth = pdf.internal.pageSize.getWidth();
		const pdfHeight = pdf.internal.pageSize.getHeight();

		// Calculate image dimensions while maintaining aspect ratio
		const imgProperties = pdf.getImageProperties(dataImage);
		const imgWidth = imgProperties.width;
		const imgHeight = imgProperties.height;

		let scaledWidth = pdfWidth;
		let scaledHeight = (imgHeight * pdfWidth) / imgWidth;

		if (scaledHeight > pdfHeight) {
			// If the scaled height exceeds page height, scale further
			scaledHeight = pdfHeight;
			scaledWidth = (imgWidth * pdfHeight) / imgHeight;
		}

		pdf.addImage(dataImage, 'PNG', (pdfWidth - scaledWidth) / 2, 0, scaledWidth, scaledHeight);
		pdf.save('Transfer Certificate.pdf');

	};

	const [open, setOpen] = useState(true);
	const handleClose = () => {
		setOpen(false);
		setDoesGotResponse(false)
	};

	let message = 'Your TC is Successfully Created';
	let buttonLabel = 'Download TC';
	let buttonListener = downloadPDF;

	if (!status) {
		message = 'OPPS! Server Issue, Unable to send Data';
		buttonLabel = 'close';
		buttonListener = handleClose;
	}

	return (
		<div>
			<Dialog open={open} onClose={handleClose} maxWidth='800px'>
				<DialogTitle>{message}</DialogTitle>
				<DialogActions>
					<Button onClick={buttonListener} color="primary">
						{buttonLabel}
					</Button>
				</DialogActions>
				{status && <PreviewTC printRef={printRef} />}
			</Dialog>
		</div>
	);
};

export default ConfirmationPopUp;
