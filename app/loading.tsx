export default function Loading() {
  return (
    <main className="route-loading" role="status" aria-live="polite" aria-label="جاري فتح الصفحة">
      <span className="route-loading-mark" aria-hidden="true" />
      <span className="route-loading-label">جاري فتح الصفحة</span>
      <span className="route-loading-track" aria-hidden="true"><i /></span>
    </main>
  );
}
