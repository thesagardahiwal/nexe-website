import React from "react";

interface CaptionPointsProps {
  captions: string[];
  idx: number;
}


const CaptionPoints: React.FC<CaptionPointsProps> = ({ captions, idx }) => {
    if (!captions || !captions[idx]) return null;
  
    const points = captions[idx]
      .split(". ")
      .map(point => point.trim())
      .filter(Boolean)
      .map((point) => (point.endsWith(".") ? point : point + "."));
  
    return (
      <ul className="mt-4 md:w-1/2 list-disc pl-5 text-left text-pretty text-sm text-gray-600 dark:text-gray-300">
        {points.map((point, i) => (
          <li key={i} className="mb-2">{point}</li>
        ))}
      </ul>
    );
  };

  export default CaptionPoints