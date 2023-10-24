export interface EnquireRequest {
	checkedList?: boolean[];
	name: string;
	companyName: string;
	email: string;
	phone: number;
	webUrl: string;
	description?: string;
}
