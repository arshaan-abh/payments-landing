export default function interpolateColor(
	color1: string,
	color2: string,
	percentage: number
): string {
	// Ensure the percentage is between 0 and 1
	percentage = Math.min(1, Math.max(0, percentage));

	// Convert hex colors to RGBA format
	const rgba1 = hexToRgba(color1);
	const rgba2 = hexToRgba(color2);

	// Interpolate each channel
	const r = Math.round(interpolate(rgba1.r, rgba2.r, percentage));
	const g = Math.round(interpolate(rgba1.g, rgba2.g, percentage));
	const b = Math.round(interpolate(rgba1.b, rgba2.b, percentage));

	// Interpolate alpha channel if present
	const alpha = interpolate(rgba1.a, rgba2.a, percentage);

	// Convert back to hex
	const interpolatedColor = rgbaToHex(r, g, b, alpha);

	return interpolatedColor;
}

// Helper function to convert hex to RGB
function hexToRgba(hex: string): {
	r: number;
	g: number;
	b: number;
	a: number;
} {
	const bigint = parseInt(hex.slice(1), 16);
	const r = (bigint >> 24) & 255;
	const g = (bigint >> 16) & 255;
	const b = (bigint >> 8) & 255;
	const a = (bigint & 255) / 255;
	return { r, g, b, a };
}

// Helper function to convert RGB to hex
function rgbaToHex(r: number, g: number, b: number, a: number): string {
	const toHex = (value: number): string => {
		const hex = value.toString(16);
		return hex.length === 1 ? "0" + hex : hex;
	};
	return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(Math.round(a * 255))}`;
}

// Helper function to interpolate between two values
function interpolate(
	value1: number,
	value2: number,
	percentage: number
): number {
	return value1 + (value2 - value1) * percentage;
}
