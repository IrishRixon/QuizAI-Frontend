import Card from "./Card";

function Categories() {
  return (
    <div className="h-full w-full p-6 relative z-10 flex flex-col">
      <button
        type="button"
        className="flex active:bg-(--secondary-color) active:text-(--white-text) rounded-sm"
      >
        <span
          className="material-symbols-rounded"
          style={{
            fontSize: "40px",
            color: " var(--text-color)",
            fontWeight: "400",
          }}
        >
          arrow_back
        </span>
      </button>

      <p className="text-end mt-4 text-(--white-text) text-xl">selected: 0/3</p>

      <div className="flex grow mt-8 ">
        <div className="flex flex-wrap justify-between content-start gap-y-4">
          <Card image="\images\Burger.png" label="Food" alt="Burger"></Card>
          <Card image="\images\History.png" label="History" alt="History"></Card>
          <Card image="\images\Music.png" label="Music" alt="Music"></Card>
          <Card image="\images\Anime.png" label="Anime" alt="Anime"></Card>
        </div>
      </div>
        <button>Start</button>
    </div>
  );
}

export default Categories;
