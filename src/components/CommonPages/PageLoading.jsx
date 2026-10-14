export default function PageLoading() {
  return (
    <div className="fixed inset-x-0 top-0 z-[200] h-0.5 overflow-hidden bg-accent/15">
      <div className="h-full w-2/5 animate-progress rounded-full bg-gradient-accent" />
    </div>
  );
}
