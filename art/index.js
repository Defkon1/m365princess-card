
import banner from "./banner.js";
import portrait from "./portrait.js";

const assets = {
	banner,
	portrait
};

export const loadArt = ( name ) => {
	const art = assets[name];

	if ( !art ) {
		throw new Error( `Unknown art asset: ${ name }` );
	}

	return art;
};

export const availableArt = () => Object.keys( assets );