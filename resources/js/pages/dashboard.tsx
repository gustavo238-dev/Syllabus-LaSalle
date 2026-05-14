import AcademicLayout from "@/layouts/AcademicLayout";

export default function Dashboard() {
    return (
        <AcademicLayout>
            <div>
                <h1 className="text-5xl font-bold">
                    Systems Engineering
                </h1>

                <p className="text-gray-500 mt-2 text-xl">
                    Comprehensive systems analysis and software development
                </p>

                <div className="grid grid-cols-4 gap-6 mt-8">
                    <div className="bg-white rounded-2xl border p-6">
                        <h3 className="text-gray-500">
                            Learning Outcomes
                        </h3>

                        <p className="text-5xl font-bold mt-4">
                            2
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl border p-6">
                        <h3 className="text-gray-500">
                            Total Activities
                        </h3>

                        <p className="text-5xl font-bold mt-4">
                            5
                        </p>
                    </div>
                </div>
            </div>
        </AcademicLayout>
    );
}
