import { toast } from 'react-toastify';

export const toastSuccess = message => {
	toast.success(message, {
		position: toast.POSITION.TOP_CENTER,
		autoClose: 1000,
		hideProgressBar: false,
		className: 'toast-success-container toast-success-container-after',
	});
};

export const toastError = message => {
	toast.error(message, {
		position: toast.POSITION.TOP_CENTER,
	});
};
