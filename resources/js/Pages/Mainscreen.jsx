import Navbar from '@/Layouts/Navbar';
import { FaEdit } from "react-icons/fa";
import { usePage } from "@inertiajs/react";

export default function Mainscreen() {
    const { users } = usePage().props;

    return (
        <div className="bg-slate-100 min-h-screen">
            <Navbar/>
            <div className="pt-8">
                <h1 className="flex justify-center items-center font-bold text-3xl">Users</h1>
            </div>
            <div className="container mx-auto py-8">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 border-separate rounded-lg shadow-md">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border rounded-tl-lg">ID</th>
                                <th className="py-2 px-4 border">Name</th>
                                <th className="py-2 px-4 border">Email</th>
                                <th className="py-2 px-4 border">Phone</th>
                                <th className="py-2 px-4 border rounded-tr-lg">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td className="py-2 px-4 border">{user.id}</td>
                                    <td className="py-2 px-4 border">{user.name}</td>
                                    <td className="py-2 px-4 border">{user.email}</td>
                                    <td className="py-2 px-4 border">{user.phone}</td>
                                    <td className="py-2 px-4 text-center">
                                        <a href={`/user/edit/${user.id}`} className="flex justify-center items-center w-full h-full text-gray-900">
                                            <FaEdit />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
