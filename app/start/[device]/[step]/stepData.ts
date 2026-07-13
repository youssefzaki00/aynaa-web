import routerSteps from "./routerSteps";

export type stepName = "step1" | "step2" | "step3";
export type stepParam = { step: stepName };

const stepData = {
	router: routerSteps,
};

export default stepData;

export type Step = {
	type: "text" | "screenshot" | "link";
	data:
		| string
		| number
		| {
				href: string;
				text: string;
		  };
};

export type Steps = {
	[keys: string]: Step[];
};
