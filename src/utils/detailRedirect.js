export const detailRedirect = function (
  redirect,
  type,
  id,
  handleSearch = () => {}
) {
  redirect(`/details/${type}/${id}`);
  handleSearch();
};
