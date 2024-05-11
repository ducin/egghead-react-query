import { Employee } from "../api/dto";

import cssClass from "./Image.module.css";
import { imageFileURL } from "../api/files";

type EmployeeImageProps = {
  employee: Employee;
};

export const EmployeeImage = ({ employee }: EmployeeImageProps) => (
  <img
    className={`${cssClass["thumb"]} ${cssClass["small"]}`}
    alt={`${employee.firstName} ${employee.lastName}`}
    src={imageFileURL(`images/avatars/${employee.imgURL}`)}
  />
);

export const EmployeeThumbnailImage = ({ employee }: EmployeeImageProps) => (
  <img
    className={`${cssClass["avatar-small"]}`}
    alt={`${employee.firstName} ${employee.lastName} avatar`}
    src={imageFileURL(`images/avatars/${employee.imgURL}`)}
  />
);
