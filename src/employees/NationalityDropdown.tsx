import React from "react";
import { useGeoQuery } from "../api/geoApi";
import { Nationality } from "../api/dto";

interface NationalityDropdownProps {
  onChange: (nationality?: Nationality) => void;
}

export const NationalityDropdown: React.FC<NationalityDropdownProps> = (
  props
) => {
  const { onChange } = props;

  const { data, isLoading } = useGeoQuery();

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <select onChange={(e) => onChange(e.target.value as Nationality)}>
      <option></option>
      {Object.keys(data).map((nationality) => (
        <option key={nationality}>{nationality}</option>
      ))}
    </select>
  );
};
