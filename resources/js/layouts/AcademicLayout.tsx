import { ReactNode, useState } from "react";
import {
    Search,
    Filter,
    ChevronDown,
    ChevronRight,
    GraduationCap,
    BookOpen,
    Target,
    FolderOpen,
} from "lucide-react";

export default function AcademicLayout({
    children,
}: {
    children: ReactNode;
}) {
    const [facultyOpen, setFacultyOpen] = useState(true);
    const [programOpen, setProgramOpen] = useState(true);
    const [nucleusOpen, setNucleusOpen] = useState(true);
    
const criteria = [
    {
        title: "Understand programming logic",
        description: "Analyze algorithms and flow structures",
    },
    {
        title: "Apply data structures",
        description: "Use arrays, lists and objects correctly",
    },
    {
        title: "Develop software solutions",
        description: "Build functional applications",
    },
];
    return (
        <div className="h-screen flex bg-gray-50">
            {/* SIDEBAR */}
            <aside className="w-[420px] border-r bg-white overflow-y-auto">
                <div className="p-5 border-b">
                    <h2 className="font-bold text-gray-700 text-sm">
                        ACADEMIC STRUCTURE
                    </h2>
                </div>

                <div className="p-3 space-y-2">

                    {/* FACULTY */}
                    <div className="rounded-xl hover:bg-gray-100">
                        <button
                            onClick={() => setFacultyOpen(!facultyOpen)}
                            className="w-full flex items-center gap-3 p-3"
                        >
                            {facultyOpen ? (
                                <ChevronDown size={18} />
                            ) : (
                                <ChevronRight size={18} />
                            )}

                            <GraduationCap size={18} />

                            <div className="text-left">
                                <p className="font-semibold">
                                    Faculty of Engineering
                                </p>

                                <p className="text-sm text-gray-500">
                                    1 programs
                                </p>
                            </div>
                        </button>

                        {/* PROGRAM */}
                        {facultyOpen && (
                            <div className="ml-8 border-l pl-4">

                                <button
                                    onClick={() => setProgramOpen(!programOpen)}
                                    className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl"
                                >
                                    {programOpen ? (
                                        <ChevronDown size={16} />
                                    ) : (
                                        <ChevronRight size={16} />
                                    )}

                                    <BookOpen size={18} />

                                    <div className="text-left">
                                        <p className="font-medium">
                                            Systems Engineering
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            10 semesters • 1 nuclei
                                        </p>
                                    </div>
                                </button>

                                {/* NUCLEUS */}
                                {programOpen && (
                                    <div className="ml-8 border-l pl-4">

                                        <button
                                            onClick={() =>
                                                setNucleusOpen(!nucleusOpen)
                                            }
                                            className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl"
                                        >
                                            {nucleusOpen ? (
                                                <ChevronDown size={16} />
                                            ) : (
                                                <ChevronRight size={16} />
                                            )}

                                            <Target size={18} />

                                            <div className="text-left">
                                                <p className="font-medium">
                                                    Software Development
                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    1 competencies
                                                </p>
                                            </div>
                                        </button>

                                        {/* COMPETENCY */}
                                        {nucleusOpen && (
                                            <div className="ml-8 border-l pl-4">

                                                <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl cursor-pointer">
                                                    <FolderOpen size={18} />

                                                    <div>
                                                        <p className="font-medium">
                                                            Programming Competency
                                                        </p>

                                                        <p className="text-sm text-gray-500">
                                                            1 spaces
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* MAIN */}
            <main className="flex-1 overflow-y-auto">
                {/* TOPBAR */}
                <div className="bg-white border-b p-4 flex gap-4">
                    <div className="relative flex-1">
                        <Search
                            className="absolute left-3 top-3 text-gray-400"
                            size={18}
                        />

                        <input
                            placeholder="Search across all academic content..."
                            className="w-full border rounded-xl pl-10 py-3"
                        />
                    </div>

                    <button className="border rounded-xl px-4 py-3 flex items-center gap-2">
                        <Filter size={18} />
                        Filters
                    </button>
                </div>

                {/* CONTENT */}
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}