import PropTypes from "prop-types";
const ChatMessage = ({ sender, message, photo }) => {
	return (
		<div
			className={`flex ${
				sender === "User" ? "justify-end" : "justify-start"
			} items-center mb-4`}
		>
			{sender !== "User" && (
				<div className='w-10 h-10 mr-2'>
					<img
						src={photo}
						alt={`${sender}'s Photo`}
						className='w-full h-full rounded-full'
					/>
				</div>
			)}
			<div
				className={`p-4 rounded-lg shadow-lg ${
					sender === "User" ? "bg-blue-400 text-white" : "bg-gray-200"
				}`}
			>
				{message}
			</div>
		</div>
	);
};
ChatMessage.propTypes = {
	sender: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	photo: PropTypes.string.isRequired,
};

export default ChatMessage;
