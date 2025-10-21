function Categories() {
  return (
    <div className="h-full w-full p-6 relative z-10">
      <button type="button" className="flex active:bg-(--secondary-color) active:text-(--white-text) rounded-sm">
        <span className="material-symbols-rounded" style={{fontSize:'40px', color:' var(--text-color)', fontWeight: '400'}}>arrow_back</span>
      </button>

      <p className="text-end mt-4 text-(--white-text) text-xl">
        selected: 0/3
      </p>
    </div>
  );
}

export default Categories;
