class LandingPages {
	private _root = "/";

	HOME = this._root;
	MOTORCYCLES = `${this._root}motorcycles`;
	OUR_BLOG = `${this._root}our-blog`;
	CONTACT_US = `${this._root}contact-us`;
	LOGIN = `${this._root}login`;
	REGISTRATION = `${this._root}sign-up`;
	PROFILE = `${this._root}profile`;
}

export const landingPages = new LandingPages();
