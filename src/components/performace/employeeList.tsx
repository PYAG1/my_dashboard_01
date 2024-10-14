import React from 'react';
import { Progress } from '../ui/progress';
import { Edit } from 'iconsax-react';
import { TrashIcon } from '@heroicons/react/24/outline';

// Generate random users
const generateUsers = () => {
  const users = [];
  for (let i = 0; i < 20; i++) {
    users.push({
      name: `User ${i + 1}`,
      title: 'Front-end Developer',
      department: 'Optimization',
      email: `user${i + 1}@example.com`,
      role: i % 2 === 0 ? 'Admin' : 'Member',
      image: `https://randomuser.me/api/portraits/men/${i + 1}.jpg`,
      progress: Math.ceil(Math.random() * 90) + 10,
    });
  }
  return users;
};

const people = generateUsers();

export default function EmployeeList() {
  return (
    <div className="py-3">
      <div className="rounded-lg border border-gray-200 bg-white ">
        <div className="overflow-x-auto rounded-t-lg">
        <div className=' p-5'>
        <p className=" text-dark text-4xl font-semibold manrope">Team List</p>
        </div>
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Title</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Department</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Progress</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {people.map((person, index) => (
                <tr key={index}>
                  <td className="py-5 pl-2 pr-2 text-sm">
                    <div className="flex items-center">
                      <div className="h-11 w-11 flex-shrink-0">
                        <img alt="" src={person.image} className="h-11 w-11 rounded-full" />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">{person.name}</div>
                        <div className="mt-1 text-gray-500">{person.email}</div>
                      </div>
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{person.title}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{person.department}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{person.role}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <div className="text-gray-900">{`${person.progress}%`}</div>
                    <div className="mt-1">
                      <Progress value={person.progress} className="bg-gray-200" />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex gap-1">
                    <button className="p-2 border border-1 rounded-full"><Edit className=' w-4 h-4'/></button>
                    <button className="p-2 border border-1 rounded-full"><TrashIcon className='w-4 h-4'/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
          <ol className="flex justify-end gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                1
              </a>
            </li>

            <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
              2
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                4
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
