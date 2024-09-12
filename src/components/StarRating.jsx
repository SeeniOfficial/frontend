import React from "react";

export const StarRating = ({ value, starColor }) => {
  const updateRating = (rating) => {
    const roundedValue = Math.ceil(rating);
    const hue = Math.min(rating * 25, 120); // 0 to 120 (red to green)
    const color = `${starColor}`;
    return { roundedValue, color };
  };

  const { roundedValue, color } = updateRating(value);

  return (
    <div className="flex items-center mx-auto">
      <div className="flex mr-2">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className="transition-colors duration-[0.3s] ease-in-out mr-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: index < roundedValue ? color : 'rgba(0, 0, 0, 0.2)' }}
          >
            <path
              d="M5.41598 23.1649C4.83698 23.4619 4.17998 22.9414 4.29698 22.2769L5.54198 15.1819L0.25748 10.1479C-0.23602 9.67688 0.0204801 8.81588 0.68198 8.72288L8.02898 7.67888L11.305 1.18838C11.6005 0.603384 12.4 0.603384 12.6955 1.18838L15.9715 7.67888L23.3185 8.72288C23.98 8.81588 24.2365 9.67688 23.7415 10.1479L18.4585 15.1819L19.7035 22.2769C19.8205 22.9414 19.1635 23.4619 18.5845 23.1649L11.998 19.7809L5.41598 23.1649Z"
            />
          </svg>
        ))}
      </div>
      <div className="font-bold text-3xl">
        {value.toFixed(1)}
      </div>
    </div>
  );
};