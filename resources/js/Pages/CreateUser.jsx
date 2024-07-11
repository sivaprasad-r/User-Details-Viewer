import Navbar from '@/Layouts/Navbar';
import { useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function CreateUser() {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        phone: "",
    });

    const { route } = usePage();

    const createUser = (e) => {
        e.preventDefault();
        post("/user", data, {
            onSuccess: () => {
                route('user.index');
            },
        });
    };

    return (
        <div className="bg-slate-100 min-h-screen">
            <Navbar />
            <div className="pt-8">
                <h1 className="flex justify-center items-center font-bold text-3xl">Create User</h1>
            </div>
            <div className="mt-10 max-w-2xl mx-auto sm:px-6 lg:px-8">
                <form onSubmit={createUser}>
                    <div className="flex flex-col gap-4">
                        <div className="w-full">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border rounded-lg px-3 py-2 bg-white shadow-md border-transparent w-full"
                                onChange={(e) => setData("name", e.target.value)}
                                value={data.name}
                            />
                        </div>
                        {errors.name && <p className="text-red-700 text-sm text-left">{errors.name}</p>}
                        <div className="w-full">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="border rounded-lg px-3 py-2 bg-white shadow-md border-transparent w-full"
                                onChange={(e) => setData("email", e.target.value)}
                                value={data.email}
                            />
                        </div>
                        {errors.email && <p className="text-red-700 text-sm text-left">{errors.email}</p>}
                        <div className="w-full">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="border rounded-lg px-3 py-2 bg-white shadow-md border-transparent w-full"
                                onChange={(e) => setData("phone", e.target.value)}
                                value={data.phone}
                            />
                        </div>
                        {errors.phone && <p className="text-red-700 text-sm text-left">{errors.phone}</p>}
                        <div className="flex justify-center">
                            <button type="submit" className="px-3 py-2 rounded-lg bg-gray-900 text-white shadow-md max-w-24">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
