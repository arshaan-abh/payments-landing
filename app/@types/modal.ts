export interface ModalDataType {
	image: any;
	bg: any;
	description: {
		title: string;
		subTitle: string;
		information: {
			name: string;
			inf1: string;
			inf1des: string;
			inf2: string;
			inf2des: string;
			inf3: string;
			inf3des: string;
			inf4: string;
			inf4des: string;
			inf5: string; // Assuming you meant "inf5" instead of "inf4" since "inf4" is repeated
			inf5des: string;
		};
		connecting: {
			name: string;
			con1: { text: string; has: boolean };
			con2: { text: string; has: boolean };
			con3: { text: string; has: boolean };
			con4: { text: string; has: boolean };
		};
	}[];
}
