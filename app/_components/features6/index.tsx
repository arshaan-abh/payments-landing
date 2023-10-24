import Image from "next/image";
import Mobile1 from "../../../public/mobile1.svg";
import Mobile2 from "../../../public/mobile2.svg";
import Mobile3 from "../../../public/mobile3.svg";
import Mobile4 from "../../../public/mobile4.svg";

function Feature6() {
	return (
		<div className="grid grid-cols-12 my-44 gap-4">
			<div className="col-span-3">
				<Image src={Mobile1} alt="mobile" />
				<div>
					<h3 className="text-2xl font-black text-primery my-8">
						Tap to Pay iPhone
					</h3>
					<p className="text-lg font-normal text-gray_1">
						Accept contactless payments right on an iPhone with Tap to Pay on
						iPhone
					</p>
					<p className="text-lg font-normal text-gray_1 mt-8">
						* no extra terminals or hardware needed.
					</p>
				</div>
			</div>
			<div className="col-span-3">
				<Image src={Mobile2} alt="mobile" />
				<div>
					<h3 className="text-2xl font-black text-primery my-8">
						Tap to Pay Android
					</h3>
					<p className="text-lg font-normal text-gray_1">
						Accepting contactless payments on any NFC-enabled Android device.
					</p>
					<p className="text-lg font-normal text-gray_1 mt-8">
						* no extra terminals or hardware needed.
					</p>
				</div>
			</div>
			<div className="col-span-3">
				<Image src={Mobile3} alt="mobile" />
				<div>
					<h3 className="text-2xl font-black text-primery my-8">S1F2</h3>
					<p className="text-lg font-normal text-gray_1">
						An all-in-one Android device with printing power
					</p>
				</div>
			</div>
			<div className="col-span-3">
				<Image src={Mobile4} alt="mobile" />
				<div>
					<h3 className="text-2xl font-black text-primery my-8">S1E2</h3>
					<p className="text-lg font-normal text-gray_1">
						Sleek, durable, and mobile all-in-one Android device
					</p>
				</div>
			</div>
		</div>
	);
}

export default Feature6;
