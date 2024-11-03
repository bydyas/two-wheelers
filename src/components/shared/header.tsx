import { Link } from "@tanstack/react-router";
import { landingPages } from "../../config/pages-url.config";
import { AuthControls } from "./auth-controls";

export function Header() {
	const linkStyle = "capitalize font-semibold text-[20px] px-[25px]";
	return (
		<header className="pl-[36px] pr-[60px] h-[87px] bg-neu-500 flex items-center justify-between text-pgo-500">
			<Link to={landingPages.HOME} className="font-bold text-[26px]">
				two wheelers
			</Link>
			<div className="flex items-center gap-[20px]">
				<nav className="flex items-center gap-[20px]">
					<Link to={landingPages.HOME} className={linkStyle}>
						home
					</Link>
					<Link to={landingPages.MOTORCYCLES} className={linkStyle}>
						motorcycles
					</Link>
					<Link to={landingPages.OUR_BLOG} className={linkStyle}>
						our blog
					</Link>
					<Link to={landingPages.CONTACT_US} className={linkStyle}>
						contact us
					</Link>
				</nav>
				<AuthControls />
			</div>
		</header>
	);
}
