import chalk from "chalk";
import gs from "gradient-string";

export const colors = {
	blue: "#00A3FF",
	blueSky: "#51D2FB",
	mintGreen: "#42F0CD",
	inkyBlue: "#130f25",
	lightBlue: "#99DAFF",
	orange: "#ff7b01",
	pink: "#ff69b4",
	yellow: "#ffc942",
	purple: "#9d4edd",
	lavender: "#e0aaff",
	cgaCyan: "#00aaaa",
	cgaLightCyan: "#55ffff",
	cgaMagenta: "#aa00aa",
	cgaLightMagenta: "#ff55ff",
	cgaWhite: "#ffffff",
	cgaBlack: "#000000",
};

export const palette = {
	blue: chalk.hex( colors.blue ),
	lightBlue: chalk.hex( colors.lightBlue ),
	orange: chalk.hex( colors.orange ),
	yellow: chalk.hex( colors.yellow ),
	pink: chalk.hex( colors.pink ),
	purple: chalk.hex( colors.purple ),
	lavender: chalk.hex( colors.lavender ),
	cgaCyan: chalk.hex( colors.cgaCyan ),
	cgaLightCyan: chalk.hex( colors.cgaLightCyan ),
	cgaMagenta: chalk.hex( colors.cgaMagenta ),
	cgaLightMagenta: chalk.hex( colors.cgaLightMagenta),
	cgaWhite: chalk.hex( colors.cgaWhite ),
	cgaBlack: chalk.hex( colors.cgaBlack )
};

export const gradient = gs( [ colors.pink, colors.purple, colors.lavender ] );
export const cgaGradient = gs( [ colors.cgaCyan, colors.cgaLightCyan, colors.cgaWhite ] );