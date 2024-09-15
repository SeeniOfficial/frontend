import React from "react";

export const Avatar = ({ user, style }) => {
    const getInitials = (name) => {
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
      <div className={`rounded-full flex items-center justify-center font-bold ${style}`}>
        {getInitials(user)}
      </div>
    );
  }
// };
