import React from "react";

const UserProfile = () => {
  return (
    <div className="font-rajdhani h-screen w-9/12 mx-auto">
      <div class="overflow-x-auto">
        <h1 className="font-bold text-center text-3xl my-20">User Profile</h1>
        <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead>
            <tr>
              <th class="whitespace-nowrap px-4 py-2 text-left text-lg text-gray-900 font-bold">
                First Name
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left text-lg text-gray-900 font-bold">
                Last Name
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left text-lg text-gray-900 font-bold">
                Email
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left text-lg text-gray-900 font-bold">
                Password
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="whitespace-nowrap px-4 py-2  text-gray-900 font-bold">
                John
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700 font-bold">
                Doe
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700 font-bold">
                jhon.doe@gmail.com
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700 font-bold">
                Jujustu
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProfile;
