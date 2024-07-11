import Navbar from '@/Layouts/Navbar';
import { FaEdit, FaTrash } from "react-icons/fa";
import { usePage } from "@inertiajs/react";
import { Inertia } from '@inertiajs/inertia';

export default function Mainscreen() {
    const { users } = usePage().props;

    const handleDelete = (userId) => {
        if (confirm('Are you sure you want to delete this user?')) {
            Inertia.delete(`/user/${userId}`);
        }
    };

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
                                    <td className="py-2 px-4 flex justify-center items-center gap-8">
                                        <a href={`/user/edit/${user.id}`} className="text-gray-900">
                                            <FaEdit />
                                        </a>
                                        <button className="text-red-800" onClick={() => handleDelete(user.id)}>
                                            <FaTrash />
                                        </button>
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
