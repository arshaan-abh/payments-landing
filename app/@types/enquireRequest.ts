export interface EnquireRequest {
	checkedList?: boolean[];
	name: string;
	companyName: string;
	email: string;
	phone: string;
	webUrl: string;
	description?: string;
}
