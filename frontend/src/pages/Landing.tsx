import { Link } from "react-router-dom"

export const Landing = () => {
    return (
        <div className="bg-yellow-500">
            <div className="border-b border-slate-950 px-10 py-2 flex justify-between items-center">
                <div className="flex items-center text-xl font-bold">
                    Medium
                </div>
                <div className="flex justify-center items-center">
                    <div className="pr-4 font-semibold">
                        <Link to={`/signin`}>
                            Sign in
                        </Link>
                    </div>
                    <div>
                        <Link to={`/signup`}>
                            <button className="bg-gray-900 hover:bg-gray-950 text-white font-semibold py-1 px-3 rounded-full">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-2">
                <div className="px-10 flex flex-col justify-center items-center">
                    <div className="space-y-6">
                        <div className="text-8xl font-semibold">
                            Stay curious.
                        </div>
                        <div className="text-2xl">
                            Discover stories, thinking, and expertise from writers on any topic.
                        </div>
                        <div>
                            <Link to={`/signup`}>
                                <button className="bg-gray-900 hover:bg-gray-950 text-white text-md font-bold py-1.5 px-10 rounded-full">
                                    Start Reading
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="invisible lg:visible">
                    <div className="flex items-center justify-center bg-yellow-500 h-screen px-24">
                        <div>
                            <div className="text-3xl font-bold">“The customer service I received was exceptional. The support team went above and beyond to address my concerns.“</div>
                            <div className="text-xl font-bold pt-4">Jules Winnfield</div>
                            <div className="text-lg font-medium">CEO, ACME Inc</div>
                        </div>
                    </div >
                </div>
            </div>
        </div>
    )
}

