import React, { useState, useEffect } from 'react';
import Navbar from '@/Layouts/Navbar';
import { FaEdit, FaTrash } from "react-icons/fa";
import { usePage } from "@inertiajs/react";
import { Inertia } from '@inertiajs/inertia';

export default function Mainscreen() {
    const { users } = usePage().props;
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        const results = users.filter(user => 
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(results);
    }, [searchTerm, users]);

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
                <div className="flex justify-center mb-8">
                    <input
                        type="text"
                        placeholder="Search by name or email"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-3 py-2 bg-white shadow-md border-gray-300 border rounded-lg w-2/3"
                    />
                </div>
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
                            {filteredUsers.map(user => (
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
