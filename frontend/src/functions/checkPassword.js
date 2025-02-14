const isPassword = (userPassword) => {
	const GPTKLDPassword = 'GPT_207_KLD_C_EC_AIM';
	if ( userPassword === GPTKLDPassword ) return true;
	return false;
};

export default isPassword;