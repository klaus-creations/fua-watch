import LoadingSpinner from "./LoadingSpinner";

export default function PageLoading() {
  return (
    <div className="w-full h-full fixed inset-0 z-[200] flex items-center justify-center bg-black/[.3]">
      <LoadingSpinner value={"loading"} />
    </div>
  );
}
