interface Props {
	url: string;
}

export function Avatar({ url }: Props) {
	return (
		<img
			src={url}
			className="size-[60px] rounded-[50%] border border-pgo-500"
			alt="Avatar"
		/>
	);
}
