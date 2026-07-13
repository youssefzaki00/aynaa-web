import { genName } from "@/app/appTypes";
import { genData, gensParams } from "@/app/[gen]/genData";
import setupValuesData from "@/app/setupvalues/setupValuesData";
import Table from "@/app/_components/Table";

const SetupValuesPage = ({ params }: { params: { gen: genName } }) => {
	const protection = setupValuesData[params.gen].protection;
	const gen = genData[params.gen];

	return (
		<div className="px-4 py-8">
			<h1 className="mb-8 font-bold text-2xl text-center">{gen.ar}</h1>
			<div className="flex justify-center">
				<Table
					key={0}
					title={protection.ar.title}
					domain="CleanBrowsing Adult Filter"
					primary={protection.primary}
					secondary={protection.secondary}
					doh="adult-filter-dns.cleanbrowsing.org"
					categories={protection.categories}
				/>
			</div>
		</div>
	);
};

export default SetupValuesPage;

export function generateStaticParams() {
	return gensParams;
}
