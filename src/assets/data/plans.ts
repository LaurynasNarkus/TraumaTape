type plan = {
		title: string;
		price: string;
		billed: string;
		sale?: string;
	};

export const plans: plan[] = [
	{
		title: "Subscribe",
		price: "9.99",
		sale: "50",
		billed: "every 6 months",
	},
	{
		title: "Order Once",
		price: "19.98",
		billed: "One time payment",
	},
];