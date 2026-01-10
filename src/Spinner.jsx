function Spinner() {
  return (
    <div className="flex sm:items-center justify-center py-8">
      <div
        className="
          h-16 w-16
          animate-spin
          rounded-full
          border-6 border-white
          border-t-blue-600
        "
      />
    </div>
  );
}

export default Spinner;
