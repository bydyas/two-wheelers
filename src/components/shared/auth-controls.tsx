import { Link } from "@tanstack/react-router";
import { landingPages } from "../../config/pages-url.config";
import { Avatar } from "../ui/avatar";

export function AuthControls() {
	const isAuth = true;

	if (isAuth) {
		return (
			<Link to={landingPages.PROFILE}>
				<Avatar url="https://hips.hearstapps.com/hmg-prod/images/how-to-keep-ducks-call-ducks-1615457181.jpg?crop=0.670xw:1.00xh;0.157xw,0&resize=980:*" />
			</Link>
		);
	}

	return (
		<Link
			to={landingPages.LOGIN}
			className="h-[43px] rounded-[10px] bg-pgo-500 px-[45px]"
		>
			<span className="text-[20px] font-semibold capitalize text-neu-900">
				login
			</span>
		</Link>
	);
}
