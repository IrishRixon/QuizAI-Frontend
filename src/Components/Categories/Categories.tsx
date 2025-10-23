import Button from "./Button";
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

      <div className="flex grow mt-8 flex-col">
        <div className="flex flex-wrap justify-between content-start gap-y-4">
          <Card image="\images\Burger.png" label="Food" alt="Burger"></Card>
          <Card image="\images\History.png" label="History" alt="History"></Card>
          <Card image="\images\Music.png" label="Music" alt="Music"></Card>
          <Card image="\images\Anime.png" label="Anime" alt="Anime"></Card>
          <Card image="\images\Heroes.png" label="Heroes" alt="Super Heroes"></Card>
          <Card image="\images\Sports.png" label="Sports" alt="Sports"></Card>
          <Card image="\images\Riddles.png" label="Riddles" alt="Riddles"></Card>
          <Card image="\images\Countries.png" label="Countries" alt="Countries"></Card>
          <Card image="\images\Quotes.png" label="Quotes" alt="Quotes"></Card>
        </div>

        <div>
          <p className="text-start mt-8 text-(--white-text) text-xl" >Select difficulty: </p>
          <div className="mt-4 flex justify-between">
            <Button label="Easy"></Button>
            <Button label="Medium"></Button>
            <Button label="Hard"></Button>
          </div>
        </div>

        <div>
          <p className="text-start mt-8 text-(--white-text) text-xl" >Number of questions: </p>
          <div className="mt-4 flex justify-between">
            <Button label="10"></Button>
            <Button label="15"></Button>
            <Button label="20"></Button>
          </div>
        </div>
      </div>
      
        <button className="h-[53px] w-full bg-(--accent-color) rounded text-(--white-text)">Start</button>
    </div>
  );
}

export default Categories;
