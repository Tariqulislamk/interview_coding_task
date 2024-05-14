import Buttons from "../Buttons";

const buttonsDetail = [{ name: "Round Trip" }, { name: "One Way" }, { name: "Multi city" }]

function Header() {
    return (
        <div className="lg:px-28 md:px-12 sm:px-8">
            <h1 className="text-left font-medium text-2xl my-2">Master Price</h1>
            <hr />
            <div className="my-3">
                <Buttons buttons={buttonsDetail} />
            </div>

        </div>
    );
}

export default Header;