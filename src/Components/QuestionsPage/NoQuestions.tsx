
function NoQuestions() {
  return (
    <>
        <main className="flex items-center justify-center p-6 w-full h-full z-10 relative text-center text-md text-(--text-color)">
          <div className="flex flex-col justify-center gap-6">
            <i className="pi pi-spin pi-cog" style={{ fontSize: "5rem" }}></i>
            <p>AI is generating questions...</p>
          </div>
        </main>
      </>
  )
}

export default NoQuestions
