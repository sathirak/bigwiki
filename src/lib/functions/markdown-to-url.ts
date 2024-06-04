const markdownToFragment = (data: { text: string }) => {
	return data.text.trim().replace(/\s+/g, '-').toLowerCase();
};

export default markdownToFragment;
