type Criteria = { [k: string]: number | string };

export const queryString = (criteria: Criteria) =>
  Object.entries(criteria)
    .filter(([, value]) => value)
    .map(([key, value]) => {
      if (key === "_page" || key === "_limit") {
        return `${key}=${value}`;
      } else {
        return `${key}_like=${value}`;
      }
    })
    .join("&");

export const applyQueryString = (criteria: Criteria) => {
  const query = queryString(criteria);
  return query.length ? "?" + query : "";
};
