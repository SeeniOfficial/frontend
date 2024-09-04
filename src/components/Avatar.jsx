import React from "react";

export const Avatar = ({ user }) => {
    const getInitials = (name = 'Ajao Richard') => {
        const names = name.split(" ");
        return names
          .map((n) => n[0])
          .join("")
          .toUpperCase();
      };

//   if (user.profileImage) {
//     return (
//       <img
//         src={user.profileImage}
//         alt={user.name}
//         className="w-8 h-8 rounded-full object-cover"
//       />
//     );
//   } else {
    return (
      <div className="w-10 h-10 p-4 text-sm rounded-full bg-primary flex items-center justify-center text-white font-bold">
        {getInitials(user)}
      </div>
    );
  }
// };
